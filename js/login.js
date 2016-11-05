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

  var oAuthCodeGrant = function(){
    var CLIENT_ID = "NhfvAEwAkCzlIzi2iH1NMcSylPTWTxPA";
    var REDIRECT_URI = "//danvitoriano.github.io/rest-api-examples/index.html";
    var lock = new Auth0Lock('NhfvAEwAkCzlIzi2iH1NMcSylPTWTxPA', 'danvitoriano.auth0.com');
    // var REDIRECT_URI = http://localhost:3000/

    document
    .querySelector("#btn-submit-7")
    .addEventListener("click", function(){
      // window.location = "//danvitoriano.auth0.com/auth?response_type=code&client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI;
      lock.show();
    });
  }();

})();
