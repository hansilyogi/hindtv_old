$(document).ready(function() {
var SUBCOMPANY;
loaddata();
loadcompanyname();

function loaddata() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: { type: "getdata", token: $("#website-token").attr("value") },
      dataType: "json",
      cache: false,
      beforeSend: function () {
        $("#displaydata").html(
          '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
        );
      },
      success: function (data) {
        if (data.isSuccess == true) {
          $("#displaydata").html("");
          for (i = 0; i < data.Data.length; i++) {
            data.Data[i]["MailId"] =
              data.Data[i]["MailId"] == undefined
                ? "-"
                : data.Data[i]["MailId"];
            $("#displaydata").append(
              "<tr><td>" +
                data.Data[i]["Name"] +
                "</td><td>" +
                data.Data[i].SubCompany.Name +
                "</td><td>" +
                data.Data[i]["MailId"] +
                "</td><td>" +
                data.Data[i]["Mobile"] +
                "</td><td>" +
                '<a id="edit-data" href="employee.php?id=' +
                data.Data[i]["_id"] +
                '"><i class="fas fa-edit" aria-hidden="true"></i></a>' +
                "</td><td>" +
                "<a href=singleemployee.php?id=" +
                data.Data[i]["_id"] +
                ">View More</a></td></tr>"
            );
          }
        } else {
          $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">' +
              data.Message +
              "</td></tr></center>"
          );
        }
      },
    });
}

  $('#txt_searchemployee').keyup(function(){
    var search = $(this).val();
    $('table tbody tr').hide();
    var len = $('table tbody tr:not(.notfound) td:contains("'+search.charAt(0).toUpperCase()+'")').length;
    if(len > 0){
      $('table tbody tr:not(.notfound) td:contains("'+search.charAt(0).toUpperCase() + search.slice(1)+'")').each(function(){
        $(this).closest('tr').show();
      });
    }else{
      $('.notfound').show();
    }
  });

  function loadsubcompanyname() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompany",
      data: { type: "getdata", 
      token: $("#website-token").attr("value"),
       },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#subcompanyname").html("");
          $("#subcompanyname").append(
            "<option value=0>All</option>"
          );
          for (i = 0; i < data.Data.length; i++) {
            $("#subcompanyname").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                "</option>"
            );
          }
        }
      },
      complete:function(){
        SUBCOMPANY = $("#subcompanyname").val();
        loademployeename();
      }
    });
}

function loadcompanyname() {
  $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "company",
      data: { type: "getdata", token: $("#website-token").attr("value") },
      dataType: "json",
      cache: false,
      success: function (data) {
      if (data.isSuccess == true) {
          $("#companyname").html("");
          for (i = 0; i < data.Data.length; i++) {
          $("#companyname").append(
              "<option value=" +
              data.Data[i]._id +
              ">" +
              data.Data[i].Name +
              "</option>"
          );
          }
      }
      },complete:function(){
        loadsubcompanyname();
      }
  });
}

function loademployeename(){
    $.ajax({
    type: "POST",
    url: $("#website-url").attr("value") + "employee",
    data: { type: "getsubcompanyemployee", 
    SubCompany:  SUBCOMPANY,
    token: $("#website-token").attr("value"),
    },
    dataType: "json",
    cache: false,
    success: function (data) {
      if (data.isSuccess == true) {
          $("#employeename").html("");
          for (i = 0; i < data.Data.length; i++) {
          $("#employeename").append(
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

$(document).on("change", "#subcompanyname", function () {
  SUBCOMPANY = $("#subcompanyname").val();
  loademployeename();
});

//change value on company master's value selection
$(document).on("change", "#companyname", function () {
  COMPANY = $("#companyname").val();
  loadsubcompanyname();
});

//filter buttom API.Response Selected Data By Subcompany name
$(document).on("click", "#btn-submit", function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: $("#website-url").attr("value") + "employee",
    data: { type: "getfilterdata", 
    token: $("#website-token").attr("value"),
    subcompanyid:$("#subcompanyname").val(),
     },
    dataType: "json",
    cache: false,
    success: function (data) {        
        if (data.isSuccess == true) {
          toastr.success(data.Message);
          $("#displaydata").html("");
          for (i = 0; i < data.Data.length; i++) {
            data.Data[i]["MailId"] =
              data.Data[i]["MailId"] == undefined
                ? "-"
                : data.Data[i]["MailId"];
            $("#displaydata").append(
              "<tr><td>" +
                data.Data[i]["Name"] +
                "</td><td>" +
                data.Data[i].SubCompany.Name +
                "</td><td>" +
                data.Data[i]["MailId"] +
                "</td><td>" +
                data.Data[i]["Mobile"] +
                "</td><td>" +
                '<a id="edit-data" href="employee.php?id=' +
                data.Data[i]["_id"] +
                '"><i class="fas fa-edit" aria-hidden="true"></i></a>' +
                "</td><td>" +
                "<a href=singleemployee.php?id=" +
                data.Data[i]["_id"] +
                ">View More</a></td></tr>"
            );
          }
        } else {
          $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">' +
              data.Message +
              "</td></tr></center>"
          );
        }
    }
  });
    
});

});