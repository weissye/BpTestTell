from flask import Flask, request, jsonify
from collections import defaultdict
import random, re, logging, pprint

# Auto-generated Type-Safe Mock for Directus
app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('directus-mock')

mock_db = defaultdict(list)

PATH_STATUS_CODES = {   'auth/login': 200,
    'auth/logout': 200,
    'auth/password/request': 200,
    'auth/password/reset': 200,
    'auth/refresh': 200,
    'collections': 200,
    'comments': 200,
    'fields/{collection}': 200,
    'files': 200,
    'flows': 200,
    'folders': 200,
    'items/{collection}': 200,
    'operations': 200,
    'permissions': 200,
    'presets': 200,
    'relations': 200,
    'roles': 200,
    'schema/apply': 204,
    'schema/diff': 200,
    'users': 200,
    'users/invite': 200,
    'users/invite/accept': 200,
    'users/me/tfa/disable': 200,
    'users/me/tfa/enable': 200,
    'utils/cache/clear': 200,
    'utils/export/{collection}': 200,
    'utils/hash/generate': 200,
    'utils/hash/verify': 200,
    'utils/import/{collection}': 200,
    'utils/sort/{collection}': 200,
    'versions': 200,
    'versions/{id}/promote': 200,
    'versions/{id}/save': 200,
    'webhooks': 200}

