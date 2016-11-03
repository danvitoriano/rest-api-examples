;
(function() {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', "//ipinfo.io/json", true);
	xhr.send();

	xhr.onreadystatechange = processRequest;

	function processRequest(e){
		if(xhr.readyState == 4 && xht.status == 200){
			var response = JSON.parse(xhr.responseText);
			alert(response.ip);
		}
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


})();