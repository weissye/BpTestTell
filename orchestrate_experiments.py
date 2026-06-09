import subprocess
import time
import sys

bugs = [f"bug{i}" for i in range(1, 11)]

def run_ssh_cmd(cmd):
    ssh_cmd = ["ssh", "slurm.bgu.ac.il", cmd]
    res = subprocess.run(ssh_cmd, capture_output=True, text=True)
    return res.stdout.strip(), res.stderr.strip()

print("Starting verification of 10 different bugs on the Slurm cluster...")

results = {}

for bug in bugs:
    print(f"\n==========================================")
    print(f"Starting experiment for {bug}...")
    print(f"==========================================")
    
    # Submit the sbatch job
    submit_stdout, submit_stderr = run_ssh_cmd(f"cd /home/geraw/BpTestTell/Context && sbatch run_test_buggy.sbatch {bug}")
    print(f"Submit output: {submit_stdout}")
    if "Submitted batch job" not in submit_stdout:
        print(f"Error submitting job: {submit_stderr}")
        results[bug] = "SUBMISSION_ERROR"
        continue
    
    # Extract job ID
    job_id = submit_stdout.split()[-1]
    print(f"Job ID: {job_id}")
    
    # Poll squeue until job is completed
    consecutive_missing = 0
    while True:
        squeue_out, _ = run_ssh_cmd(f"squeue -j {job_id}")
        if job_id not in squeue_out:
            # Sometimes squeue has a transient delay, verify twice
            consecutive_missing += 1
            if consecutive_missing >= 2:
                break
        else:
            consecutive_missing = 0
            # Print current state
            lines = squeue_out.split("\n")
            if len(lines) > 1:
                print(f"Job status: {lines[1].strip()}")
        time.sleep(10)
        
    print(f"Job {job_id} finished. Fetching results...")
    time.sleep(2) # Give NFS time to sync the log file
    
    # Read the output log of the job
    log_out, _ = run_ssh_cmd(f"cat /home/geraw/BpTestTell/Context/job-{job_id}.out")
    
    # Look for success or fail message
    if "SUCCESS: Provengo failed" in log_out:
        print(f"RESULT: {bug} -> SUCCESSFULLY IDENTIFIED BY MODEL!")
        results[bug] = "IDENTIFIED"
    elif "FAIL: Provengo succeeded" in log_out:
        print(f"RESULT: {bug} -> FAILED (Model missed the bug!)")
        results[bug] = "MISSED"
    else:
        print(f"RESULT: {bug} -> UNKNOWN / RUN ERROR")
        results[bug] = "ERROR"
        print("--- Log snippet ---")
        lines = log_out.split('\n')
        for line in lines[-20:]:
            print(line)
        print("-------------------")

print("\n==========================================")
print("EXPERIMENTS SUMMARY")
print("==========================================")
for bug, res in results.items():
    print(f"{bug}: {res}")
