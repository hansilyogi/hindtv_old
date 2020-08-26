$(document).ready(function () {
  var id = $(location).attr("href").split("=")[1];
  loaddata();
  loadsubcompany();
  loadtiming();

  var UPDATEID;
  function loadsubcompany() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompany",
      data: { type: "getdata", token: $("#website-token").attr("value") },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#subcompany").html("");
          for (i = 0; i < data.Data.length; i++) {
            $("#subcompany").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                "</option>"
            );
          }
        }
      },
    });
  }

  function loadtiming() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: { type: "gettiming", token: $("#website-token").attr("value") },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#timing").html("");
          TIMING = data.Data[0]._id;
          for (i = 0; i < data.Data.length; i++) {
            $("#timing").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                " - " +
                data.Data[i].StartTime +
                " - " +
                data.Data[i].EndTime +
                "</option>"
            );
          }
        }
      },
    });
  }

  function loaddata() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: {
        type: "getemployee",
        id: id,
        token: $("#website-token").attr("value"),
      },
      success: function (data) {
        if (data.isSuccess == true) {
          UPDATEID = id;
          $("#firstname").val(data.Data.FirstName);
          $("#middlename").val(data.Data.MiddleName);
          $("#lastname").val(data.Data.LastName);
          $("#gender").val(data.Data.Gender);
          $("#dob").val(data.Data.DOB);
          $("#mobile").val(data.Data.Mobile);
          $("#mail").val(data.Data.Mail);
          $("#married").val(data.Data.MartialStatus);
          $("#joindate").val(data.Data.JoinDate);
          $("#subcompany").val(data.Data.SubCompany);
          $("#confirmationdate").val(data.Data.ConfirmationDate);
          $("#terminationdate").val(data.Data.TerminationDate);
          $("#prohibition").val(data.Data.Prohibition);
          $("#department").val(data.Data.Department);
          $("#designation").val(data.Data.Designation);
          $("#idtype").val(data.Data.Idtype);
          $("#idnumber").val(data.Data.IDNumber);
          $("#wifiname").val(data.Data.WifiName);
          $("#weekdayname").val(data.Data.WeekName);
          $("#numofday").val(data.Data.WeekDay);
          $("#timing").val(data.Data.Timing);
          $("#employeeimage").val(data.Data.ProfileImage);
          $("#employeecertficate").val(data.Data.CertificateImage);
          window.scrollTo(0, 0);
          $("#btn-submit-on").html(
            "<button type='submit' class='btn btn-success' id='btn-update'>Update</button>" +
              "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
          );
        } else {
          toastr.error(data.Message);
        }
      },
    });
    // $.ajax({
    //   type: "POST",
    //   url: $("#website-url").attr("value") + "employee",
    //   data: { type: "getdata", token: $("#website-token").attr("value") },
    //   dataType: "json",
    //   cache: false,
    //   beforeSend: function () {
    //     $("#displaydata").html(
    //       '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
    //     );
    //   },
    //   success: function (data) {
    //     if (data.isSuccess == true) {
    //       $("#displaydata").html("");
    //       for (i = 0; i < data.Data.length; i++) {
    //         data.Data[i]["MailId"] =
    //           data.Data[i]["MailId"] == undefined
    //             ? "-"
    //             : data.Data[i]["MailId"];
    //         $("#displaydata").append(
    //           "<tr><td>" +
    //             data.Data[i]["Name"] +
    //             "</td><td>" +
    //             data.Data[i]["MailId"] +
    //             "</td><td>" +
    //             data.Data[i]["Mobile"] +
    //             "</td><td>" +
    //             '<a id="edit-data" href="employee.php?id=' +
    //             data.Data[i]["_id"] +
    //             '"><i class="fas fa-edit" aria-hidden="true"></i></a>' +
    //             "</td><td>" +
    //             "<a href=singleemployee.php?id=" +
    //             data.Data[i]["_id"] +
    //             ">View More</a></td></tr>"
    //         );
    //       }
    //     } else {
    //       $("#displaydata").html(
    //         '<tr><td colspan="5" class="text-center font-weight-bold">' +
    //           data.Message +
    //           "</td></tr></center>"
    //       );
    //     }
    //   },
    // });
  }


  $(document).on("click", "#btn-cancel", function (e) {
    e.preventDefault();
    $("#employeedata")[0].reset();
    $("#errorFirstName").html("");
    $("#errorMobile").html("");
    $("#btn-submit-on").html(
      "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
        "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
    );
  });

  $(document).on("click", "#btn-update", function (e) {
    e.preventDefault();
    val = validation();
    if (val == 1) {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "employee",
        data: {
          type: "update",
          id: UPDATEID,
          firstname: $("#firstname").val(),
          middlename: $("#middlename").val(),
          lastname: $("#lastname").val(),
          gender: $("#gender").val(),
          dob: $("#dob").val(),
          mobile: $("#mobile").val(),
          mail: $("#mail").val(),
          martialstatus: $("#married").val(),
          joindate: $("#joindate").val(),
          subcompany: $("#subcompany").val(),
          confirmationdate: $("#confirmationdate").val(),
          terminationdate: $("#terminationdate").val(),
          prohibition: $("#prohibition").val(),
          department: $("#department").val(),
          designation: $("#designation").val(),
          idtype: $("#idtype").val(),
          idnumber: $("#idnumber").val(),
          wifiname: $("#wifiname").val(),
          weekdayname: $("#weekdayname").val(),
          numofday: $("#numofday").val(),
          timing: $("#timing").val(),
          employeeimage:$("#employeeimage").val(),
          employeecertificate:$("#employeecertficate").val(),
          token: $("#website-token").attr("value"),
        },
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#btn-submit-on").html(
            '<button class="btn btn-success" type="button">\
                                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                  Loading...\
                                  </button>'
          );
        },
        success: function (data) {
          if (data.isSuccess == true) {
            $("#staticmessage")
              .removeClass("text-success text-danger")
              .addClass("text-success font-weight-bold");
            $("#staticmessage").html(data["Message"]).fadeOut(10000);
            $.when($("#staticmessage").fadeOut()).then(function () {
              $("#staticmessage").html("");
              $("#staticmessage").removeAttr("style");
              $("#staticmessage");
            });
            $("#employeedata")[0].reset();
            loaddata();
            $("#btn-submit-on").html(
              "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
                "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
            );
          } else {
            toastr.error(data.Message);
            $("#btn-submit-on").html(
              "<button type='submit' class='btn btn-success' id='btn-update'>Update</button>" +
                "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
            );
          }
        },
      });
    }
  });

  $(document).on("click", "#btn-submit", function (e) {
    e.preventDefault();
    val = validation();
    if (val == 1) {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "employee",
        data: {
          type: "insert",
          firstname: $("#firstname").val(),
          middlename: $("#middlename").val(),
          lastname: $("#lastname").val(),
          gender: $("#gender").val(),
          dob: $("#dob").val(),
          mobile: $("#mobile").val(),
          mail: $("#mail").val(),
          martialstatus: $("#married").val(),
          joindate: $("#joindate").val(),
          subcompany: $("#subcompany").val(),
          confirmationdate: $("#confirmationdate").val(),
          terminationdate: $("#terminationdate").val(),
          prohibition: $("#prohibition").val(),
          department: $("#department").val(),
          designation: $("#designation").val(),
          idtype: $("#idtype").val(),
          idnumber: $("#idnumber").val(),
          timing: $("#timing").val(),
          wifiname: $("#wifiname").val(),
          weekdayname: $("#weekdayname").val(),
          numofday: $("#numofday").val(),
          employeeimage:$("#employeeimage").val(),
          employeecertificate:$("#employeecertficate").val(),
          token: $("#website-token").attr("value")
        },
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#btn-submit-on").html(
            '<button class="btn btn-success" type="button">\
                                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                  Loading...\
                                  </button>'
          );
        },
        success: function (data) {
          if (data.isSuccess == true) {
            $("#staticmessage")
              .removeClass("text-success text-danger")
              .addClass("text-success font-weight-bold");
            $("#staticmessage").html(data["Message"]).fadeOut(10000);
            $.when($("#staticmessage").fadeOut()).then(function () {
              $("#staticmessage").html("");
              $("#staticmessage").removeAttr("style");
              $("#staticmessage");
            });
            $("#employeedata")[0].reset();
            loaddata();
          } else {
            toastr.error(data.Message);
          }
        },
        complete: function () {
          $("#btn-submit-on").html(
            "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
              "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
          );
        },
      });
    }
  });

  function validation() {
    val = 1;
    $("#errorFirstName").html("");
    if ($("#firstname").val() == "") {
      $("#errorFirstName").html("First Name can't be empty");
      val = 0;
    }
    $("#errorMobile").html("");
    if ($("#mobile").val() != "") {
      var preg = /^[6789]\d{9}$/;
      if (!$("#mobile").val().match(preg)) {
        $("#errorMobile").html("Invalid Mobile No.");
        val = 0;
      }
    } else {
      $("#errorMobile").html("Mobile Number can't be empty");
      val = 0;
    }
    return val;
  }

  $(document).on("click", "#removeexcelsheet", function (e) {
    e.preventDefault();
    $("#uploaddata")[0].reset();
  });

  $(document).on("click", "#downloademployeeexcel", function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "bulk",
      data: { type: "employee", token: $("#website-token").attr("value") },
      dataType: "json",
      cache: false,
      beforeSend: function () {
        $("#btn-download-on").html(
          '<button class="btn btn-primary float-right" type="button">\
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                Loading...\
                                </button>'
        );
      },
      success: function (data) {
        if (data.isSuccess == true) {
          var link = document.createElement("a");
          document.body.appendChild(link);
          link.href = $("#website-url").attr("value") + "bulk/" + data.Data;
          link.target = "_blank";
          link.click();
        } else {
          toastr.error(data.Message);
        }
      },
      complete: function () {
        $("#btn-download-on").html(
          '<button type="submit" class="btn btn-primary float-right" id="downloademployeeexcel">Download Employee Excel</button>'
        );
      },
    });
  });

  $(document).on("submit", "#uploaddata", function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "bulk",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function () {
        $("#btn-upload-on").html(
          '<button class="btn btn-primary float-right" type="button">\
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                Loading...\
                                </button>'
        );
      },
      success: function (data) {
        if (data.isSuccess == true) {
          toastr.success(data.Message);
        } else {
          toastr.error(data.Message);
        }
      },
      complete: function () {
        $("#btn-upload-on").html(
          '<div class="form-group ml-1"><button type="submit" class="btn btn-primary" id="uploadexcelsheet">Upload</button></div><div class="form-group ml-3"><button type="submit" class="btn btn-primary" id="removeexcelsheet">Cancel</button></div>'
        );
      },
    });
  });
});
