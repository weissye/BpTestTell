
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

apps={}; envs={}; configs={}; releases={}; policies={}

def seed():
    apps.clear(); envs.clear(); configs.clear(); releases.clear(); policies.clear()
    apps['A1']={'appId':'A1','name':'Checkout'}
    envs['prod']={'envId':'prod','name':'Production'}
    policies['P1']={'policyId':'P1','appId':'A1','requiresApproval':True}

def reset():
    seed(); return ok({'status':'reset'})

@app.route('/apps',methods=['POST','GET'])
def apps_ep():
    if request.method=='GET': return ok(list(apps.values()))
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['appId','name'])
    if m: return err(m,400)
    if b['appId'] in apps: return err('duplicate-id',409)
    apps[b['appId']]=b
    return ok(apps[b['appId']],201)

@app.route('/envs',methods=['POST','GET'])
def envs_ep():
    if request.method=='GET': return ok(list(envs.values()))
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['envId','name'])
    if m: return err(m,400)
    if b['envId'] in envs: return err('duplicate-id',409)
    envs[b['envId']]=b
    return ok(envs[b['envId']],201)

@app.route('/configs',methods=['POST','GET'])
def configs_ep():
    if request.method=='GET': return ok(list(configs.values()))
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['key','value','appId','envId'])
    if m: return err(m,400)
    if b['appId'] not in apps or b['envId'] not in envs: return err('invalid-app-or-env',400)
    if b.get('isSecret'):
        import base64
        try: base64.b64decode(b['value'])
        except Exception: return err('secret-must-be-base64',400)
    k=f"{b['appId']}::{b['envId']}::{b['key']}"
    if k in configs: return err('duplicate-config',409)
    configs[k]=b
    return ok(configs[k],201)

@app.route('/releases',methods=['POST','GET'])
def releases_ep():
    if request.method=='GET': return ok(list(releases.values()))
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['releaseId','appId','envId','status'])
    if m: return err(m,400)
    if b['appId'] not in apps or b['envId'] not in envs: return err('invalid-app-or-env',400)
    if b['envId']=='prod':
        pol=next((p for p in policies.values() if p.get('appId')==b['appId']),None)
        if not (pol and pol.get('requiresApproval')): return err('approval-required',400)
        if not b.get('approvedBy'): return err('missing-approvedBy',400)
    if b['releaseId'] in releases: return err('duplicate-id',409)
    releases[b['releaseId']]={**b,'createdAt':now()}
    return ok(releases[b['releaseId']],201)

@app.route('/policies',methods=['POST','GET'])
def policies_ep():
    if request.method=='GET': return ok(list(policies.values()))
    b=request.get_json(force=True,silent=True) or {}
    m=req(b,['policyId','appId','requiresApproval'])
    if m: return err(m,400)
    if b['appId'] not in apps: return err('invalid-app',400)
    if b['policyId'] in policies: return err('duplicate-id',409)
    policies[b['policyId']]=b
    return ok(policies[b['policyId']],201)

if __name__=='__main__':
    seed(); app.run(host='0.0.0.0',port=5013, debug=False)


@app.route('/apps/<appId>', methods=['DELETE'])
def delete_app(appId):
    deleted = apps.pop(str(appId), None) is not None
    return ok({"deleted": deleted, "appId": str(appId)}, 200)

@app.route('/envs/<envId>', methods=['DELETE'])
def delete_env(envId):
    deleted = envs.pop(str(envId), None) is not None
    return ok({"deleted": deleted, "envId": str(envId)}, 200)

@app.route('/configs/<appId>/<envId>/<key>', methods=['DELETE'])
def delete_config(appId, envId, key):
    k = f"{appId}::{envId}::{key}"
    deleted = configs.pop(k, None) is not None
    return ok({"deleted": deleted, "key": key, "appId": appId, "envId": envId}, 200)

@app.route('/releases/<releaseId>', methods=['DELETE'])
def delete_release(releaseId):
    deleted = releases.pop(str(releaseId), None) is not None
    return ok({"deleted": deleted, "releaseId": str(releaseId)}, 200)

@app.route('/policies/<policyId>', methods=['DELETE'])
def delete_policy(policyId):
    deleted = policies.pop(str(policyId), None) is not None
    return ok({"deleted": deleted, "policyId": str(policyId)}, 200)
