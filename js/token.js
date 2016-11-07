;
(function() {

  var oAuthImplicitGRant = function(){
  	function getParameterByName(name) {
		  var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
		  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}

		function getAccessToken() {
		  return getParameterByName('access_token');
		  console.log("access_token!", access_token); //the new item is returned with an ID
		}

		function getIdToken() {
		  return getParameterByName('id_token');
		}

		$(function () {
		  var access_token = getAccessToken();

		  // Optional: an id_token will be returned by Auth0
		  // if your response_type argument contained id_token
		  var id_token = getIdToken();

		  // Use the access token to make API calls
			$('#get-appointments').click(function(e) {
			  e.preventDefault();

			  // $.ajax({
			  //   cache: false,
			  //   url: "https://danvitoriano.auth0.com/userinfo",
			  //   headers: { "Authorization": "Bearer " + access_token }
			  // });

			  $.ajax({
	        type: 'GET',
	        cache: false,
	        url: 'https://danvitoriano.auth0.com/userinfo',
	        headers: { "Authorization": "Bearer " + access_token },
	        success: function(data) {
	          console.log("access_token!", access_token); //the new item is returned with an ID
	          $("#res-10").html("<p class='text-success mt-2' role=alert>Access Token: "
	          	+ access_token + 
	          	"<br> Name: " 
	          	+ data.name + 
	          	"<br> E-mail: " 
	          	+ data.email + 
	          	"<br> Photo: <img alt='avatar' id='avatar-10' style='max-width:100%'' class='mt-1' src='" 
	          	+ data.picture + "'>");
	        },
	        error: function() {
	          console.log("Content not added!", access_token); //the new item is returned with an ID
	          $("#res-10").html("<p class='text-danger mt-2' role=alert>Error " + access_token + "</p>");
	        }
	      });


			});
		});
  }();

})();
