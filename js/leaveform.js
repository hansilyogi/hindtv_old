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
      $.ajax({
        type:"POST",
        url:$("#website-url").attr("value")+ "leaveform",
        data: {
          type:"insert",
          employeename:$("#employeename").val(),
          subcompanyname:$("#subcompanyname").val(),
          companyname:$("#companyname").val(),
          leavereasonname:$("#leavereasonname").val(),
          ldate:$("#ldate").val(),
          description:$("#description").val()
        },
        success:function(data){
          console.log(data);
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
  });

});

