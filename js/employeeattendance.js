$(document).ready(function () {
  loadcompany();

  var now = new Date();
  var prevMonthLastDate = new Date(now.getFullYear(), now.getMonth(), 0);
  var prevMonthFirstDate = new Date(
    now.getFullYear() - (now.getMonth() > 0 ? 0 : 1),
    (now.getMonth() - 1 + 12) % 12,
    1
  );

  var formatDateComponent = function (dateComponent) {
    return (dateComponent < 10 ? "0" : "") + dateComponent;
  };

  var formatDate = function (date) {
    return (
      date.getFullYear() +
      "-" +
      formatDateComponent(date.getMonth() + 1) +
      "-" +
      formatDateComponent(date.getDate())
    );
  };

  $("#startdate").val(formatDate(prevMonthFirstDate));
  $("#enddate").val(formatDate(prevMonthLastDate));

  function loadcompany() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "company",
      data: { type: "getdata" },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
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
        }
      },
    });
  }

  $(document).on("change", "#company", function () {
    COMPANY = $("#company").val();
    subcompany();
  });

  $(document).on("click", "#btn-apply-filter", function () {
    var id = $("#subcompany").val();
    var name = $("#subcompany").find(":selected").text();
    var startdate =
      $("#startdate").val().split("-")[2] +
      "/" +
      $("#startdate").val().split("-")[1] +
      "/" +
      $("#startdate").val().split("-")[0];
    var enddate =
      $("#enddate").val().split("-")[2] +
      "/" +
      $("#enddate").val().split("-")[1] +
      "/" +
      $("#enddate").val().split("-")[0];
    name = name.split(" ").join("-");
    console.log(name);
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "generatereport",
      data: {
        type: "attendancereport",
        company: id,
        name: name,
        startdate: startdate,
        enddate: enddate,
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
          var link = document.createElement("a");
          document.body.appendChild(link);
          link.href = $("#website-url").attr("value") + "reports/" + data.Data;
          link.target = "_blank";
          link.click();
        } else {
          toastr.error(data.Message);
        }
      },
      complete: function () {
        $("#btn-submit-on").html(
          '<button type="submit" class="btn btn-success"id="btn-apply-filter">Download Report</button>'
        );
      },
    });
  });
});
