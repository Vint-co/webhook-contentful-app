import json


def success_response():
    return generate_response(
        200, json.dumps({"message": 'success'})
    )


def error_executing_response():
    return generate_response(404, json.dumps({"message": "Something went wrong"}))


def common_api_headers():
    return {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET",
    }


def generate_response(status_code, response_body):
    return {
        "statusCode": status_code,
        "isBase64Encoded": False,
        "headers": common_api_headers(),
        "body": response_body,
    }
