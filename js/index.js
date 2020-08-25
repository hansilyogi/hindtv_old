$(document).ready(function () {
  //var URL = "http://localhost:81/HindTV---FRONTEND/";
  //var URL = "http://15.206.236.83/";
  var URL = "http://localhost:8080/"; //local test by dhanpal

  $(document).on("click", "#btn-login", function (e) {
    e.preventDefault();
    val = validation();
    if (val == 1) {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "admin",
        data: {
          type: "login",
          mobile: $("#mobile").val(),
          password: $("#password").val(),
        },
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#btn-box").html(
            '<button type="submit" class="btn btn-primary btn-block"><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Signing In... </button>'
          );
        },
        success: function (data) {
          if (data.isSuccess == true) {
            sessionready(data.Data[0]._id);
            $(location).attr(
              "href",
              URL + "dashboard.php"
            );
          } else {
            if (data.Data == "invalidtext") {
              $("#passwordError").html(data.Message);
            } else {
              $("#passwordError").html(data.Message);
            }
          }
        },
        complete: function () {
          $("#btn-box").html(
            '<button type="submit" class="btn btn-primary btn-block" id="btn-login">Sign In</button>'
          );
        },
      });
    }
  });

  function sessionready(id) {
    $.ajax({
      type: "POST",
      url: URL + "session.php",
      data: {
        id: id,
      },
      dataType: "json",
      cache: false,
      success: function () {},
    });
  }

  function validation() {
    val = 1;
    $("#mobileError").html("");
    if ($("#mobile").val() == "") {
      $("#mobileError").html("Mobile can't be empty.");
      val = 0;
    } else {
      var preg = /^[6789]\d{9}$/;
      if (!$("#mobile").val().match(preg)) {
        $("#mobileError").html("Invalid Mobile No.");
        val = 0;
      }
    }
    $("#passwordError").html("");
    if ($("#password").val() == "") {
      $("#passwordError").html("Password can't be empty.");
      val = 0;
    }
    return val;
  }
});
