import os
import boto3
from response import success_response, error_executing_response


timestamp = {"last_time": 0}


def lambda_handler(event, context):

    print(event)

    client = boto3.client("codepipeline")
    pipeline_name = os.environ["PIPELINE_NAME"]

    event_time = event["requestContext"]["timeEpoch"]

    ## if same lambda has been invoked in last 5s
    if event_time - timestamp["last_time"] < 5000:
        print("we were too close")
        return success_response()

    timestamp["last_time"] = event_time

    try:

        response = client.start_pipeline_execution(name=pipeline_name)

        return success_response()

    except Exception as e:
        print("error ", e)
        return error_executing_response()
