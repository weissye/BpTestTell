
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

customers={}; accounts={}; transactions=[]; cards={}; loans={}

def seed():
    customers.clear(); accounts.clear(); transactions.clear(); cards.clear(); loans.clear()
    customers['C-1']={'customerId':'C-1','fullName':'Dana','kycStatus':'verified'}
    accounts['A-1']={'accountId':'A-1','customerId':'C-1','currency':'USD','balance':1000.0,'overdraftLimit':100.0}

@app.route('/reset',methods=['POST'])
def reset():
    seed(); return ok({'status':'reset'})

@app.route('/customers',methods=['POST'])
def create_customer():
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['customerId','fullName','kycStatus'])
    if m: return err(m,400)
    if b['customerId'] in customers: return err('duplicate-id',409)
    customers[b['customerId']]=b
    return ok(customers[b['customerId']],201)

@app.route('/accounts',methods=['POST','GET'])
def accounts_ep():
    if request.method=='GET': return ok(list(accounts.values()))
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['accountId','customerId','currency','balance'])
    if m: return err(m,400)
    if b['customerId'] not in customers: return err('invalid-customer',400)
    if customers[b['customerId']]['kycStatus']!='verified': return err('kyc-required',400)
    if b['accountId'] in accounts: return err('duplicate-id',409)
    accounts[b['accountId']]=b
    return ok(accounts[b['accountId']],201)

@app.route('/accounts/<aid>/transactions',methods=['GET'])
def tx_list(aid):
    if aid not in accounts: return err('invalid-account',400)
    return ok([t for t in transactions if t.get('accountId')==aid])

@app.route('/transfers',methods=['POST'])
def transfer():
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['fromAccountId','toAccountId','amount'])
    if m: return err(m,400)
    a=accounts.get(b['fromAccountId']); c=accounts.get(b['toAccountId'])
    if not a or not c: return err('invalid-account',400)
    amt=float(b['amount']); od=float(a.get('overdraftLimit',0))
    if a['balance']-amt<-od: return err('insufficient-funds',400)
    a['balance']-=amt; c['balance']+=amt
    transactions.append({'txId':f'TX-{len(transactions)+1}','accountId':a['accountId'],'type':'debit','amount':amt,'timestamp':now()})
    transactions.append({'txId':f'TX-{len(transactions)+1}','accountId':c['accountId'],'type':'credit','amount':amt,'timestamp':now()})
    return ok({'status':'ok'})

@app.route('/cards',methods=['POST'])
def card():
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['cardId','accountId','status'])
    if m: return err(m,400)
    if b['accountId'] not in accounts: return err('invalid-account',400)
    if b['cardId'] in cards: return err('duplicate-id',409)
    cards[b['cardId']]=b
    return ok(cards[b['cardId']],201)

@app.route('/loans',methods=['POST','GET'])
def loans_ep():
    if request.method=='GET': return ok(list(loans.values()))
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['loanId','customerId','principal','rateAPR','termMonths'])
    if m: return err(m,400)
    if b['customerId'] not in customers: return err('invalid-customer',400)
    if b['loanId'] in loans: return err('duplicate-id',409)
    loans[b['loanId']]=b
    return ok(loans[b['loanId']],201)

if __name__=='__main__':
    seed(); app.run(host='0.0.0.0',port=5012, debug=False)


@app.route('/customers/<cid>', methods=['DELETE'])
def delete_customer(cid):
    deleted = customers.pop(str(cid), None) is not None
    return ok({"deleted": deleted, "customerId": str(cid)}, 200)

@app.route('/accounts/<aid>', methods=['DELETE'])
def delete_account(aid):
    deleted = accounts.pop(str(aid), None) is not None
    return ok({"deleted": deleted, "accountId": str(aid)}, 200)

@app.route('/cards/<cardId>', methods=['DELETE'])
def delete_card(cardId):
    deleted = cards.pop(str(cardId), None) is not None
    return ok({"deleted": deleted, "cardId": str(cardId)}, 200)

@app.route('/loans/<loanId>', methods=['DELETE'])
def delete_loan(loanId):
    deleted = loans.pop(str(loanId), None) is not None
    return ok({"deleted": deleted, "loanId": str(loanId)}, 200)
