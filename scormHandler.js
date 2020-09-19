
var API = {
	
	score_raw: 0
	,score_max: 0
	,score_min: 0
	,score_status: ''
	,lesson_location: ''
	
	,LMSInitialize: function() {
		console.log("A.inside LMSInitialize");
		API.score_raw = 0;
		API.score_max = 0;
		API.score_min = 0;
		
	}
	,LMSFinish: function() {
		console.log("B.inside LMSFinish");
	}
	,LMSGetValue: function(item) {
		console.log("C.inside LMSGetValue");
		console.log("> C.item=" + item);
		return "";
	}
	,LMSSetValue: function(item, val) {
		console.log("D.inside LMSSetValue");
		console.log("> D.item=" + item);
		console.log("> D.val=" + val);
		
		
		//status should only be set at end of quiz
		if (item == 'cmi.core.score.raw')
			API.score_raw = val;
		else if (item == 'cmi.core.score.max')
			API.score_max = val;
		else if (item == 'cmi.core.score.min')
			API.score_min = val;
		else if (item == 'cmi.core.lesson_location') {
			API.lesson_location = val;
			$('#divLocation').html(val);
		} else if (item == 'cmi.core.lesson_status') {
			API.score_status = val;
			console.log("%c** D.status=" + API.score_status, "background:#e0e0e0; color:#c03030; padding:8px 12px; border-radius:2px;");
			
			$('#divStatus').html(val);
			// now need to call COURSERA grading?
			
			try {
			courseraApi.callMethod({
				type: "SET_ANSWER",
				data: {
					// This is the answer format you have defined for your question type. This can
					// be any valid JSON value.
					status: val
				  },
				  onSuccess: function() {
					console.log("SET_ANSWER.onSuccess");
				  },
				  onError: function(error) { 
					console.log("SET_ANSWER.error=" + error);
				  },
				  //onSuccess: (): void => {
				  //	console.log("SET_ANSWER.onSuccess");
				  //},
				  //onError: (error: Error): void => { 
				  //	console.log("SET_ANSWER.error=" + error);
				  //},

			  });
			} catch (e) {
				console.error("Error submitting answer");
			}
			
		} else if (item == 'cmi.suspend_data') {
		}
		
	}
	,LMSCommit: function() {
		console.error("E.inside LMSCommit");
		console.log("> E.score_raw=" + API.score_raw);
		console.log("> E.score_max=" + API.score_max);
		console.log("> E.score_min=" + API.score_min);
		console.log("> E.score_status=" + API.score_status);
		
		
		try {
			courseraApi.callMethod({
				type: "SET_COMPLETE",
				  onSuccess: function() {
					console.log("SET_COMPLETE.onSuccess");
				  },
				  onError: function(error) { 
					console.log("SET_COMPLETE.error=" + error);
				  },

			  });
			} catch (e) {
				console.error("Error set_complete");
			}
			
			
	}
	,LMSGetLastError: function() {
		console.log("F.inside LMSGetLastError");
	}
	,LMSGetErrorString: function() {
		console.log("G.inside LMSGetErrorString");
	}
	,LMSGetDiagnostic: function(item) {
		console.log("H.inside LMSGetDiagnostic");
		console.log("> H.item=" + item);
		
		return "";
	}


}




