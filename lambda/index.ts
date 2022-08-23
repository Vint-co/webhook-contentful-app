import CodePipeline from 'aws-sdk/clients/codepipeline';
import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

export function handler(): APIGatewayProxyStructuredResultV2 {
  // Retrieve the CodePipeline name
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const pipelineName = process.env.PIPELINE_NAME!;

  //Instantiate CodePipeline
  const codepipeline = new CodePipeline();

  const params = {
    name: pipelineName,
  };

  try {
    const response = codepipeline.startPipelineExecution(
      params,
      function (err, data) {
        console.log('in callback');
        if (err) {
          console.log('in err');
          console.log(err, err.stack); // an error occurred

          return {
            statusCode: 502,
            body: JSON.stringify({
              message: 'An error occurred',
            }),
          };
        } else {
          console.log('in suc');
          console.log(data); // successful response

          // const returnThing: APIGatewayProxyResult = {
          //   statusCode: 201,
          //   body: JSON.stringify({
          //     message: '<html><body><h1>Success</h1></body></html>',
          //   }),
          //   headers: {
          //     'Content-Type': 'text/html',
          //     'Access-Control-Allow-Origin': '*',
          //     'Access-Control-Allow-Methods': 'OPTIONS,GET',
          //   },
          //   isBase64Encoded: false,
          // };

          // console.log(returnThing);

          // return returnThing;

          return {
            body: JSON.stringify({
              message: 'Hello, world!',
            }),
          };
        }
      }
    );
  } catch (error: any) {
    console.log(error); // an error occurred
    console.log('in error catch');
  }

  console.log('after repsonse');

  return {
    statusCode: 202,
    headers: {
      'Content-Type': 'application/json',
      'My-Custom-Header': 'Custom Value',
    },
    body: JSON.stringify({
      message: 'Hello, world!',
    }),
    cookies: [
      'Cookie_1=Value1; Expires=21 Oct 2021 07:48 GMT',
      'Cookie_2=Value2; Max-Age=78000',
    ],
    isBase64Encoded: false,
  };
}
