from flask import Flask, request, jsonify
from datetime import datetime
import os, time
app=Flask(__name__)
now=lambda: datetime.utcnow().replace(microsecond=0).isoformat()+'Z'
def ok(x,c=200): return jsonify(x),c
def err(m,c=400): return jsonify({'error':m}),c
def req(b,fs):
    for f in fs:
        if f not in b: return f'Missing required field: {f}'
    return None
machines={}; workorders={}; tickets={}; readings=[]
def seed(): machines.clear(); workorders.clear(); tickets.clear(); readings.clear(); machines['M-1']={'machineId':'M-1','plantId':'PL-1','status':'idle'}
@app.route('/reset',methods=['POST'])
def reset(): seed(); return ok({'status':'reset'})
@app.route('/machines',methods=['GET','POST'])
def machines_ep():
 if request.method=='GET': return ok(list(machines.values()))
 b=request.get_json(force=True,silent=True) or {}; m=req(b,['machineId','plantId','status']);
 if m: return err(m,400)
 if b['machineId'] in machines: return err('duplicate-id',400)
 if b['status'] not in ['idle','running','down','maintenance']: return err('invalid-status',400)
 b.setdefault('capacity', 100)
machines[b['machineId']]=b; return ok(machines[b['machineId']],201)
@app.route('/workorders',methods=['GET','POST'])
def wos():
 if request.method=='GET': return ok(list(workorders.values()))
 b=request.get_json(force=True,silent=True) or {}; m=req(b,['woId','partId','quantity','dueDate']);
 if m: return err(m,400)
 if b.get('machineId') and (b['machineId'] not in machines or machines[b['machineId']]['status']=='down'): return err('invalid-machine' if b['machineId'] not in machines else 'machine-down',400)
 if b['woId'] in workorders: return err('duplicate-id',400)
 # capacity / write-skew check
try:
  _mid = b.get('machineId')
  _qty = int(b.get('quantity',0))
  _cap = machines.get(_mid,{}).get('capacity', 100000)
  _allocated = sum(int(w.get('quantity',0)) for w in workorders.values() if w.get('machineId')==_mid)
  if _allocated + _qty > _cap:
    return err('over-capacity',400)
  if os.getenv('BUG_WRITE_SKEW','0')=='1':
    time.sleep(float(os.getenv('BUG_WRITE_SKEW_DELAY','0.2')))
except Exception:
  pass
workorders[b['woId']]={**b,'createdAt':now()}; return ok(workorders[b['woId']],201)
@app.route('/maintenance-tickets',methods=['GET','POST'])
def mnt():
 if request.method=='GET': return ok(list(tickets.values()))
 b=request.get_json(force=True,silent=True) or {}; m=req(b,['ticketId','machineId','priority','status']);
 if m: return err(m,400)
 if b['machineId'] not in machines: return err('invalid-machine',400)
 if b['ticketId'] in tickets: return err('duplicate-id',400)
 tickets[b['ticketId']]={**b,'createdAt':now()}; return ok(tickets[b['ticketId']],201)
@app.route('/sensor-readings',methods=['GET','POST'])
def sens():
 if request.method=='GET': return ok(readings)
 b=request.get_json(force=True,silent=True) or {}; m=req(b,['readingId','machineId','timestamp']);
 if m: return err(m,400)
 if b['machineId'] not in machines: return err('invalid-machine',400)
 readings.append(b); t=b.get('temperatureC'); v=b.get('vibration')
 if (isinstance(t,(int,float)) and t>80) or (isinstance(v,(int,float)) and v>10):
  tid=f"T-{len(tickets)+1}"; tickets[tid]={'ticketId':tid,'machineId':b['machineId'],'priority':'high','status':'open','createdAt':now()}
 return ok(b,201)
if __name__=='__main__': seed(); app.run(host='0.0.0.0',port=5015)
