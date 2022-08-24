import os
import boto3
from response import success_response, error_executing_response


def lambda_handler(event, context):

    print(event)

    client = boto3.client("codepipeline")
    pipeline_name = os.environ["PIPELINE_NAME"]

    try:

        response = client.start_pipeline_execution(name=pipeline_name)

        return success_response(response)

    except Exception as e:
        print("error ", e)
        return error_executing_response()
