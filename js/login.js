;
(function() {

  var api = "https://jsonplaceholder.typicode.com";
  var userId = 1; // default to JSONPlaceholder API

  var postJquery = function() {
    $("#btn-submit-1").click(function() {
      var title = $("#title-1").val();
      var body = $("#body-1").val();
      $.ajax({
        type: 'POST',
        url: api + '/posts',
        dataType: "json",
        data: {
          title: title,
          body: body,
          userId: userId
        },
        success: function(data) {
          console.log("Content added!", data); //the new item is returned with an ID
          $("#res-1").html("<p class='text-success mt-2' role=alert>" + JSON.stringify(data) + "</p>");
          $("#form-1")[0].reset();
        },
        error: function(data) {
          console.log("Content not added!", data); //the new item is returned with an ID
          $("#res-1").html("<p class='text-danger mt-2' role=alert>Error " + JSON.stringify(data) + "</p>");
        }
      });
    });
  }();

  var postJS = function() {
    document.getElementById("btn-submit-2").addEventListener("click", function() {
      var title = document.getElementById("title-2").value;
      var body = document.getElementById("body-2").value;
      var http = new XMLHttpRequest();
      var params = "title=" + title + "&body=" + body + "&userId=" + userId;
      var url = api + "/posts";

      http.open("POST", url, true);

      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      http.onload = function() {
        if (http.readyState === http.DONE) {
          if (http.status === 201) {
            console.log("Content added!", http.responseText);
            document.getElementById("res-2").innerHTML = "<p class='text-success mt-2' role=alert>" + http.responseText + "</p>";
            document.getElementById("form-2").reset();
          } else {
            console.log("User not added!", http.responseText);
            document.getElementById("res-2").innerHTML = "<p class='text-danger mt-2' role=alert>Error " + http.status + ". ID must be from 1 to 100.</p>";
          }
        }
      }
      http.send(params);
    });
  }();

  var putJS = function() {
    document.getElementById("btn-submit-3").addEventListener("click", function() {
      var id = document.getElementById("id-3").value;
      var title = document.getElementById("title-3").value;
      var body = document.getElementById("body-3").value;
      var http = new XMLHttpRequest();
      var params = "title=" + title + "&body=" + body + "&userId=" + userId + "&id=" + id;
      var url = api + "/posts/" + id;

      http.open("PUT", url, true);

      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      http.onload = function() {
        if (http.readyState === http.DONE) {
          if (http.status === 200) {
            console.log("Content updated!", http.responseText);
            document.getElementById("res-3").innerHTML = "<p class='text-success mt-2' role=alert>" + http.responseText + "</p>";
            document.getElementById("form-3").reset();
          } else {
            console.log("Content not updated!", http.responseText);
            document.getElementById("res-3").innerHTML = "<p class='text-danger mt-2' role=alert>Error " + http.status + ". ID must be from 1 to 100.</p>";
          }
        }
      }
      http.send(params);
    });
  }();

  var patchJS = function() {
    document.getElementById("btn-submit-4").addEventListener("click", function() {
      var id = document.getElementById("id-4").value;
      var title = document.getElementById("title-4").value;
      var http = new XMLHttpRequest();
      var params = "title=" + title;
      var url = api + "/posts/" + id;

      http.open("PATCH", url, true);

      http.onload = function() {
        if (http.readyState === http.DONE) {
          if (http.status === 200) {
            console.log("Content updated!", http.responseText);
            document.getElementById("res-4").innerHTML = "<p class='text-success mt-2' role=alert>" + http.responseText + "</p>";
            document.getElementById("form-4").reset();
          } else {
            console.log("Content not updated!", http.responseText);
            document.getElementById("res-4").innerHTML = "<p class='text-danger mt-2' role=alert>Error " + http.status + ". ID must be from 1 to 100.</p>";
          }
        }
      }
      http.send(params);
    });
  }();

  var getOneItemJS = function() {
    document.getElementById("btn-submit-5").addEventListener("click", function() {
      var id = document.getElementById("id-5").value;
      var http = new XMLHttpRequest();
      var url = api + "/posts/" + id;

      http.open("GET", url, true);

      http.onload = function() {
        if (http.readyState === http.DONE) {
          if (http.status === 200) {
            console.log("Content loaded!", http.responseText);
            document.getElementById("res-5").innerHTML = "<p class='text-success mt-2' role=alert>" + http.responseText + "</p>";
            document.getElementById("form-5").reset();
          } else {
            console.log("Content not updated!", http.responseText);
            document.getElementById("res-5").innerHTML = "<p class='text-danger mt-2' role=alert>Error " + http.status + ". ID must be from 1 to 100.</p>";
          }
        }
      }
      http.send(null);
    });
  }();

  var getAllItensFilterJS = function() {
    document.getElementById("btn-submit-6").addEventListener("click", function() {
      var http = new XMLHttpRequest();
      var url = api + "/users";

      http.open("GET", url, true);

      http.onload = function() {
        if (http.readyState === http.DONE) {
          if (http.status === 200) {
            console.log("Users loaded!", http.responseText);
            var obj = JSON.parse(http.responseText);
            var result = obj.map(function(a) {
              var filterParam = document.getElementById("filter-6").value;
              return a[filterParam];
            });
            document.getElementById("res-6").innerHTML = "<p class='text-success mt-2' role=alert>" + result.toString().replace(/,/g, "; ") + "</p>";
          } else {
            console.log("Users not loaded!", http.responseText);
            document.getElementById("res-6").innerHTML = "<p class='text-danger mt-2' role=alert>Error " + http.status + "</p>";
          }
        }
      };

      http.send(null);
    });
  }();

  var oAuthSimpleLogin = function() {
    var lock1 = new Auth0Lock('NhfvAEwAkCzlIzi2iH1NMcSylPTWTxPA', 'danvitoriano.auth0.com');

    // buttons
    var btn_login = document.getElementById('btn-login-7');
    var btn_logout = document.getElementById('btn-logout-7');

    btn_login.addEventListener('click', function() {
      lock1.show();
    });

    btn_logout.addEventListener('click', function() {
      logout();
    });

    lock1.on("authenticated", function(authResult) {
      localStorage.setItem('oAuthSimpleLogin', authResult.idToken);
      btn_login.style.display = "none";
      btn_logout.style.display = "inline-block";
    });

    var init = function() {
      var id_token = localStorage.getItem('oAuthSimpleLogin');
      if (id_token) {
        btn_login.style.display = "none";
        btn_logout.style.display = "inline-block";
      }
    };

    var logout = function() {
      localStorage.removeItem('oAuthSimpleLogin');
      window.location.href = "/rest-api-examples/";
    };

    init();
  }();

  var oAuthProfileLogin = function() {
    var lock2 = new Auth0Lock('NhfvAEwAkCzlIzi2iH1NMcSylPTWTxPA', 'danvitoriano.auth0.com');

    // buttons
    var btn_login = document.getElementById('btn-login-8');
    var btn_logout = document.getElementById('btn-logout-8');

    btn_login.addEventListener('click', function() {
      lock2.show();
    });

    btn_logout.addEventListener('click', function() {
      logout();
    });

    lock2.on("authenticated", function(authResult) {
      lock2.getProfile(authResult.idToken, function(error, profile) {
        if (error) {
          // Handle error
          return;
        }
        localStorage.setItem('oAuthProfileLogin', authResult.idToken);
        // Display user information
        show_profile_info(profile);
      });
    });

    //retrieve the profile:
    var retrieve_profile = function() {
      var id_token = localStorage.getItem('oAuthProfileLogin');
      if (id_token) {
        lock2.getProfile(id_token, function(err, profile) {
          if (err) {
            return alert('There was an error getting the profile: ' + err.message);
          }
          // Display user information
          show_profile_info(profile);
        });
      }
    };

    var show_profile_info = function(profile) {
      var avatar = document.getElementById('avatar');
      var nickname = document.getElementById('nickname');
      nickname.textContent = "Welcome " + profile.nickname;
      btn_login.style.display = "none";
      avatar.src = profile.picture;
      avatar.style.display = "block";
      nickname.style.display = "block";
      btn_logout.style.display = "block";
    };

    var logout = function() {
      localStorage.removeItem('oAuthProfileLogin');
      window.location.href = "/rest-api-examples/";
    };

    retrieve_profile();
  }();

  var oAuthCustomLogin = function() {
    var auth0 = new Auth0({
      domain: "danvitoriano.auth0.com",
      clientID: "NhfvAEwAkCzlIzi2iH1NMcSylPTWTxPA",
      callbackOnLocationHash: true,
      callbackURL: 'https://danvitoriano.github.io/rest-api-examples/',
    });

    document.getElementById('btn-login-9').addEventListener('click', function() {
      var username = document.getElementById('title-9').value;
      var password = document.getElementById('body-9').value;
      auth0.login({
        connection: 'Username-Password-Authentication',
        responseType: 'token',
        email: username,
        password: password,
      }, function(err) {
        if (err) {
          alert("something went wrong: " + err.message);
        } else {
          show_logged_in(username);
        }
      });
    });

    document.getElementById('btn-register').addEventListener('click', function() {
      var username = document.getElementById('title-9').value;
      var password = document.getElementById('body-9').value;
      auth0.signup({
        connection: 'Username-Password-Authentication',
        responseType: 'token',
        email: username,
        password: password,
      }, function(err) {
        if (err) alert("something went wrong: " + err.message);
      });
    });

    document.getElementById('btn-google').addEventListener('click', function() {
      auth0.login({
        connection: 'google-oauth2'
      }, function(err) {
        if (err) alert("something went wrong: " + err.message);
      });
    });

    document.getElementById('btn-logout-9').addEventListener('click', function() {
      localStorage.removeItem('oAuthCustomLogin');
      window.location.href = "/rest-api-examples/";
    })

    var show_logged_in = function(username) {
      document.querySelector('form.form-signin').style.display = "none";
      document.querySelector('div.logged-in').style.display = "block";
    };

    var show_sign_in = function() {
      document.querySelector('div.logged-in').style.display = "none";
      document.querySelector('form.form-signin').style.display = "block";
    };

    var parseHash = function() {
      var token = localStorage.getItem('oAuthCustomLogin');
      if (token) {
        show_logged_in();
      } else {
        var result = auth0.parseHash(window.location.hash);
        if (result && result.idToken) {
          localStorage.setItem('oAuthCustomLogin', result.idToken);
          show_logged_in();
        } else if (result && result.error) {
          alert('error: ' + result.error);
          show_sign_in();
        }
      }
    };

    parseHash();
  }();

  // var oAuthImplicitGrant = function() {
  //   $(function() {
  //     var extractToken = function(hash) {
  //       var match = hash.match(/access_token=([\w-]+)/);
  //       return !!match && match[1];
  //     };

  //     var CLIENT_ID = "NhfvAEwAkCzlIzi2iH1NMcSylPTWTxPA";
  //     var AUTHORIZATION_ENDPOINT = "https://danvitoriano.auth0.com/authorize";
  //     var RESOURCE_ENDPOINT = "https://danvitoriano.auth0.com/userinfo";

  //     var token = extractToken(document.location.hash);

  //     if (token) {
  //       $('div.authenticated').show();

  //       $('span.token').text(token);

  //       $.ajax({
  //         url: RESOURCE_ENDPOINT,
  //         beforeSend: function(xhr) {
  //           xhr.setRequestHeader('Authorization', "OAuth " + token);
  //           xhr.setRequestHeader('Accept', "application/json");
  //         },
  //         success: function(response) {
  //           var container = $('span.user');
  //           if (response) {
  //             container.text(response.username);
  //           } else {
  //             container.text("An error occurred.");
  //           }
  //         }
  //       });
  //     } else {
  //       $('div.authenticate').show();

  //       var authUrl = AUTHORIZATION_ENDPOINT +
  //         "?response_type=token" +
  //         "&client_id=" + CLIENT_ID +
  //         "&redirect_uri=" + window.location;

  //       $("a.connect").attr("href", authUrl);
  //     }
  //   });
  // }();

  var oAuthImplicitGRant = function(){
  	function getParameterByName(name) {
		  var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
		  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}

		function getAccessToken() {
		  return getParameterByName('access_token');
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

			  $.ajax({
			    cache: false,
			    url: "http://localhost:7001/api/appointments",
			    headers: { "Authorization": "Bearer " + access_token }
			  });
			});
		});
  }();

})();
