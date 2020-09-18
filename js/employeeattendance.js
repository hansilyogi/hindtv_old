$(document).ready(function () {
  loadcompany();

  //fetching year in dropdown 
  var start = 2020;
  var end = new Date().getFullYear();
  var options = "";
  for(var year = start ; year <=end; year++){
    options += "<option>"+ year +"</option>";
  }
  document.getElementById("year").innerHTML = options;

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

  $("#months").val();
  $("#year").val();

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
  //companyname dropdown value change event 
  $(document).on("change", "#company", function () {
    COMPANY = $("#company").val();
    subcompany();
  });

  $(document).on("click", "#btn-apply-filter", function () {
    var currentyear = new Date().getFullYear();
    var currentmonth = new Date().getMonth()+1;
    var months = $("#months").val();
    var year = $("#year").val();
    var id = $("#subcompany").val();
    var name = $("#subcompany").find(":selected").text();
    var monthname = $("#months").find(":selected").text();
    name = name.split(" ").join("-");
    console.log(id);
    console.log($("#website-token").attr("value"));
    console.log(currentyear, months,currentmonth);
    if(parseInt(year) >= parseInt(currentyear) &&  parseInt(months) > parseInt(currentmonth)){
      toastr.error("Please Check the Selected Month and Year");
    }
    else{
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "generatereport",
        data: {
          type: "attendancereport",
          company: id,
          name: name,
          year:year,
          month:months,
          monthname:monthname,
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
          console.log(data);
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
    }
    
    
  });
});
