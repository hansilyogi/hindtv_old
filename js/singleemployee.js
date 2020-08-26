$(document).ready(function () {
  //display data in single employee data
  var id = $(location).attr("href").split("=")[1];
  if (id != undefined) {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: { type: "getsingledata", id: id, token : $("#website-token").attr("value") },
      success: function (data) {
        if (data.isSuccess == true) {
          $("#displaydata").html(
            "<tr><td>"+data.Data["Name"]+"</td>" +
              "<td>"+data.Data.DOB+"</td>" +
              "<td>"+data.Data.Gender+"</td>" +
              "<td>"+data.Data.Mobile +"</td>" +
              "<td>"+data.Data.MailId+"</td>" +
              "<td>"+data.Data.ConfirmationDate+"</td>" +
              "<td>"+data.Data.JoinDate+"</td>" +
              "<td>"+data.Data.TerminationDate+"</td>" +
              "<td>"+data.Data.Prohibition+"</td>" +
              "<td>"+data.Data.WifiName+"</td>" +
              "<a href = "+ $("#website-url").attr("value") +"uploads/" +
              "<td>"+ data.Data.ProfileImage + " target=_blank>View Image</a>" + "</td>"+
              "</td></tr>"
          );
        } else {
          alert("No id found");
        }
      },
    });
  } else {
    alert("Invalid Id");
  }
});
  