;
(function(){

	var api = "https://jsonplaceholder.typicode.com";

	$("#btn-submit1").click(function(){
		var name1 = $("#name1").val();
		var age1 = $("#age1").val();
		$.ajax({
		  type: 'POST',
		  url: api + '/posts',
		  data: {	title: name1,
    					body: age1,
    					userId: 1},
		  success: function(data) {
		    console.log("User added!", data); //the new item is returned with an ID
		    $("#res1").addClass("alert-success");
		    $("#res1").html("Name: <b>" + name1 + "</b> | Age: <b>" + age1 + "</b> | ID: <b>" + data.id + "</b>");
		    $("#form1")[0].reset();
		  }
		});
	});

	document.getElementById("btn-submit2").addEventListener("click", function(){
		var name2 = document.getElementById("name2").value;
		var age2 = document.getElementById("age2").value;
		var http = new XMLHttpRequest();
		var params = "title=" + name2 + "&body=" + age2 + "&userId=1";
		var url = api + "/posts";

		http.open("POST", url, true);

		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		http.onreadystatechange = function(){
			if(http.readyState == 4 && http.status >= 200 && http.status <= 299){
				console.log("User added!", http.responseText);
		    document.getElementById("res2").className += " alert-success";
		    var jsonResponse = JSON.parse(http.responseText);
		    document.getElementById("res2").innerHTML = "Name: <b>" + name2 + "</b> | Age: <b>" + age2 + "</b> | ID: <b>" + jsonResponse["id"] + "</b>";
		    document.getElementById("form2").reset();
			}
		}
		http.send(params);
	});


})();