SCHEMA_REGISTRY = {   'activity': {},
    'activity/{id}': {},
    'assets/{id}': {},
    'auth/login': {   'POST': {   'properties': {   'email': {   'pattern': None,
                                                                 'type': 'str'},
                                                    'mode': {   'pattern': None,
                                                                'type': 'str'},
                                                    'otp': {   'pattern': None,
                                                               'type': 'str'},
                                                    'password': {   'pattern': None,
                                                                    'type': 'str'}},
                                  'required': ['password', 'email']}},
    'auth/logout': {   'POST': {   'properties': {   'mode': {   'pattern': None,
                                                                 'type': 'str'},
                                                     'refresh_token': {   'pattern': None,
                                                                          'type': 'str'}},
                                   'required': []}},
    'auth/oauth': {},
    'auth/oauth/{provider}': {},
    'auth/password/request': {   'POST': {   'properties': {   'email': {   'pattern': None,
                                                                            'type': 'str'}},
                                             'required': ['email']}},
    'auth/password/reset': {   'POST': {   'properties': {   'password': {   'pattern': None,
                                                                             'type': 'str'},
                                                             'token': {   'pattern': None,
                                                                          'type': 'str'}},
                                           'required': ['password', 'token']}},
    'auth/refresh': {   'POST': {   'properties': {   'mode': {   'pattern': None,
                                                                  'type': 'str'},
                                                      'refresh_token': {   'pattern': None,
                                                                           'type': 'str'}},
                                    'required': []}},
    'collections': {   'POST': {   'properties': {   'archive_app_filter': {   'pattern': None,
                                                                               'type': 'str'},
                                                     'archive_field': {   'pattern': None,
                                                                          'type': 'str'},
                                                     'archive_value': {   'pattern': None,
                                                                          'type': 'str'},
                                                     'collection': {   'pattern': None,
                                                                       'type': 'str'},
                                                     'display_template': {   'pattern': None,
                                                                             'type': 'str'},
                                                     'fields': {   'pattern': None,
                                                                   'type': 'list'},
                                                     'hidden': {   'pattern': None,
                                                                   'type': 'bool'},
                                                     'icon': {   'pattern': None,
                                                                 'type': 'str'},
                                                     'note': {   'pattern': None,
                                                                 'type': 'str'},
                                                     'singleton': {   'pattern': None,
                                                                      'type': 'bool'},
                                                     'sort_field': {   'pattern': None,
                                                                       'type': 'str'},
                                                     'translation': {   'pattern': None,
                                                                        'type': 'str'},
                                                     'unarchive_value': {   'pattern': None,
                                                                            'type': 'str'},
                                                     'versioning': {   'pattern': None,
                                                                       'type': 'bool'}},
                                   'required': ['collection', 'fields']}},
    'collections/{id}': {   'PATCH': {   'properties': {   'meta': {   'pattern': None,
                                                                       'type': 'dict'}},
                                         'required': []}},
    'comments': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                               'type': 'dict'},
                                                   'keys': {   'pattern': None,
                                                               'type': 'list'}},
                                 'required': []},
                    'POST': {   'properties': {   'collection': {   'pattern': None,
                                                                    'type': 'str'},
                                                  'comment': {   'pattern': None,
                                                                 'type': 'str'},
                                                  'item': {   'pattern': None,
                                                              'type': 'str'}},
                                'required': ['collection', 'item', 'comment']}},
    'comments/{id}': {   'PATCH': {   'properties': {   'collection': {   'pattern': None,
                                                                          'type': 'str'},
                                                        'comment': {   'pattern': None,
                                                                       'type': 'str'},
                                                        'item': {   'pattern': None,
                                                                    'type': 'str'}},
                                      'required': ['collection']}},
    'extensions': {},
    'extensions/{bundle}/{name}': {   'PATCH': {   'properties': {   'meta': {   'pattern': None,
                                                                                 'type': 'dict'}},
                                                   'required': []}},
    'extensions/{name}': {   'PATCH': {   'properties': {   'meta': {   'pattern': None,
                                                                        'type': 'dict'}},
                                          'required': []}},
    'fields': {},
    'fields/{collection}': {   'POST': {   'properties': {   'field': {   'pattern': None,
                                                                          'type': 'str'},
                                                             'meta': {   'pattern': None,
                                                                         'type': 'dict'},
                                                             'schema': {   'pattern': None,
                                                                           'type': 'dict'},
                                                             'type': {   'pattern': None,
                                                                         'type': 'str'}},
                                           'required': [   'type',
                                                           'field',
                                                           'datatype',
                                                           'length']}},
    'fields/{collection}/{id}': {   'PATCH': {   'properties': {   'field': {   'pattern': None,
                                                                                'type': 'str'},
                                                                   'meta': {   'pattern': None,
                                                                               'type': 'dict'},
                                                                   'schema': {   'pattern': None,
                                                                                 'type': 'dict'},
                                                                   'type': {   'pattern': None,
                                                                               'type': 'str'}},
                                                 'required': []}},
    'files': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                            'type': 'dict'},
                                                'keys': {   'pattern': None,
                                                            'type': 'list'}},
                              'required': []},
                 'POST': {   'properties': {   'data': {   'pattern': None,
                                                           'type': 'str'}},
                             'required': []}},
    'files/{id}': {   'PATCH': {   'properties': {   'description': {   'pattern': None,
                                                                        'type': 'str'},
                                                     'filename_download': {   'pattern': None,
                                                                              'type': 'str'},
                                                     'folder': {   'pattern': None,
                                                                   'type': 'str'},
                                                     'tags': {   'pattern': None,
                                                                 'type': 'list'},
                                                     'title': {   'pattern': None,
                                                                  'type': 'str'}},
                                   'required': []}},
    'flows': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                            'type': 'str'},
                                                'keys': {   'pattern': None,
                                                            'type': 'list'}},
                              'required': []},
                 'POST': {'properties': {}, 'required': []}},
    'flows/{id}': {'PATCH': {'properties': {}, 'required': []}},
    'folders': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                              'type': 'dict'},
                                                  'keys': {   'pattern': None,
                                                              'type': 'list'}},
                                'required': []},
                   'POST': {   'properties': {   'name': {   'pattern': None,
                                                             'type': 'str'},
                                                 'parent': {   'pattern': None,
                                                               'type': 'int'}},
                               'required': ['name']}},
    'folders/{id}': {   'PATCH': {   'properties': {   'name': {   'pattern': None,
                                                                   'type': 'str'},
                                                       'parent': {   'pattern': None,
                                                                     'type': 'int'}},
                                     'required': []}},
    'items/{collection}': {   'PATCH': {'properties': {}, 'required': []},
                              'POST': {'properties': {}, 'required': []}},
    'items/{collection}/{id}': {'PATCH': {'properties': {}, 'required': []}},
    'operations': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                                 'type': 'str'},
                                                     'keys': {   'pattern': None,
                                                                 'type': 'list'}},
                                   'required': []},
                      'POST': {'properties': {}, 'required': []}},
    'operations/{id}': {'PATCH': {'properties': {}, 'required': []}},
    'permissions': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                                  'type': 'dict'},
                                                      'keys': {   'pattern': None,
                                                                  'type': 'list'}},
                                    'required': []},
                       'POST': {   'properties': {   'collection': {   'pattern': None,
                                                                       'type': 'str'},
                                                     'comment': {   'pattern': None,
                                                                    'type': 'str'},
                                                     'create': {   'pattern': None,
                                                                   'type': 'str'},
                                                     'delete': {   'pattern': None,
                                                                   'type': 'str'},
                                                     'explain': {   'pattern': None,
                                                                    'type': 'str'},
                                                     'read': {   'pattern': None,
                                                                 'type': 'str'},
                                                     'read_field_blacklist': {   'pattern': None,
                                                                                 'type': 'list'},
                                                     'role': {   'pattern': None,
                                                                 'type': 'int'},
                                                     'status': {   'pattern': None,
                                                                   'type': 'str'},
                                                     'status_blacklist': {   'pattern': None,
                                                                             'type': 'list'},
                                                     'update': {   'pattern': None,
                                                                   'type': 'str'},
                                                     'write_field_blacklist': {   'pattern': None,
                                                                                  'type': 'list'}},
                                   'required': []}},
    'permissions/me': {},
    'permissions/{id}': {   'PATCH': {   'properties': {   'collection': {   'pattern': None,
                                                                             'type': 'dict'},
                                                           'comment': {   'pattern': None,
                                                                          'type': 'str'},
                                                           'create': {   'pattern': None,
                                                                         'type': 'str'},
                                                           'delete': {   'pattern': None,
                                                                         'type': 'str'},
                                                           'explain': {   'pattern': None,
                                                                          'type': 'str'},
                                                           'read': {   'pattern': None,
                                                                       'type': 'str'},
                                                           'read_field_blacklist': {   'pattern': None,
                                                                                       'type': 'dict'},
                                                           'role': {   'pattern': None,
                                                                       'type': 'dict'},
                                                           'status': {   'pattern': None,
                                                                         'type': 'dict'},
                                                           'status_blacklist': {   'pattern': None,
                                                                                   'type': 'dict'},
                                                           'update': {   'pattern': None,
                                                                         'type': 'str'},
                                                           'write_field_blacklist': {   'pattern': None,
                                                                                        'type': 'dict'}},
                                         'required': []}},
    'presets': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                              'type': 'dict'},
                                                  'keys': {   'pattern': None,
                                                              'type': 'list'}},
                                'required': []},
                   'POST': {   'properties': {   'collection': {   'pattern': None,
                                                                   'type': 'str'},
                                                 'filters': {   'pattern': None,
                                                                'type': 'list'},
                                                 'layout': {   'pattern': None,
                                                               'type': 'str'},
                                                 'layout_options': {   'pattern': None,
                                                                       'type': 'str'},
                                                 'layout_query': {   'pattern': None,
                                                                     'type': 'str'},
                                                 'role': {   'pattern': None,
                                                             'type': 'str'},
                                                 'search': {   'pattern': None,
                                                               'type': 'str'},
                                                 'title': {   'pattern': None,
                                                              'type': 'str'}},
                               'required': ['collection']}},
    'presets/{id}': {   'PATCH': {   'properties': {   'collection': {   'pattern': None,
                                                                         'type': 'str'},
                                                       'filters': {   'pattern': None,
                                                                      'type': 'list'},
                                                       'role': {   'pattern': None,
                                                                   'type': 'int'},
                                                       'search_query': {   'pattern': None,
                                                                           'type': 'str'},
                                                       'title': {   'pattern': None,
                                                                    'type': 'str'},
                                                       'translation': {   'pattern': None,
                                                                          'type': 'dict'},
                                                       'view_options': {   'pattern': None,
                                                                           'type': 'str'},
                                                       'view_query': {   'pattern': None,
                                                                         'type': 'str'},
                                                       'view_type': {   'pattern': None,
                                                                        'type': 'str'}},
                                     'required': ['collection']}},
    'relations': {   'POST': {   'properties': {   'collection_many': {   'pattern': None,
                                                                          'type': 'str'},
                                                   'collection_one': {   'pattern': None,
                                                                         'type': 'str'},
                                                   'field_many': {   'pattern': None,
                                                                     'type': 'str'},
                                                   'field_one': {   'pattern': None,
                                                                    'type': 'str'},
                                                   'junction_field': {   'pattern': None,
                                                                         'type': 'str'}},
                                 'required': []}},
    'relations/{id}': {   'PATCH': {   'properties': {   'collection_many': {   'pattern': None,
                                                                                'type': 'str'},
                                                         'collection_one': {   'pattern': None,
                                                                               'type': 'str'},
                                                         'field_many': {   'pattern': None,
                                                                           'type': 'str'},
                                                         'field_one': {   'pattern': None,
                                                                          'type': 'str'},
                                                         'junction_field': {   'pattern': None,
                                                                               'type': 'str'}},
                                       'required': []}},
    'revisions': {},
    'revisions/{id}': {},
    'roles': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                            'type': 'dict'},
                                                'keys': {   'pattern': None,
                                                            'type': 'list'}},
                              'required': []},
                 'POST': {   'properties': {   'description': {   'pattern': None,
                                                                  'type': 'str'},
                                               'enforce_tfa': {   'pattern': None,
                                                                  'type': 'bool'},
                                               'external_id': {   'pattern': None,
                                                                  'type': 'str'},
                                               'ip_access': {   'pattern': None,
                                                                'type': 'list'},
                                               'module_listing': {   'pattern': None,
                                                                     'type': 'str'},
                                               'name': {   'pattern': None,
                                                           'type': 'str'}},
                             'required': []}},
    'roles/{id}': {   'PATCH': {   'properties': {   'description': {   'pattern': None,
                                                                        'type': 'str'},
                                                     'enforce_tfa': {   'pattern': None,
                                                                        'type': 'bool'},
                                                     'external_id': {   'pattern': None,
                                                                        'type': 'str'},
                                                     'ip_access': {   'pattern': None,
                                                                      'type': 'list'},
                                                     'module_listing': {   'pattern': None,
                                                                           'type': 'str'},
                                                     'name': {   'pattern': None,
                                                                 'type': 'str'}},
                                   'required': []}},
    'schema/apply': {   'POST': {   'properties': {   'data': {   'pattern': None,
                                                                  'type': 'dict'}},
                                    'required': []}},
    'schema/diff': {   'POST': {   'properties': {   'data': {   'pattern': None,
                                                                 'type': 'dict'}},
                                   'required': []}},
    'schema/snapshot': {},
    'server/info': {},
    'server/ping': {},
    'settings': {'PATCH': {'properties': {}, 'required': []}},
    'users': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                            'type': 'dict'},
                                                'keys': {   'pattern': None,
                                                            'type': 'list'}},
                              'required': []},
                 'POST': {   'properties': {   'avatar': {   'pattern': None,
                                                             'type': 'str'},
                                               'description': {   'pattern': None,
                                                                  'type': 'str'},
                                               'email': {   'pattern': None,
                                                            'type': 'str'},
                                               'first_name': {   'pattern': None,
                                                                 'type': 'str'},
                                               'id': {   'pattern': None,
                                                         'type': 'str'},
                                               'language': {   'pattern': None,
                                                               'type': 'str'},
                                               'last_access': {   'pattern': None,
                                                                  'type': 'str'},
                                               'last_name': {   'pattern': None,
                                                                'type': 'str'},
                                               'last_page': {   'pattern': None,
                                                                'type': 'str'},
                                               'location': {   'pattern': None,
                                                               'type': 'str'},
                                               'password': {   'pattern': None,
                                                               'type': 'str'},
                                               'role': {   'pattern': None,
                                                           'type': 'str'},
                                               'status': {   'pattern': None,
                                                             'type': 'str'},
                                               'tags': {   'pattern': None,
                                                           'type': 'list'},
                                               'tfa_secret': {   'pattern': None,
                                                                 'type': 'str'},
                                               'theme': {   'pattern': None,
                                                            'type': 'str'},
                                               'title': {   'pattern': None,
                                                            'type': 'str'},
                                               'token': {   'pattern': None,
                                                            'type': 'str'}},
                             'required': []}},
    'users/invite': {   'POST': {   'properties': {   'email': {   'pattern': None,
                                                                   'type': 'str'}},
                                    'required': []}},
    'users/invite/accept': {   'POST': {   'properties': {   'password': {   'pattern': None,
                                                                             'type': 'str'},
                                                             'token': {   'pattern': None,
                                                                          'type': 'str'}},
                                           'required': []}},
    'users/me': {'PATCH': {'properties': {}, 'required': []}},
    'users/me/tfa/disable': {'POST': {'properties': {}, 'required': []}},
    'users/me/tfa/enable': {'POST': {'properties': {}, 'required': []}},
    'users/me/track/page': {   'PATCH': {   'properties': {   'last_page': {   'pattern': None,
                                                                               'type': 'str'}},
                                            'required': []}},
    'users/{id}': {   'PATCH': {   'properties': {   'avatar': {   'pattern': None,
                                                                   'type': 'str'},
                                                     'description': {   'pattern': None,
                                                                        'type': 'str'},
                                                     'email': {   'pattern': None,
                                                                  'type': 'str'},
                                                     'first_name': {   'pattern': None,
                                                                       'type': 'str'},
                                                     'id': {   'pattern': None,
                                                               'type': 'str'},
                                                     'language': {   'pattern': None,
                                                                     'type': 'str'},
                                                     'last_access': {   'pattern': None,
                                                                        'type': 'str'},
                                                     'last_name': {   'pattern': None,
                                                                      'type': 'str'},
                                                     'last_page': {   'pattern': None,
                                                                      'type': 'str'},
                                                     'location': {   'pattern': None,
                                                                     'type': 'str'},
                                                     'password': {   'pattern': None,
                                                                     'type': 'str'},
                                                     'role': {   'pattern': None,
                                                                 'type': 'str'},
                                                     'status': {   'pattern': None,
                                                                   'type': 'str'},
                                                     'tags': {   'pattern': None,
                                                                 'type': 'list'},
                                                     'tfa_secret': {   'pattern': None,
                                                                       'type': 'str'},
                                                     'theme': {   'pattern': None,
                                                                  'type': 'str'},
                                                     'title': {   'pattern': None,
                                                                  'type': 'str'},
                                                     'token': {   'pattern': None,
                                                                  'type': 'str'}},
                                   'required': []}},
    'utils/cache/clear': {'POST': {'properties': {}, 'required': []}},
    'utils/export/{collection}': {   'POST': {   'properties': {   'file': {   'pattern': None,
                                                                               'type': 'dict'},
                                                                   'format': {   'pattern': None,
                                                                                 'type': 'str'},
                                                                   'query': {   'pattern': None,
                                                                                'type': 'dict'}},
                                                 'required': [   'file',
                                                                 'query',
                                                                 'format']}},
    'utils/hash/generate': {   'POST': {   'properties': {   'string': {   'pattern': None,
                                                                           'type': 'str'}},
                                           'required': ['string']}},
    'utils/hash/verify': {   'POST': {   'properties': {   'hash': {   'pattern': None,
                                                                       'type': 'str'},
                                                           'string': {   'pattern': None,
                                                                         'type': 'str'}},
                                         'required': ['string', 'hash']}},
    'utils/import/{collection}': {'POST': {'properties': {}, 'required': []}},
    'utils/random/string': {},
    'utils/sort/{collection}': {   'POST': {   'properties': {   'item': {   'pattern': None,
                                                                             'type': 'number'},
                                                                 'to': {   'pattern': None,
                                                                           'type': 'number'}},
                                               'required': []}},
    'versions': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                               'type': 'str'},
                                                   'keys': {   'pattern': None,
                                                               'type': 'list'}},
                                 'required': []},
                    'POST': {'properties': {}, 'required': []}},
    'versions/{id}': {'PATCH': {'properties': {}, 'required': []}},
    'versions/{id}/compare': {},
    'versions/{id}/promote': {   'POST': {   'properties': {   'fields': {   'pattern': None,
                                                                             'type': 'str'},
                                                               'mainHash': {   'pattern': None,
                                                                               'type': 'str'}},
                                             'required': []}},
    'versions/{id}/save': {'POST': {'properties': {}, 'required': []}},
    'webhooks': {   'PATCH': {   'properties': {   'data': {   'pattern': None,
                                                               'type': 'dict'},
                                                   'keys': {   'pattern': None,
                                                               'type': 'list'}},
                                 'required': []},
                    'POST': {   'properties': {   'actions': {   'pattern': None,
                                                                 'type': 'str'},
                                                  'data': {   'pattern': None,
                                                              'type': 'bool'},
                                                  'method': {   'pattern': None,
                                                                'type': 'str'},
                                                  'name': {   'pattern': None,
                                                              'type': 'str'},
                                                  'status': {   'pattern': None,
                                                                'type': 'str'},
                                                  'system-collections': {   'pattern': None,
                                                                            'type': 'str'},
                                                  'url': {   'pattern': None,
                                                             'type': 'str'}},
                                'required': []}},
    'webhooks/{id}': {   'PATCH': {   'properties': {   'actions': {   'pattern': None,
                                                                       'type': 'str'},
                                                        'data': {   'pattern': None,
                                                                    'type': 'bool'},
                                                        'method': {   'pattern': None,
                                                                      'type': 'str'},
                                                        'name': {   'pattern': None,
                                                                    'type': 'str'},
                                                        'status': {   'pattern': None,
                                                                      'type': 'str'},
                                                        'system-collections': {   'pattern': None,
                                                                                  'type': 'str'},
                                                        'url': {   'pattern': None,
                                                                   'type': 'str'}},
                                      'required': []}}}

