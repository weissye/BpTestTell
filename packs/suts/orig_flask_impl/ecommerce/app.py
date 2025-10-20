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
products={}; carts={}; orders={}; inventory={}
def seed():
 products.clear(); carts.clear(); orders.clear(); inventory.clear(); inventory['SKU-001']={'sku':'SKU-001','warehouseId':'W-1','stock':25}; products['SKU-001']={'sku':'SKU-001','name':'Demo Widget','price':9.99,'currency':'USD','stock':25}
@app.route('/reset',methods=['POST'])
def reset(): seed(); return ok({'status':'reset'})
@app.route('/products',methods=['GET','POST'])
def products_ep():
  if request.method=='GET': return ok(list(products.values()))
  b=request.get_json(force=True,silent=True) or {}
  m=req(b,['sku','name','price','currency','stock']);
  if m: return err(m,400)
  if b['sku'] in products: return err('duplicate-sku',400)
  products[b['sku']]=b; inventory[b['sku']]={'sku':b['sku'],'warehouseId':'W-1','stock':int(b['stock'])}; return ok(products[b['sku']],201)
@app.route('/products/<sku>',methods=['GET','PATCH'])
def product_item(sku):
  p=products.get(sku)
  if not p: return err('not-found',404)
  if request.method=='GET': return ok(p)
  b=request.get_json(force=True,silent=True) or {}
  for k in ['name','price','currency','stock']:
    if k in b: p[k]=b[k]
  if 'stock' in b: inventory[sku]['stock']=int(b['stock'])
  return ok(p)
@app.route('/carts',methods=['POST'])
def cart():
  b=request.get_json(force=True,silent=True) or {}; m=req(b,['cartId','status']);
  if m: return err(m,400)
  if b['cartId'] in carts: return err('duplicate-id',400)
  carts[b['cartId']]={'cartId':b['cartId'],'status':b['status'],'items':[]}; return ok(carts[b['cartId']],201)
@app.route('/carts/<cid>',methods=['GET'])
def cart_get(cid):
  c=carts.get(cid); return ok(c) if c else err('not-found',404)
@app.route('/carts/<cid>/items',methods=['POST'])
def add_item(cid):
  c=carts.get(cid); 
  if not c: return err('not-found',404)
  b=request.get_json(force=True,silent=True) or {}; m=req(b,['sku','qty','unitPrice']);
  if m: return err(m,400)
  if inventory.get(b['sku'],{}).get('stock',0)<=0: return err('out-of-stock',400)
  c['items'].append({'sku':b['sku'],'qty':int(b['qty']),'unitPrice':float(b['unitPrice'])}); return ok(c)
@app.route('/orders',methods=['GET','POST'])
def orders_ep():
  if request.method=='GET': return ok(list(orders.values()))
  b=request.get_json(force=True,silent=True) or {}; m=req(b,['orderId','cartId','customerId','total','status']);
  if m: return err(m,400)
  ct=carts.get(b['cartId']);
  if not ct: return err('invalid-cart',400)
  for it in ct.get('items',[]):
    inv=inventory.get(it['sku'],{}); 
    if inv.get('stock',0)<it['qty']: return err('insufficient-stock',400)
    inv['stock']-=it['qty']
  if b['orderId'] in orders: return err('duplicate-id',400)
  orders[b['orderId']]={**b,'createdAt':now()}; return ok(orders[b['orderId']],201)
@app.route('/orders/<oid>',methods=['GET','POST'])
def order_item(oid):
  o=orders.get(oid); 
  if not o: return err('not-found',404)
  if request.method=='GET': return ok(o)
  b=request.get_json(force=True,silent=True) or {}
  if not b.get('status'): return err('missing-status',400)
  o['status']=b['status']; o['updatedAt']=now(); return ok(o)
@app.route('/orders/<oid>/pay',methods=['POST'])
def pay(oid):
  o=orders.get(oid); 
  if not o: return err('not-found',404)
  b=request.get_json(force=True,silent=True) or {}; m=req(b,['paymentId','amount','method']);
  if m: return err(m,400)
  if float(b['amount'])!=float(o['total']): return err('amount-mismatch',400)
  o['status']='paid'; o['updatedAt']=now(); return ok({'order':o,'payment':{**b,'orderId':oid,'status':'captured','createdAt':now()}})
@app.route('/inventory/<sku>',methods=['GET'])
def inv(sku):
  i=inventory.get(sku); return ok(i) if i else err('not-found',404)
if __name__=='__main__': seed(); app.run(host='0.0.0.0',port=5011)
