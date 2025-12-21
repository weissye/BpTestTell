""" THIS IS AN AUTOMATICALLY GENERATED FILE!"""
from __future__ import print_function
import json
from engine import primitives
from engine.core import requests
from engine.errors import ResponseParsingException
from engine import dependencies

_drugs_post_id = dependencies.DynamicVariable("_drugs_post_id")

_drugs_post_name = dependencies.DynamicVariable("_drugs_post_name")

_patients_post_id = dependencies.DynamicVariable("_patients_post_id")

_patients_post_name = dependencies.DynamicVariable("_patients_post_name")

_orders_post_id = dependencies.DynamicVariable("_orders_post_id")

_prescriptions_post_id = dependencies.DynamicVariable("_prescriptions_post_id")

_inventory_post_ndc = dependencies.DynamicVariable("_inventory_post_ndc")

def parse_drugspost(data, **kwargs):
    """ Automatically generated response parser """
    # Declare response variables
    temp_7262 = None
    temp_8173 = None

    if 'headers' in kwargs:
        headers = kwargs['headers']


    # Parse body if needed
    if data:

        try:
            data = json.loads(data)
        except Exception as error:
            raise ResponseParsingException("Exception parsing response, data was not valid json: {}".format(error))
        pass

    # Try to extract each dynamic object

        try:
            temp_7262 = str(data["id"])
            
        except Exception as error:
            # This is not an error, since some properties are not always returned
            pass


        try:
            temp_8173 = str(data["name"])
            
        except Exception as error:
            # This is not an error, since some properties are not always returned
            pass



    # If no dynamic objects were extracted, throw.
    if not (temp_7262 or temp_8173):
        raise ResponseParsingException("Error: all of the expected dynamic objects were not present in the response.")

    # Set dynamic variables
    if temp_7262:
        dependencies.set_variable("_drugs_post_id", temp_7262)
    if temp_8173:
        dependencies.set_variable("_drugs_post_name", temp_8173)


def parse_patientspost(data, **kwargs):
    """ Automatically generated response parser """
    # Declare response variables
    temp_7680 = None
    temp_5581 = None

    if 'headers' in kwargs:
        headers = kwargs['headers']


    # Parse body if needed
    if data:

        try:
            data = json.loads(data)
        except Exception as error:
            raise ResponseParsingException("Exception parsing response, data was not valid json: {}".format(error))
        pass

    # Try to extract each dynamic object

        try:
            temp_7680 = str(data["id"])
            
        except Exception as error:
            # This is not an error, since some properties are not always returned
            pass


        try:
            temp_5581 = str(data["name"])
            
        except Exception as error:
            # This is not an error, since some properties are not always returned
            pass



    # If no dynamic objects were extracted, throw.
    if not (temp_7680 or temp_5581):
        raise ResponseParsingException("Error: all of the expected dynamic objects were not present in the response.")

    # Set dynamic variables
    if temp_7680:
        dependencies.set_variable("_patients_post_id", temp_7680)
    if temp_5581:
        dependencies.set_variable("_patients_post_name", temp_5581)


def parse_orderspost(data, **kwargs):
    """ Automatically generated response parser """
    # Declare response variables
    temp_2060 = None

    if 'headers' in kwargs:
        headers = kwargs['headers']


    # Parse body if needed
    if data:

        try:
            data = json.loads(data)
        except Exception as error:
            raise ResponseParsingException("Exception parsing response, data was not valid json: {}".format(error))
        pass

    # Try to extract each dynamic object

        try:
            temp_2060 = str(data["id"])
            
        except Exception as error:
            # This is not an error, since some properties are not always returned
            pass



    # If no dynamic objects were extracted, throw.
    if not (temp_2060):
        raise ResponseParsingException("Error: all of the expected dynamic objects were not present in the response.")

    # Set dynamic variables
    if temp_2060:
        dependencies.set_variable("_orders_post_id", temp_2060)


