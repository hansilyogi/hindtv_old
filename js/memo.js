$(document).ready(function () {
  var SUBCOMPANY;
  var EMPLOYEE;
  var d = new Date();
  $("#startdate").val(createdate());
  $("#enddate").val(createdate());

  loadcompany();

  function createdate() {
    var month = d.getMonth() + 1;
    var day = d.getDate();
    date =
      d.getFullYear() +
      "-" +
      (month < 10 ? "0" : "") +
      month +
      "-" +
      (day < 10 ? "0" : "") +
      day;
    return date;
  }

  function loadcompany() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "company",
      data: { type: "getdata", token: $("#website-token").attr("value") },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#company").html("");
          COMPANY = data.Data[0]._id;
          subcompany();
        }
      },
    });
  }

  function subcompany() {
    var id = COMPANY;
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompany",
      data: {
        type: "getsinglecompany",
        CompanyId: id,
        token: $("#website-token").attr("value"),
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#subcompany").html("");
          SUBCOMPANY = data.Data[0]._id;
          for (i = 0; i < data.Data.length; i++) {
            $("#subcompany").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                "</option>"
            );
          }
          employee();
        }
      },
    });
  }

  function employee() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: {
        type: "getsubcompanyemployee",
        SubCompany: SUBCOMPANY,
        token: $("#website-token").attr("value"),
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#employee").html("");
          if (data.Data.length > 0) {
            EMPLOYEE = data.Data[0]._id;
            for (i = 0; i < data.Data.length; i++) {
              $("#employee").append(
                "<option value=" +
                  data.Data[i]._id +
                  ">" +
                  data.Data[i].Name +
                  "</option>"
              );
            }
          }
        }
      },
    });
  }

  $(document).on("change", "#company", function () {
    COMPANY = $("#company").val();
    subcompany();
  });
  $(document).on("change", "#subcompany", function () {
    SUBCOMPANY = $("#subcompany").val();
    employee();
  });

  $(document).on("click", "#btn-search-date", function (e) {
    e.preventDefault();
    val = validation();
    if (val == 1) {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "memo",
        data: {
          type: "datememo",
          startdate:
            $("#startdate").val().split("-")[2] +
            "/" +
            $("#startdate").val().split("-")[1] +
            "/" +
            $("#startdate").val().split("-")[0],
          enddate:
            $("#enddate").val().split("-")[2] +
            "/" +
            $("#enddate").val().split("-")[1] +
            "/" +
            $("#enddate").val().split("-")[0],
          employee: $("#employee").val(),
          token: $("#website-token").attr("value"),
        },
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#displaydata").html(
            "<tr><td colspan=6 class='text-center font-weight-bold'>Loading...</td></tr>"
          );
        },
        success: function (data) {
          $("#displaydata").html("");
          if (data.isSuccess == true) {
            if (data.Data.length > 0) {
              for (i = 0; i < data.Data.length; i++) {
                k = i + 1;
                var mess =
                  data.Data[i].Type == "in" ? "was late." : "went early.";
                $("#displaydata").append(
                  "<tr><td>" +
                    k +
                    "</td><td>" +
                    data.Data[i].Eid.Name +
                    "</td><td>" +
                    data.Data[i].Date +
                    "</td><td>" +
                    Math.abs(data.Data[i].Hour) +
                    " hr " +
                    Math.abs(data.Data[i].Minutes) +
                    " mn " +
                    Math.abs(data.Data[i].Seconds) +
                    " sec " +
                    mess +
                    "</td><td>" +
                    data.Data[i].Type +
                    "</td><td>" +
                    "<a target='_blank' href='memodetails.php?id=" +
                    data.Data[i]._id +
                    "'>View Here</a>" +
                    "</td></tr>"
                );
              }
            }
          } else {
            $("#displaydata").html(
              "<tr><td colspan=6 class='text-center font-weight-bold'>" +
                data.Message +
                "</td></tr>"
            );
          }
        },
      });
    }
  });

  function validation() {
    val = 1;
    if ($("#startdate").val() == "" || $("#enddate").val() == "") {
      toastr.error("Either Start Date or End Date is empty.");
      val = 0;
    }
    return val;
  }
});