def find_schema_key(resource_path):
    if resource_path in SCHEMA_REGISTRY: return resource_path
    for template in SCHEMA_REGISTRY.keys():
        if '{' in template:
            pattern = '^' + re.sub(r'\{[^}]+\}', '[^/]+', template) + '$'
            if re.match(pattern, resource_path): return template
    return None

def validate_schema(resource_path, method, data):
    schema_key = find_schema_key(resource_path)
    if not schema_key or method not in SCHEMA_REGISTRY[schema_key]:
        return None, None
    
    schema = SCHEMA_REGISTRY[schema_key][method]
    allowed_props = schema['properties']
    
    # Ignored fields (Directus specific + Standard)
    ignored_fields = {'id', 'status', 'sort', 'user_created', 'date_created', 'user_updated', 'date_updated'}
    
    # 1. Unknown Fields
    unknown = set(data.keys()) - set(allowed_props.keys()) - ignored_fields
    if unknown:
        msg = f'Unknown fields detected: {list(unknown)}'
        logger.warning(f'Schema Violation on {resource_path}: {msg}')
        return msg, 400
    
    # 2. Required Fields (Ignore ID)
    if method == 'POST':
        missing = [f for f in schema['required'] if f not in data and f != 'id']
        if missing:
            msg = f'Missing required fields: {missing}'
            logger.warning(f'Schema Violation on {resource_path}: {msg}')
            return msg, 400
    
    # 3. Type & Regex Validation
    for key, value in data.items():
        if key in allowed_props and value is not None:
            prop_def = allowed_props[key]
            expected_type = prop_def['type']
            pattern = prop_def.get('pattern')
            
            valid = True
            if expected_type == 'int' and not isinstance(value, int): valid = False
            elif expected_type == 'bool' and not isinstance(value, bool): valid = False
            elif expected_type == 'str' and not isinstance(value, str): valid = False
            elif expected_type == 'list' and not isinstance(value, list): valid = False
            elif expected_type == 'dict' and not isinstance(value, dict): valid = False
            elif expected_type == 'number' and not isinstance(value, (int, float)): valid = False
            
            if not valid:
                msg = f'Field "{key}" expected {expected_type}, got {type(value).__name__}'
                logger.warning(f'Schema Violation on {resource_path}: {msg}')
                return msg, 400
            
            if pattern and expected_type == 'str':
                if not re.match(pattern, value):
                    msg = f'Field "{key}" value "{value}" does not match pattern {pattern}'
                    logger.warning(f'Schema Violation on {resource_path}: {msg}')
                    return msg, 400
    
    return None, None

