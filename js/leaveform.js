$(document).ready(function () {
  var SUBCOMPANY = $("#subcompanyname").val();
  var COMPANY ; 
  loadcompanyname();
  loadsubcompany();
  loademployee();
  loadleavereason();
  //loadsubcompany(): fetch value in subcompany master
  //loadcompany(): fetch value in subcompany master
  //loademployee(): fetch value in employeename master
  //loadleavereason(): fetch value in leavereason master

  var today = new Date().toISOString().split('T')[0];
  document.getElementById("startdate").setAttribute('min', today);
  document.getElementById("enddate").setAttribute('min',today);

  function loadsubcompany() {
    
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
        loademployee();
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
      },
    });
  }
  function loademployee(){
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: { type: "getsubcompanyemployee", 
      SubCompany:  SUBCOMPANY
      
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
  function loadleavereason(){
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "leavereason",
      data: { type: "getalldata", token: $("#website-token").attr("value") },
      success: function (data) {
        if (data.isSuccess == true) {
          $("#leavereasonname").html("");
          for (i = 0; i < data.Data.length; i++) {
            if(data.Data[i].Status == true){
              $("#leavereasonname").append(
                "<option value=" +
                  data.Data[i]._id +
                  ">" +
                  data.Data[i].MasterName +
                  "</option>"
              );
            }
            
          }
        }
      },
      error:function(err){
        console.log(err);
      }
    });
  }
  
  //change value on subcompany master's value selection
  $(document).on("change", "#subcompanyname", function () {
    SUBCOMPANY = $("#subcompanyname").val();
    loademployee();
  });

  //change value on company master's value selection
  $(document).on("change", "#companyname", function () {
    COMPANY = $("#companyname").val();
    loadsubcompany();
  });

  //Insert value in data base
  $(document).on("click","#btn-submit",function(e){
      e.preventDefault();
      var val = validation();
      if(val == false){
        toastr.error("Please! Select The Date");
      }
      else{
        $.ajax({
        type:"POST",
        url:$("#website-url").attr("value")+ "leaveform",
        data: {
          type:"insert",
          EmployeeId:$("#employeename").val(),
          SubCompanyId:$("#subcompanyname").val(),
          CompanyId:$("#companyname").val(),
          ReasonId:$("#leavereasonname").val(),
          startdate:$("#startdate").val(),
          enddate:$("#enddate").val(),
          leavetype:$("#leavetype").val(),
          leaveperiod:$("#leaveperiod").val(),
          description:$("#description").val()
        },
        beforeSend: function () {
          $("#btn-submit").html(
            '<button class="btn btn-primary float-right" type="button">\
                                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                  Loading...\
            </button>'
          );
        },
        success:function(data){
          if(data.isSuccess ==  true){
            $("form")[0].reset();
            $("#staticmessage")
            .removeClass("text-success text-danger")
            .addClass("text-success font-weight-bold");
          $("#staticmessage").html(data["Message"]).fadeOut(10000);
          $.when($("#staticmessage").fadeOut()).then(function () {
            $("#staticmessage").html("");
            $("#staticmessage").removeAttr("style");
            $("#staticmessage");
          });
          }
        },
        complete: function () {
          $("#btn-submit-on").html(
            '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>' +
              '<button type="submit" class="btn btn-danger ml-1" id="btn-cancel">Cancel</button>'
          );
        },
      });
    }
  });
  var startdate,enddate;
  $(document).on("change","#startdate",function(e){
    startdate = $(this).val();
    if(startdate!="" && enddate != ""){
      leaveperiodCount(startdate,enddate);
    }
  });

  $(document).on("change","#enddate",function(e){
    enddate = $(this).val();
    if(startdate!="" && enddate != ""){
      leaveperiodCount(startdate,enddate);
    }
  });

  function leaveperiodCount(startdate,enddate){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(startdate);
    const secondDate = new Date(enddate);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))+1;
    $("#leaveperiod").val(diffDays);
  }

  function validation(){
    var stdate = document.getElementById("startdate").value;
    var eddate = document.getElementById("enddate").value;
    var today = new Date();
    if (Date(stdate) < today || Date(eddate) < today) {
      return false;
    }
    else if($("#startdate").val() === "" &&  $("#enddate").val() === ""){
      return false;
    }
    else if(new Date(stdate).getTime() >= new Date(eddate).getTime()){
      return false;
    }
    return true;
  }
 


});

