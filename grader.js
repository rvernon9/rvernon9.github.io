
exports.gradeAnswer = function(graderConfig, sessionConfig, answer) {
	
	//console.error("--inside exports.gradeAnswer");
	//console.log("divStatus=" + $('#divStatus').html());
	
  const isCorrectLocal = graderConfig.status === $('#divStatus').html();
  const feedbackLocal = isCorrectLocal ? "GJ:Correct!" : "GJ:Incorrect, please, try again.";

	//console.error("feedback=" + feedbackLocal);


  return {
    isCorrect: isCorrectLocal,
    feedback: feedbackLocal,
    feedbackConfiguration: {
      status: $('#divStatus').html(),
      feedback,
      isCorrect
    }
  };
};
