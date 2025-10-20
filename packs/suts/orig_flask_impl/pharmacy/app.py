from flask import Flask, request, jsonify
from datetime import datetime
app=Flask(__name__)
now=lambda: datetime.utcnow().replace(microsecond=0).isoformat()+'Z'
def ok(x,c=200): return jsonify(x),c
def err(m,c=400): return jsonify({'error':m}),c
def req(b,fs):
    for f in fs:
        if f not in b: return f'Missing required field: {f}'
    return None
patients={}; drugs={}; prescriptions={}; orders={}; inventory={}
def seed():
 patients.clear(); drugs.clear(); prescriptions.clear(); orders.clear(); inventory.clear(); drugs['0000-0000']={'ndc':'0000-0000','name':'Acetaminophen','schedule':'OTC'}; inventory['0000-0000']=100
@app.route('/reset',methods=['POST'])
def reset(): seed(); return ok({'status':'reset'})
@app.route('/patients',methods=['POST'])
def patient():
 b=request.get_json(force=True,silent=True) or {}; m=req(b,['patientId','fullName','dob']);
 if m: return err(m,400)
 if b['patientId'] in patients: return err('duplicate-id',400)
 patients[b['patientId']]=b; return ok(patients[b['patientId']],201)
@app.route('/drugs',methods=['GET','POST'])
def drugs_ep():
 if request.method=='GET': return ok(list(drugs.values()))
 b=request.get_json(force=True,silent=True) or {}; m=req(b,['ndc','name']);
 if m: return err(m,400)
 if b['ndc'] in drugs: return err('duplicate-ndc',400)
 drugs[b['ndc']]=b; inventory.setdefault(b['ndc'],0); return ok(drugs[b['ndc']],201)
@app.route('/prescriptions',methods=['POST'])
def rx():
 b=request.get_json(force=True,silent=True) or {}; m=req(b,['rxId','patientId','drugNdc','quantity','refills','prescriberDEA']);
 if m: return err(m,400)
 if b['patientId'] not in patients: return err('invalid-patient',400)
 if b['drugNdc'] not in drugs: return err('invalid-drug',400)
 if drugs[b['drugNdc']].get('schedule')=='II' and int(b.get('refills',0))>0: return err('no-refills-for-schedule-II',400)
 if b['rxId'] in prescriptions: return err('duplicate-id',400)
 prescriptions[b['rxId']]=b; return ok(prescriptions[b['rxId']],201)
@app.route('/orders',methods=['GET','POST'])
def orders_ep():
 if request.method=='GET': return ok(list(orders.values()))
 b=request.get_json(force=True,silent=True) or {}; m=req(b,['orderId','rxId','status']);
 if m: return err(m,400)
 if b['rxId'] not in prescriptions: return err('invalid-rx',400)
 ndc=prescriptions[b['rxId']]['drugNdc']
 if inventory.get(ndc,0)<=0: return err('out-of-stock',400)
 inventory[ndc]-=1
 if b['orderId'] in orders: return err('duplicate-id',400)
 orders[b['orderId']]=b; return ok(orders[b['orderId']],201)
@app.route('/inventory/<ndc>',methods=['GET'])
def stock(ndc): return ok({'ndc':ndc,'stock':inventory.get(ndc,0)})
if __name__=='__main__': seed(); app.run(host='0.0.0.0',port=5014)
