$(document).ready(function () {
  //display data in single employee data
  var id = $(location).attr("href").split("=")[1];
  console.log(id);
  if (id != undefined) {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: { type: "getsingledata", id: id, token : $("#website-token").attr("value") },
      success: function (data) {
        if (data.isSuccess == true) {
          data.Data.Idtype = data.Data.Idtype == "" ? "-" : data.Data.Idtype;
          data.Data.IDNumber = data.Data.IDNumber == "" ? "-" : data.Data.IDNumber;
          data.Data.Prohibition = data.Data.Prohibition == "" ? "-" : data.Data.Prohibition;
          data.Data.TerminationDate = data.Data.TerminationDate == "" ? "-" : data.Data.TerminationDate;
          data.Data.GpsTrack = data.Data.GpsTrack == true ? "YES":"NO";

          $("#displaydata").html(
            "<tr><th>Name</th><td>"+data.Data["Name"]+"</td></tr>" +
              "<tr><th>DOB</th><td>"+data.Data.DOB+"</td></tr>" +
              "<tr><th>Gender</th><td>"+data.Data.Gender+"</td></tr>" +
              "<tr><th>Mobile</th><td>"+data.Data.Mobile +"</td></tr>" +
              "<tr><th>Mail-ID</th><td>"+data.Data.MailId+"</td></tr>" +
              "<tr><th>Join Date</th><td>"+data.Data.JoinDate+"</td></tr>" +
              "<tr><th>Confirmation Date</th><td>"+data.Data.ConfirmationDate+"</td></tr>" +
              "<tr><th>Termination Date</th><td>"+data.Data.TerminationDate+"</td></tr>" +
              "<tr><th>Probation Period</th><td>"+data.Data.Prohibition+"</td></tr>" +
              "<tr><th>ID Type</th><td>"+data.Data.Idtype+"</td></tr>" +
              "<tr><th>ID Number</th><td>"+data.Data.IDNumber+"</td></tr>" +
              "<tr><th>Department</th><td>"+data.Data.Department+"</td></tr>" +
              "<tr><th>Designation</th><td>"+data.Data.Designation+"</td></tr>" +
              "<tr><th>Leave Week Name</th><td>"+data.Data.WeekName+"</td></tr>" +
              "<tr><th>Number of Leave</th><td>"+data.Data.WeekDay+"</td></tr>" +
              "<tr><th>Wifi-Name</th><td>"+data.Data.WifiName+"</td></tr>" +
              "<tr><th>GPS Track</th><td>YES</td></tr>" +
              "<tr><th>Account Number</th><td>"+data.Data.AccountName+"</td></tr>" +
              "<tr><th>Bank Name</th><td>"+data.Data.BankName+"</td></tr>" +
              "<tr><th>Account Number</th><td>"+data.Data.AccountNumber+"</td></tr>" +
              "<tr><th>IFSC Code</th><td>"+data.Data.IFSCCode+"</td></tr>" +
              "<tr><th>MICR Code</th><td>"+data.Data.MICRCode+"</td></tr>" +
              "<tr><th>UPI Code</th><td>"+data.Data.UPICode+"</td></tr>" +
              "<tr><th>Employee Code</th><td>"+data.Data.EmployeeCode+"</td></tr>" +
              "<tr><th>Profile Image</th><td>"+"<a href = "+ $("#website-url").attr("value") +"uploads/" +
               data.Data.ProfileImage + " target=_blank>View Image</a>" + "</td></tr>"+
               "<tr><th>Document Image</th><td>"+"<a href = "+ $("#website-url").attr("value") +"uploads/" +
               data.Data.CertificateImage + " target=_blank>View Image</a>" + "</td></tr>"+
              "</td></tr>"
          );
        } else {
          toastr.error(data.Message);
          //alert("No id found");
        }
      },
    });
  } else {
    alert("Invalid Id");
  }
});
  