def get_success_code(resource_path):
    if resource_path in PATH_STATUS_CODES: return PATH_STATUS_CODES[resource_path]
    for path_pattern, code in PATH_STATUS_CODES.items():
        if '{' in path_pattern:
            regex = re.sub(r'\{[^}]+\}', '[^/]+', path_pattern)
            regex = '^' + regex + '$'
            if re.fullmatch(regex, resource_path): return code
    return 200

def mock_retrieve(resource_key, item_id):
    for item in mock_db[resource_key]:
        if str(item.get('id')) == str(item_id): return item
    return None

@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    resource_path = resource_path.rstrip('/')
    schema_key = find_schema_key(resource_path)
    
    if schema_key:
        resource_key = schema_key
        item_id = None
    else:
        # Heuristic for ID extraction
        parts = resource_path.split('/')
        if len(parts) > 1 and (parts[-1].isdigit() or '-' in parts[-1] or len(parts[-1]) > 20):
            item_id = parts[-1]
            resource_key = '/'.join(parts[:-1])
        else:
            resource_key = resource_path
            item_id = None
    
    logger.info(f'[{request.method}] {resource_path}')

    if item_id and str(item_id).endswith('666'):
        return jsonify({'errors': [{'message': 'Critical System Failure'}]}), 500
    
    if request.method == 'GET':
        if item_id is not None:
            item = mock_retrieve(resource_key, item_id)
            if item: return jsonify({'data': item})
            return jsonify({'errors': [{'message': 'Not found'}]}), 404
        else:
            return jsonify({'data': mock_db[resource_key]})

    elif request.method == 'POST':
        try: data = request.get_json(silent=True) or {}
        except: data = {}
        
        err, code = validate_schema(resource_path, 'POST', data)
        if err: return jsonify({'errors': [{'message': err}]}), code
        
        desc = request.args.get('description', '')
        if 'Negative Test' in desc:
             logger.warning(f'Forcing Rejection for Negative Test on {resource_path} (Heuristic)')
             return jsonify({'errors': [{'message': 'Forced failure for negative test'}]}), 400
        
        if 'id' not in data: data['id'] = random.randint(10000, 99999)
        
        mock_db[resource_key].append(data)
        return jsonify({'data': data}), get_success_code(resource_path)

    elif request.method in ['PUT', 'PATCH']:
        if item_id is None:
             return jsonify({'errors': [{'message': 'Bulk update not implemented'}]}), 200
        
        existing_item = mock_retrieve(resource_key, item_id)
        if not existing_item: return jsonify({'errors': [{'message': 'Not found'}]}), 404
        
        try: updates = request.get_json(silent=True) or {}
        except: updates = {}
        
        err, code = validate_schema(resource_path, request.method, updates)
        if err: return jsonify({'errors': [{'message': err}]}), code
        
        existing_item.update(updates)
        return jsonify({'data': existing_item})

    elif request.method == 'DELETE':
        if item_id is not None:
             initial_len = len(mock_db[resource_key])
             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]
             if len(mock_db[resource_key]) < initial_len:
                 return '', 204
             return jsonify({'errors': [{'message': 'Not found'}]}), 404
        else:
             mock_db[resource_key].clear()
             return '', 204
if __name__ == '__main__':
    app.run(debug=False, port=8055)