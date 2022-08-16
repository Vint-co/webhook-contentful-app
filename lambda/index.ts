import CodePipeline from 'aws-sdk/clients/codepipeline';

export function handler(): HttpResponse {
  // Retrieve the CodePipeline name
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const pipelineName = process.env.PIPELINE_NAME!;

  //Instantiate CodePipeline
  const codepipeline = new CodePipeline();

  const params = {
    name: pipelineName,
  };

  codepipeline.startPipelineExecution(params, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      console.log(data); // successful response
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Successfully started pipeline',
        }),
      };
    }
  });

  return {
    statusCode: 500,
    body: JSON.stringify({
      message: 'An error occurred',
    }),
  };
}

type HttpResponse = {
  statusCode: number;
  body: string;
};