def parse_prescriptionspost(data, **kwargs):
    """ Automatically generated response parser """
    # Declare response variables
    temp_5588 = None

    if 'headers' in kwargs:
        headers = kwargs['headers']


    # Parse body if needed
    if data:

        try:
            data = json.loads(data)
        except Exception as error:
            raise ResponseParsingException("Exception parsing response, data was not valid json: {}".format(error))
        pass

    # Try to extract each dynamic object

        try:
            temp_5588 = str(data["id"])
            
        except Exception as error:
            # This is not an error, since some properties are not always returned
            pass



    # If no dynamic objects were extracted, throw.
    if not (temp_5588):
        raise ResponseParsingException("Error: all of the expected dynamic objects were not present in the response.")

    # Set dynamic variables
    if temp_5588:
        dependencies.set_variable("_prescriptions_post_id", temp_5588)


def parse_inventorypost(data, **kwargs):
    """ Automatically generated response parser """
    # Declare response variables
    temp_9060 = None

    if 'headers' in kwargs:
        headers = kwargs['headers']


    # Parse body if needed
    if data:

        try:
            data = json.loads(data)
        except Exception as error:
            raise ResponseParsingException("Exception parsing response, data was not valid json: {}".format(error))
        pass

    # Try to extract each dynamic object

        try:
            temp_9060 = str(data["ndc"])
            
        except Exception as error:
            # This is not an error, since some properties are not always returned
            pass



    # If no dynamic objects were extracted, throw.
    if not (temp_9060):
        raise ResponseParsingException("Error: all of the expected dynamic objects were not present in the response.")

    # Set dynamic variables
    if temp_9060:
        dependencies.set_variable("_inventory_post_ndc", temp_9060)

req_collection = requests.RequestCollection([])
# Endpoint: /drugs, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("drugs"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/drugs"
)
req_collection.add_request(request)

