#!/bin/bash
#SBATCH --partition main
#SBATCH --time 0-01:00:00
#SBATCH --job-name BpTestTell
#SBATCH --output job-%J.out
#SBATCH --gpus=0

# Print cluster environment info
echo "SLURM_JOBID"=$SLURM_JOBID
echo "SLURM_JOB_NODELIST"=$SLURM_JOB_NODELIST

# Load required modules
module load java/java11
module load anaconda

# Activate conda environment with Flask installed
source activate provengo

# Move to the Context directory of BpTestTell
cd /home/geraw/BpTestTell/Context

# Launch SUT in background and log to sut.log
python ../packs/suts/Library/sut_type.py > sut.log 2>&1 &
SUT_PID=$!

# Wait for SUT to start
sleep 3

# Execute 10 test runs
FAILED=0
for i in {1..10}
do
    echo "====================================="
    echo "Run $i/10"
    echo "====================================="
    
    # Reset SUT database
    python reset_sut_db.py
    if [ $? -ne 0 ]; then
        echo "Database reset failed on run $i"
        FAILED=1
        break
    fi
    
    # Run Provengo model
    /home/geraw/provengo/provengo run test_ctx
    if [ $? -ne 0 ]; then
        echo "Provengo run failed on run $i"
        FAILED=1
        break
    fi
done

# Clean up background SUT process
kill $SUT_PID

# Report final status
if [ $FAILED -eq 1 ]; then
    echo "Test suite execution FAILED"
    exit 1
else
    echo "All 10 runs completed successfully!"
    exit 0
fi
