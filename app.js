var width = 800,
  height = 600,
  centered;



  courseraApi.callMethod({
    type: "SET_HEIGHT",
    data: {
      height: "600px"
    }
  });

  


//  courseraApi.callMethod({
//    type: "GET_SESSION_CONFIGURATION",
//    onSuccess: function(configuration) {
//      const { stateId, stateName, feedback, isCorrect } = configuration;
//		}
//	});



      function initiateApp(configuration) {
        var frame = document.createElement("iframe");
        //frame.setAttribute("width", "100%");
        //frame.focus();
      }

      courseraApi.callMethod({
        type: "GET_SESSION_CONFIGURATION",
        onSuccess: initiateApp,
        onError: console.log
      });
	  
	  
//when we get grading back from captivate we would call this:
function setNumberCorrect(num) {
	console.log("--inside setNumberCorrect");
	
	courseraApi.callMethod({
	  type: "SET_ANSWER",
	  data: {
		// This is the answer format you have defined for your question type. This can
		// be any valid JSON value.
		answer: {
		  "status": $('#divStatus').html()
		}  
	  },
	  onSuccess: function() {
		console.log("setNumberCorrect.success");
	  },
	  //onError: (error: Error) { 
	//	console.log("setNumberCorrect.error:" + error);
	//  },
	});

}