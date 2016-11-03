
	// var xhr = new XMLHttpRequest();

	// xhr.open('GET', "//ipinfo.io/json", true);
	// xhr.send();

	// xhr.onreadystatechange = processRequest;

	// function processRequest(e){
	// 	if(xhr.readyState == 4 && xht.status == 200){
	// 		var response = JSON.parse(xhr.responseText);
	// 		alert(response.ip);
	// 	}
	// }


	function sendData(data){
		var XHR = new XMLHttpRequest();
		var urlEncodedData = "";
		var urlEncodedDataPairs = [];
		var name;

		// We turn the data object into an array of URL encoded key value pairs.
		for (name in data){
			urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
		}
		
		// We combine the pairs into a single string and replace all encoded spaces to 
  	// the plus character to match the behaviour of the web browser form submit.
		urlEncodedData - urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  	// We define what will happen if the data is successfully sent
		XHR.addEventListener('load', function(event){
			alert("Yeah Data sent and response loaded");
		});

  	// We define what will happen in case of error
		XHR.addEventListener('error', function(event){
			alert("Oups! Something goes wrong.");
		});

		// We setup our request
		XHR.open('POST', 'http://ucommbieber.unl.edu/CORS/cors.php');

  	// We add the required HTTP header to handle a form data POST request
		XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		XHR.setRequestHeader('Content-Length', urlEncodedData.length);

  	// And finally, We send our data.
		XHR.send(urlEncodedData);

	}


  // if (document.querySelector('#email') && document.querySelector('#password')) {
  //   var req = {
  //     method: 'POST',
  //     url: 'http://projeto-3.homolog.infra:15000/oi-partner-api/oauth/authorize?client_id=web-client&response_type=token&redirect_uri=http://localhost:3000/login/',
  //     data: {
  //       login: $scope.user,
  //       password: $scope.password,
  //       type: 'LOGIN_CPF',
  //       service: 'CLOUD'
  //     },
  //     headers: {
  //       'Audit': $scope.user,
  //       'Content-Type': 'application/json',
  //       'Partner': 'CASAS_BAHIA'
  //     }

  //   }

  //   $http(req).then(function(response) {
  //     console.log('enviou');
  //   }, function(response) {
  //     console.log('não enviou');
  //   });
  // };
