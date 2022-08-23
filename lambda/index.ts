import CodePipeline from 'aws-sdk/clients/codepipeline';
import { APIGatewayProxyResult } from 'aws-lambda';

export function handler(): APIGatewayProxyResult {
  // Retrieve the CodePipeline name
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const pipelineName = process.env.PIPELINE_NAME!;

  //Instantiate CodePipeline
  const codepipeline = new CodePipeline();

  const params = {
    name: pipelineName,
  };

  try {
    const response = codepipeline.startPipelineExecution(params);

    console.log(response);

    return {
      statusCode: 200,
      body: '<html><body><h1>Success</h1></body></html>',
      headers: {
        'content-type': 'text/html',
      },
      isBase64Encoded: false,
    };
  } catch (error: any) {
    console.log(error); // an error occurred
  }

  return {
    statusCode: 500,
    body: JSON.stringify({
      message: 'An error occurred',
    }),
  };
}
