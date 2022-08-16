import CodePipeline from 'aws-sdk/clients/codepipeline';
export var handler = function (event
//   context: Context,
//   callback: void
) {
    // Retrieve the CodePipeline name
    var pipelineName = event.pipelineName;
    //Instantiate CodePipeline
    var codepipeline = new CodePipeline();
    var params = {
        name: pipelineName,
    };
    codepipeline.startPipelineExecution(params, function (err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
        }
        else {
            console.log(data); // successful response
        }
    });
    return;
};
