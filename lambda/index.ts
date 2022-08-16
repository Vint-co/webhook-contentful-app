import CodePipeline from 'aws-sdk/clients/codepipeline';

export const handler = (): //   event: CustomEvent
//   context: Context,
//   callback: void
void => {
  // Retrieve the CodePipeline name
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const pipelineName = process.env.PIPELINE_NAME!;
  console.log(pipelineName);

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
    }
  });

  return;
};
