$(document).ready(function () {
  var CONDITIONCHECK;

  $.ajax({
    type: "POST",
    url: $("#website-url").attr("value") + "memo",
    data: {
      type: "getsinglememodetails",
      id: $(location).attr("href").split("=")[1],
      token: $("#website-token").attr("value"),
    },
    dataType: "json",
    cache: false,
    success: function (data) {
      if (data.isSuccess == true) {
        CONDITIONCHECK = data.Data[0].Status;
        sts =
          data.Data[0].Type == "in" ? "He/She was late " : "He/She went early ";
        if (
          data.Data[0].ReasonSend == true &&
          data.Data[0].Status == "Waiting For Approval"
        ) {
          $("#displaydata").html(
            "<tr><td>Name:</td><td>" +
              data.Data[0].Eid.Name +
              "</td></tr>" +
              "<tr><td>Memo Date:</td><td>" +
              data.Data[0].Date +
              "</td></tr>" +
              "<tr><td>Request Date & Time:</td><td>" +
              data.Data[0].DateTime +
              "</td></tr>" +
              "<tr><td>Time</td><td>" +
              sts +
              Math.abs(data.Data[0].Hour) +
              " hr " +
              Math.abs(data.Data[0].Minutes) +
              " min " +
              "</td></tr>" +
              "<tr><td>Reason:</td><td>" +
              data.Data[0].Reason +
              "</td></tr>" +
              "<tr><td>Approval:</td><td id='triggeroncomplete'>" +
              "<button type='button' class='btn btn-block btn-success col-md-3' id='approval' data-id='Approved'>Approve</button>" +
              "<button type='button' class='btn btn-block btn-danger col-md-3' id='reject' data-id='Rejected'>Reject</button>" +
              "</td></tr>"
          );
        } else {
          if (data.Data[0].Status == "Approved") {
            $("#displaydata").html(
              "<tr><td>Name:</td><td>" +
                data.Data[0].Eid.Name +
                "</td></tr>" +
                "<tr><td>Memo Date:</td><td>" +
                data.Data[0].Date +
                "</td></tr>" +
                "<tr><td>Time:</td><td>" +
                sts +
                Math.abs(data.Data[0].Hour) +
                " hr " +
                Math.abs(data.Data[0].Minutes) +
                " min " +
                "</td></tr>" +
                "<tr><td>Reason:</td><td>" +
                data.Data[0].Reason +
                "</td></tr>" +
                "<tr><td>Approval:</td><td id='triggeroncomplete'>" +
                "<p>Approved</p>" +
                "</td></tr>"
            );
          } else if (data.Data[0].Status == "Rejected") {
            $("#displaydata").html(
              "<tr><td>Name:</td><td>" +
                data.Data[0].Eid.Name +
                "</td></tr>" +
                "<tr><td>Memo Date:</td><td>" +
                data.Data[0].Date +
                "</td></tr>" +
                "<tr><td>Time:</td><td>" +
                sts +
                Math.abs(data.Data[0].Hour) +
                " hr " +
                Math.abs(data.Data[0].Minutes) +
                " min " +
                "</td></tr>" +
                "<tr><td>Reason:</td><td>" +
                data.Data[0].Reason +
                "</td></tr>" +
                "<tr><td>Approval:</td><td id='triggeroncomplete'>" +
                "<p>Rejected</p>" +
                "</td></tr>"
            );
          } else {
            $("#displaydata").html(
              "<tr><td>Name:</td><td>" +
                data.Data[0].Eid.Name +
                "</td></tr>" +
                "<tr><td>Memo Date:</td><td>" +
                data.Data[0].Date +
                "</td></tr>" +
                "<tr><td>Time:</td><td>" +
                sts +
                Math.abs(data.Data[0].Hour) +
                " hr " +
                Math.abs(data.Data[0].Minutes) +
                " min " +
                "</td></tr>" +
                "<tr><td>Reason:</td><td>Reason Not Provided.</td></tr>"
            );
          }
        }
      } else {
        toastr.error(data.Message);
      }
    },
  });

  $(document).on("click", "#approval", function (e) {
    if (CONDITIONCHECK == "Waiting For Approval") {
      approvalfunction($(this).attr("data-id"));
    }
  });

  $(document).on("click", "#reject", function (e) {
    if (CONDITIONCHECK == "Waiting For Approval") {
      approvalfunction($(this).attr("data-id"));
    }
  });

  function approvalfunction(status) {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "memo",
      data: {
        type: "verifymemo",
        id: $(location).attr("href").split("=")[1],
        status: status,
        token: $("#website-token").attr("value"),
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        console.log(data);
        if (data.isSuccess == true) {
          $("#triggeroncomplete").html("<p>" + status + "</p>");
        } else {
          alert("Something went wrong");
        }
      },
    });
  }
});
