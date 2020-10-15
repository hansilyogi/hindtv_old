$(document).ready(function () {
  loaddata();
  loadsubcompany();
  var UPDATEID;
  function loaddata() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "admin",
      data: { type: "getdata", token: $("#website-token").attr("value") },
      dataType: "json",
      cache: false,
      beforeSend: function () {
        $("#displaydata").html(
          '<tr><td colspan="3" class="text-center font-weight-bold">Loading...</td></tr></center>'
        );
      },
      success: function (data) {
        if (data.Data.length > 0) {
          $("#displaydata").html("");
          for (i = 0; i < data.Data.length > 0; i++) {
            $("#displaydata").append(
              "<tr><td>" +
                data.Data[i].name +
                "</td><td>" +
                data.Data[i].mobilenumber +
                "</td><td>" +
                "<a id='edit-data' href=admin.php?id=" +
                data.Data[i]._id +
                "><i class='fas fa-edit' aria-hidden='true'></i></a>" +
                "</td></tr>"
            );
          }
        } else {
          $("#displaydata").html(
            '<tr><td colspan="3" class="text-center font-weight-bold">' +
              data.Message +
              "</td></tr></center>"
          );
        }
      },
    });
  }

  function loadsubcompany() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompany",
      data: { type: "getdata", token: $("#website-token").attr("value") },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.Data.length > 0) {
          $("#subcompany").html("");
          $("#subcompany").append(
            "<option value=0>Master-All Subcompany Access</option>"
          );
          for (i = 0; i < data.Data.length > 0; i++) {
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

  $(document).on("click", "#edit-data", function (e) {
    e.preventDefault();
    var id = $(this).attr("href").split("=")[1];
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "admin",
      data: {
        type: "getadmin",
        id: id,
        token: $("#website-token").attr("value"),
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          UPDATEID = id;
          $("#name").val(data.Data.name);
          $("#password").val(data.Data.password);
          $("#mobilenumber").val(data.Data.mobilenumber);
          $("#email").val(data.Data.email);
          data.Data.allaccessubcompany == true
            ? $("#subcompany").val(0)
            : $("#subcompany").val(data.Data.accessCompany);
          data.Data.Admin.A == 1
            ? $("#Admin1").prop("checked", true)
            : $("#Admin1").prop("checked", false);
          data.Data.Admin.U == 1
            ? $("#Admin2").prop("checked", true)
            : $("#Admin2").prop("checked", false);
          data.Data.Admin.V == 1
            ? $("#Admin3").prop("checked", true)
            : $("#Admin3").prop("checked", false);
          data.Data.Admin.D == 1
            ? $("#Admin4").prop("checked", true)
            : $("#Admin4").prop("checked", false);
          data.Data.Attendance.A == 1
            ? $("#Attendance1").prop("checked", true)
            : $("#Attendance1").prop("checked", false);
          data.Data.Attendance.U == 1
            ? $("#Attendance2").prop("checked", true)
            : $("#Attendance2").prop("checked", false);
          data.Data.Attendance.V == 1
            ? $("#Attendance3").prop("checked", true)
            : $("#Attendance3").prop("checked", false);
          data.Data.Attendance.D == 1
            ? $("#Attendance4").prop("checked", true)
            : $("#Attendance4").prop("checked", false);
          data.Data.Employee.A == 1
            ? $("#Employee1").prop("checked", true)
            : $("#Employee1").prop("checked", false);
          data.Data.Employee.U == 1
            ? $("#Employee2").prop("checked", true)
            : $("#Employee2").prop("checked", false);
          data.Data.Employee.V == 1
            ? $("#Employee3").prop("checked", true)
            : $("#Employee3").prop("checked", false);
          data.Data.Employee.D == 1
            ? $("#Employee4").prop("checked", true)
            : $("#Employee4").prop("checked", false);
          data.Data.Memo.A == 1
            ? $("#Memo1").prop("checked", true)
            : $("#Memo1").prop("checked", false);
          data.Data.Memo.U == 1
            ? $("#Memo2").prop("checked", true)
            : $("#Memo2").prop("checked", false);
          data.Data.Memo.V == 1
            ? $("#Memo3").prop("checked", true)
            : $("#Memo3").prop("checked", false);
          data.Data.Memo.D == 1
            ? $("#Memo4").prop("checked", true)
            : $("#Memo4").prop("checked", false);
          data.Data.Report.A == 1
            ? $("#Report1").prop("checked", true)
            : $("#Report1").prop("checked", false);
          data.Data.Report.U == 1
            ? $("#Report2").prop("checked", true)
            : $("#Report2").prop("checked", false);
          data.Data.Report.V == 1
            ? $("#Report3").prop("checked", true)
            : $("#Report3").prop("checked", false);
          data.Data.Report.D == 1
            ? $("#Report4").prop("checked", true)
            : $("#Report4").prop("checked", false);
          data.Data.SubCompany.A == 1
            ? $("#SubCompany1").prop("checked", true)
            : $("#SubCompany1").prop("checked", false);
          data.Data.SubCompany.U == 1
            ? $("#SubCompany2").prop("checked", true)
            : $("#SubCompany2").prop("checked", false);
          data.Data.SubCompany.V == 1
            ? $("#SubCompany3").prop("checked", true)
            : $("#SubCompany3").prop("checked", false);
          data.Data.SubCompany.D == 1
            ? $("#SubCompany4").prop("checked", true)
            : $("#SubCompany4").prop("checked", false);
          data.Data.Thought.A == 1
            ? $("#Thought1").prop("checked", true)
            : $("#Thought1").prop("checked", false);
          data.Data.Thought.U == 1
            ? $("#Thought2").prop("checked", true)
            : $("#Thought2").prop("checked", false);
          data.Data.Thought.V == 1
            ? $("#Thought3").prop("checked", true)
            : $("#Thought3").prop("checked", false);
          data.Data.Thought.D == 1
            ? $("#Thought4").prop("checked", true)
            : $("#Thought4").prop("checked", false);
          data.Data.Timing.A == 1
            ? $("#Timing1").prop("checked", true)
            : $("#Timing1").prop("checked", false);
          data.Data.Timing.U == 1
            ? $("#Timing2").prop("checked", true)
            : $("#Timing2").prop("checked", false);
          data.Data.Timing.V == 1
            ? $("#Timing3").prop("checked", true)
            : $("#Timing3").prop("checked", false);
          data.Data.Timing.D == 1
            ? $("#Timing4").prop("checked", true)
            : $("#Timing4").prop("checked", false);
          stschecktochange();
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
  });

  function stschecktochange() {
    count = 0;
    $("input:checkbox[type=checkbox]").each(function () {
      if ($(this).is(":checked")) {
        count = count + 1;
      }
    });
    if (count == 32) {
      selectcheckbox(true);
    }
  }

  function setrights() {
    var rights = new Array();
    var key = ["A", "U", "V", "D"];
    var tempdata = {};
    k = 0;
    $("input:checkbox[type=checkbox]").each(function () {
      if ($(this).is(":checked")) {
        tempdata[key[k]] = 1;
      } else {
        tempdata[key[k]] = 0;
      }
      if (k == 3) {
        rights.push(tempdata);
        tempdata = {};
      }
      k = k == 3 ? 0 : k + 1;
    });
    return rights;
  }

  $(document).on("click", "#btn-submit", function (e) {
    e.preventDefault();
    val = validation();
    if (val == 1) {
      var rights = setrights();
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "admin",
        data: {
          type: "insert",
          name: $("#name").val(),
          password: $("#password").val(),
          mobile: $("#mobilenumber").val(),
          email: $("#email").val(),
          subcompany: $("#subcompany").val(),
          rights: JSON.stringify(rights),
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
            resetdata();
            loaddata();
          } else {
            if (data.Data == "MobileError") {
              $("#errorMobile").html(data.Message);
            } else {
              toastr.error(data.Message);
            }
          }
        },
        complete: function () {
          $("#btn-submit-on").html(
            '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button><button type="submit" class="btn btn-danger ml-1"id="btn-cancel">Cancel</button>'
          );
        },
      });
    }
  });

  $(document).on("click", "#btn-update", function (e) {
    e.preventDefault();
    val = validation();
    if (val == 1) {
      var rights = setrights();
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "admin",
        data: {
          type: "update",
          id: UPDATEID,
          name: $("#name").val(),
          password: $("#password").val(),
          mobile: $("#mobilenumber").val(),
          email: $("#email").val(),
          subcompany: $("#subcompany").val(),
          rights: JSON.stringify(rights),
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
            resetdata();
            $("#btn-submit-on").html(
              '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button><button type="submit" class="btn btn-danger ml-1"id="btn-cancel">Cancel</button>'
            );
            loaddata();
          } else {
            $("#btn-submit-on").html(
              "<button type='submit' class='btn btn-success' id='btn-update'>Update</button>" +
                "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
            );
            if (data.Data == "MobileError") {
              $("#errorMobile").html(data.Message);
            }
          }
        },
      });
    }
  });

  $(document).on("click", "#btn-cancel", function (e) {
    e.preventDefault();
    resetdata();
  });

  function resetdata() {
    $("form")[0].reset();
    $("#errorName").html("");
    $("#errorPassword").html("");
    $("#errorMobile").html("");
    $("#errorEmail").html("");
    $("#btn-submit-on").html(
      '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button><button type="submit" class="btn btn-danger ml-1"id="btn-cancel">Cancel</button>'
    );
    $("#select-change").html(
      '<a href="" id="select-all-check-box">Select All</a>'
    );
  }

  function validation() {
    val = 1;
    $("#errorName").html("");
    if ($("#name").val() == "") {
      $("#errorName").html("Name can't be empty.");
      val = 0;
    }
    $("#errorPassword").html("");
    if ($("#password").val() == "") {
      $("#errorPassword").html("Password can't be empty.");
      val = 0;
    }
    $("#errorMobile").html("");
    if ($("#mobilenumber").val() == "") {
      $("#errorMobile").html("Mobile can't be empty.");
      val = 0;
    } else {
      var preg = /^[6789]\d{9}$/;
      if (!$("#mobilenumber").val().match(preg)) {
        $("#errorMobile").html("Invalid Mobile No.");
        val = 0;
      }
    }
    $("#errorEmail").html("");
    if ($("#email").val() != "") {
      var preg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
      if (!$("#email").val().match(preg)) {
        $("#errorEmail").html("Invalid Email Address.");
        val = 0;
      }
    }
    return val;
  }

  $(document).on("click", "#select-all-check-box", function (e) {
    e.preventDefault();
    selectcheckbox(true);
  });
  $(document).on("click", "#deselect-all-check-box", function (e) {
    e.preventDefault();
    selectcheckbox(false);
  });

  $(document).on("change", "#subcompany", function () {
    if ($("#subcompany").val() == 0) {
      selectcheckbox(true);
    } else {
      selectcheckbox(false);
    }
  });

  function selectcheckbox(sts) {
    if (sts == true) {
      $(".checkBoxClass").prop("checked", true);
      $("#select-change").html(
        '<a href="" id="deselect-all-check-box">Deselect All</a>'
      );
    } else {
      $(".checkBoxClass").prop("checked", false);
      $("#select-change").html(
        '<a href="" id="select-all-check-box">Select All</a>'
      );
    }
  }
});
