#!/bin/bash
#SBATCH --partition main
#SBATCH --time 0-03:00:00
#SBATCH --job-name BpTestTell_LongSuite
#SBATCH --output suite-%J.out
#SBATCH --gpus=0

# Source module initialization script to define 'module' function
source /etc/profile.d/modules.sh

# Load required modules
module load java/java11
module load anaconda

# Activate conda environment with Flask and python libraries installed
source activate provengo

# Move to the Context directory of BpTestTell
cd /home/geraw/BpTestTell/Context

# Define the list of 15 bugs to execute
BUGS=("bug1" "bug2" "bug3" "bug4" "bug5" "bug6" "bug7" "bug8" "bug9" "bug10" "bug11" "bug12" "bug13" "bug14" "bug15")

echo "Starting BpTestTell Long Test Suite of 15 bugs..."

# Initialize a results summary string
RESULTS=""

for BUG in "${BUGS[@]}"; do
    echo "=========================================="
    echo "Testing $BUG..."
    echo "=========================================="
    
    # 1. Restore original SUT file
    cp ../packs/suts/Library/sut_type_original.py ../packs/suts/Library/sut_type.py
    
    # 2. Plant the bug using the updated plant_bug.py
    python plant_bug.py "$BUG" ../packs/suts/Library/sut_type.py
    if [ $? -ne 0 ]; then
        echo "Error: Failed to plant bug $BUG"
        RESULTS="$RESULTS$BUG: PLANT_ERROR"$'\n'
        continue
    fi
    
    # 3. Launch SUT in background and log output
    python ../packs/suts/Library/sut_type.py > sut.log 2>&1 &
    SUT_PID=$!
    
    # 4. Wait for SUT server to be responsive
    SUT_UP=0
    for i in {1..30}; do
        python -c "import urllib.request; urllib.request.urlopen('http://localhost:23242/users')" >/dev/null 2>&1
        if [ $? -eq 0 ]; then
            SUT_UP=1
            break
        fi
        echo "Waiting for SUT to start..."
        sleep 1
    done
    
    if [ $SUT_UP -ne 1 ]; then
        echo "Error: SUT failed to start for $BUG"
        kill $SUT_PID
        wait $SUT_PID 2>/dev/null
        RESULTS="$RESULTS$BUG: SUT_START_ERROR"$'\n'
        continue
    fi
    
    # 5. Reset SUT DB
    python reset_sut_db.py
    
    # 6. Run Provengo up to 25 times to robustly identify the bug
    BUG_CAUGHT=0
    NUM_RUNS=25
    for run in $(seq 1 $NUM_RUNS); do
        echo "Running Provengo test run $run/$NUM_RUNS..."
        python reset_sut_db.py
        
        /home/geraw/provengo/provengo run test_ctx >/dev/null 2>&1
        STATUS=$?
        if [ $STATUS -ne 0 ]; then
            BUG_CAUGHT=1
            echo "Bug $BUG caught on run $run!"
            break
        fi
    done
    
    # 7. Clean up SUT process
    kill $SUT_PID
    wait $SUT_PID 2>/dev/null
    
    # 8. Append results
    if [ $BUG_CAUGHT -eq 1 ]; then
        echo "RESULT: $BUG was SUCCESSFULLY IDENTIFIED!"
        RESULTS="$RESULTS$BUG: IDENTIFIED"$'\n'
    else
        echo "RESULT: $BUG was MISSED by the model!"
        RESULTS="$RESULTS$BUG: MISSED"$'\n'
    fi
done

# Restore SUT to a clean state at the end of the suite
cp ../packs/suts/Library/sut_type_original.py ../packs/suts/Library/sut_type.py

# Send the email notification
python - <<EOF
import smtplib
from email.mime.text import MIMEText

results_summary = """$RESULTS"""

email_content = f"""Hello Gera,

The BpTestTell long-duration test suite execution has completed on the Slurm cluster!

Here is the summary of the bug identification results:
--------------------------------------------------
{results_summary}
--------------------------------------------------

If any bugs were MISSED or if you want to understand the exact scenarios the model failed to cover (e.g. masking logic or missing event assertions), please ask me to explain more!

Best regards,
Antigravity AI Assistant"""

msg = MIMEText(email_content)
msg['Subject'] = 'BpTestTell Long Test Suite Execution Summary'
msg['From'] = 'geraw@slurm.bgu.ac.il'
msg['To'] = 'gera.weiss@gmail.com'

try:
    s = smtplib.SMTP('smtp.bgu.ac.il', 25)
    s.send_message(msg)
    s.quit()
    print("Summary email sent successfully!")
except Exception as e:
    print(f"Failed to send summary email: {e}")
EOF

echo "Long Test Suite execution finished!"
