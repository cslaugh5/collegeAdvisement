$(document).ready(function() {
	var submitButton = $("#submit");
	var clickFunction = function(e) {
		e.preventDefault();
		var value = $("#input").val();
        console.log(value);
		var myurl= "https://yesno.wtf/api"; 
	$.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		console.log(json);
		var results = "";
		results += '<p>And your answer is... ' + json.answer + ".</p>";
		
		$("#results").html(results);
	}
	    
	});
	
	}
	submitButton.click(clickFunction);
	//console.log(submitButton);
});
