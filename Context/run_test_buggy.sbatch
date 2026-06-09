#!/bin/bash
#SBATCH --partition main
#SBATCH --time 0-00:10:00
#SBATCH --job-name BpTestTell_Buggy
#SBATCH --output job-%J.out
#SBATCH --gpus=0

# Print cluster environment info
echo "SLURM_JOBID"=$SLURM_JOBID
echo "SLURM_JOB_NODELIST"=$SLURM_JOB_NODELIST

# Source module initialization script to define 'module' function
source /etc/profile.d/modules.sh

# Load required modules
module load java/java11
module load anaconda

# Activate conda environment with Flask installed
source activate provengo

# Move to the Context directory of BpTestTell
cd /home/geraw/BpTestTell/Context

BUG_NAME=$1
if [ -z "$BUG_NAME" ]; then
    echo "Error: No bug name specified"
    exit 1
fi

echo "Running experiment for: $BUG_NAME"

# Copy original file to sut_type.py
cp ../packs/suts/Library/sut_type_original.py ../packs/suts/Library/sut_type.py

# Plant the bug
python plant_bug.py "$BUG_NAME" ../packs/suts/Library/sut_type.py
if [ $? -ne 0 ]; then
    echo "Error: Failed to plant bug $BUG_NAME"
    exit 1
fi

# Launch SUT in background and log to sut.log
python ../packs/suts/Library/sut_type.py > sut.log 2>&1 &
SUT_PID=$!

# Wait for SUT to start
for i in {1..30}; do
    python -c "import urllib.request; urllib.request.urlopen('http://localhost:23242/users')" >/dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "SUT is up and running!"
        break
    fi
    echo "Waiting for SUT to start..."
    sleep 1
done

# Reset SUT database
python reset_sut_db.py

# Run Provengo model. We expect it to FAIL because it should catch the bug.
/home/geraw/provengo/provengo run test_ctx
PROVENGO_STATUS=$?

# Clean up background SUT process
kill $SUT_PID

# Report status:
# If PROVENGO_STATUS is 0, it means Provengo ran successfully and DID NOT catch the bug.
# If PROVENGO_STATUS is non-zero, it means Provengo failed (which is correct, as it identified the bug).
if [ $PROVENGO_STATUS -eq 0 ]; then
    echo "FAIL: Provengo succeeded (meaning it missed the planted bug $BUG_NAME!)"
    exit 1
else
    echo "SUCCESS: Provengo failed with exit code $PROVENGO_STATUS (meaning the model successfully identified the planted bug $BUG_NAME!)"
    exit 0
fi
