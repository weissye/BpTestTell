import smtplib
from email.mime.text import MIMEText
import sys

def test_smtp(host, port=25):
    try:
        print(f"Trying SMTP connection to {host}:{port}...")
        s = smtplib.SMTP(host, port, timeout=5)
        print(f"Connected to {host}!")
        msg = MIMEText("Test email from BpTestTell experiment.")
        msg['Subject'] = 'SMTP Test'
        msg['From'] = 'geraw@slurm.bgu.ac.il'
        msg['To'] = 'gera.weiss@gmail.com'
        s.send_message(msg)
        s.quit()
        print(f"Email sent successfully via {host}!")
        return True
    except Exception as e:
        print(f"Failed via {host}: {e}")
        return False

hosts = ['localhost', 'mail.bgu.ac.il', 'smtp.bgu.ac.il', 'obren.bgu.ac.il']
for h in hosts:
    if test_smtp(h):
        sys.exit(0)
sys.exit(1)