# Endpoint: /drugs, method: Post
request = requests.Request([
    primitives.restler_static_string("POST "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("drugs"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "id":"""),
    primitives.restler_fuzzable_string("fuzzstring", quoted=True),
    primitives.restler_static_string(""",
    "name":"""),
    primitives.restler_fuzzable_string("fuzzstring", quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),
    
    {

        'post_send':
        {
            'parser': parse_drugspost,
            'dependencies':
            [
                _drugs_post_id.writer(),
                _drugs_post_name.writer()
            ]
        }

    },

],
requestId="/drugs"
)
req_collection.add_request(request)

# Endpoint: /drugs/{id}, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("drugs"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_drugs_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/drugs/{id}"
)
req_collection.add_request(request)

# Endpoint: /drugs/{id}, method: Put
request = requests.Request([
    primitives.restler_static_string("PUT "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("drugs"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_drugs_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "id":"""),
    primitives.restler_static_string(_drugs_post_id.reader(), quoted=True),
    primitives.restler_static_string(""",
    "name":"""),
    primitives.restler_static_string(_drugs_post_name.reader(), quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),

],
requestId="/drugs/{id}"
)
req_collection.add_request(request)

# Endpoint: /drugs/{id}, method: Delete
request = requests.Request([
    primitives.restler_static_string("DELETE "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("drugs"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_drugs_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/drugs/{id}"
)
req_collection.add_request(request)

# Endpoint: /patients, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("patients"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/patients"
)
req_collection.add_request(request)

# Endpoint: /patients, method: Post
request = requests.Request([
    primitives.restler_static_string("POST "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("patients"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "id":"""),
    primitives.restler_fuzzable_string("fuzzstring", quoted=True),
    primitives.restler_static_string(""",
    "name":"""),
    primitives.restler_fuzzable_string("fuzzstring", quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),
    
    {

        'post_send':
        {
            'parser': parse_patientspost,
            'dependencies':
            [
                _patients_post_id.writer(),
                _patients_post_name.writer()
            ]
        }

    },

],
requestId="/patients"
)
req_collection.add_request(request)

# Endpoint: /patients/{id}, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("patients"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_patients_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/patients/{id}"
)
req_collection.add_request(request)

# Endpoint: /patients/{id}, method: Put
request = requests.Request([
    primitives.restler_static_string("PUT "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("patients"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_patients_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "id":"""),
    primitives.restler_static_string(_patients_post_id.reader(), quoted=True),
    primitives.restler_static_string(""",
    "name":"""),
    primitives.restler_static_string(_patients_post_name.reader(), quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),

],
requestId="/patients/{id}"
)
req_collection.add_request(request)

# Endpoint: /patients/{id}, method: Delete
request = requests.Request([
    primitives.restler_static_string("DELETE "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("patients"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_patients_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/patients/{id}"
)
req_collection.add_request(request)

# Endpoint: /orders, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("orders"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/orders"
)
req_collection.add_request(request)

# Endpoint: /orders, method: Post
request = requests.Request([
    primitives.restler_static_string("POST "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("orders"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "id":"""),
    primitives.restler_fuzzable_string("fuzzstring", quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),
    
    {

        'post_send':
        {
            'parser': parse_orderspost,
            'dependencies':
            [
                _orders_post_id.writer()
            ]
        }

    },

],
requestId="/orders"
)
req_collection.add_request(request)

# Endpoint: /orders/{id}, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("orders"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_orders_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/orders/{id}"
)
req_collection.add_request(request)

# Endpoint: /orders/{id}, method: Put
request = requests.Request([
    primitives.restler_static_string("PUT "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("orders"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_orders_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "id":"""),
    primitives.restler_static_string(_orders_post_id.reader(), quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),

],
requestId="/orders/{id}"
)
req_collection.add_request(request)

# Endpoint: /orders/{id}, method: Delete
request = requests.Request([
    primitives.restler_static_string("DELETE "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("orders"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_orders_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/orders/{id}"
)
req_collection.add_request(request)

# Endpoint: /prescriptions, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("prescriptions"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/prescriptions"
)
req_collection.add_request(request)

# Endpoint: /prescriptions, method: Post
request = requests.Request([
    primitives.restler_static_string("POST "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("prescriptions"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "id":"""),
    primitives.restler_fuzzable_string("fuzzstring", quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),
    
    {

        'post_send':
        {
            'parser': parse_prescriptionspost,
            'dependencies':
            [
                _prescriptions_post_id.writer()
            ]
        }

    },

],
requestId="/prescriptions"
)
req_collection.add_request(request)

# Endpoint: /prescriptions/{id}, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("prescriptions"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_prescriptions_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/prescriptions/{id}"
)
req_collection.add_request(request)

# Endpoint: /prescriptions/{id}, method: Put
request = requests.Request([
    primitives.restler_static_string("PUT "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("prescriptions"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_prescriptions_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "id":"""),
    primitives.restler_static_string(_prescriptions_post_id.reader(), quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),

],
requestId="/prescriptions/{id}"
)
req_collection.add_request(request)

# Endpoint: /prescriptions/{id}, method: Delete
request = requests.Request([
    primitives.restler_static_string("DELETE "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("prescriptions"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_prescriptions_post_id.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/prescriptions/{id}"
)
req_collection.add_request(request)

# Endpoint: /inventory, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("inventory"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/inventory"
)
req_collection.add_request(request)

# Endpoint: /inventory, method: Post
request = requests.Request([
    primitives.restler_static_string("POST "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("inventory"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "ndc":"""),
    primitives.restler_fuzzable_string("fuzzstring", quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),
    
    {

        'post_send':
        {
            'parser': parse_inventorypost,
            'dependencies':
            [
                _inventory_post_ndc.writer()
            ]
        }

    },

],
requestId="/inventory"
)
req_collection.add_request(request)

# Endpoint: /inventory/{ndc}, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("inventory"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_inventory_post_ndc.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/inventory/{ndc}"
)
req_collection.add_request(request)

# Endpoint: /inventory/{ndc}, method: Put
request = requests.Request([
    primitives.restler_static_string("PUT "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("inventory"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_inventory_post_ndc.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_static_string("Content-Type: "),
    primitives.restler_static_string("application/json"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),
    primitives.restler_static_string("{"),
    primitives.restler_static_string("""
    "ndc":"""),
    primitives.restler_static_string(_inventory_post_ndc.reader(), quoted=True),
    primitives.restler_static_string("}"),
    primitives.restler_static_string("\r\n"),

],
requestId="/inventory/{ndc}"
)
req_collection.add_request(request)

# Endpoint: /inventory/{ndc}, method: Delete
request = requests.Request([
    primitives.restler_static_string("DELETE "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("inventory"),
    primitives.restler_static_string("/"),
    primitives.restler_static_string(_inventory_post_ndc.reader(), quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: 192.168.225.53:5014\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/inventory/{ndc}"
)
req_collection.add_request(request)
