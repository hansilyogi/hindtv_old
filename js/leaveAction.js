$(document).ready(function () {
    loaddata();
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("startdate").setAttribute('min', today);
    document.getElementById("enddate").setAttribute('min',today);

    //load data 
    function loaddata(){
      $.ajax({
        type:"POST",
        url:$("#website-url").attr("value")+ "leaveform",
        data: {
          type:"getdata",
          token: $("#website-token").attr("value"),
        },
        success:function(data){
          if(data.isSuccess ==  true){
            $("#displaydata").html("");
            for (i = 0; i < data.Data.length; i++) {   
              data.Data[i]["EmployeeId"] =
                data.Data[i]["EmployeeId"] == undefined
                  ? "-"
                  : data.Data[i]["EmployeeId"];
  
                  data.Data[i]["SubCompany"] =
                data.Data[i]["SubCompany"] == undefined
                  ? "-"
                  : data.Data[i]["SubCompany"];
  
                  data.Data[i]["Reason"] =
                data.Data[i]["Reason"] == undefined
                  ? "-"
                  : data.Data[i]["Reason"];
  
                  data.Data[i]["StartDate"] =
                  data.Data[i]["StartDate"] == undefined
                    ? "-"
                    : convertdateformate(data.Data[i]["StartDate"]);
  
                  data.Data[i]["EndDate"] =
                  data.Data[i]["EndDate"] == undefined
                    ? "-"
                    : convertdateformate(data.Data[i]["EndDate"]);
  
                    data.Data[i]["LeaveStatus"] =
                    data.Data[i]["LeaveStatus"] == undefined
                      ? "Pending"
                      : data.Data[i]["LeaveStatus"];
              $("#displaydata").append(
                "<tr><td>" +
                  data.Data[i]["EmployeeId"].Name +
                  "</td><td>" +
                  data.Data[i].SubCompany.Name +
                  "</td><td>" +
                  convertdateformate(data.Data[i]["StartDate"]) +
                  "</td><td>" +
                  convertdateformate(data.Data[i]["EndDate"]) +
                  "</td><td>" +
                  data.Data[i]["LeavePeriod"]+
                  "</td><td>"+
                  data.Data[i].Reason.MasterName+
                  "</td><td>"+
                  data.Data[i]["LeaveType"]+
                  "</td><td>"+
                  data.Data[i]["Description"]+
                  "</td><td>"+
                  data.Data[i]["LeaveStatus"]+
                  "</td><td>"+
                  '<a id="edit-data" href="leaveAction.php?id=' +
                  data.Data[i]["_id"] +
                  '"><i class="fas fa-edit" aria-hidden="true"></i></a>' +
                  "</td></tr>"
              );
           }
          }
        },
      });
    }
    
    //change value on subcompany master's value selection
      
  
    //change value on company master's value selection
    
    //Insert value in data base
    $(document).on("click","#btn-submit",function(e){
        e.preventDefault();        
          $.ajax({
          type:"POST",
          url:$("#website-url").attr("value")+ "leaveform",
          data: {
            type:"update",
            id:UPDATEID,
            status:$("#leavestatus").val(),
            token: $("#website-token").attr("value")
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
            loaddata();
          },
          complete: function () {
            $("#btn-submit-on").html(
              '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>' +
                '<button type="submit" class="btn btn-danger ml-1" id="btn-cancel">Cancel</button>'
            );
          },
        });
    });
    var startdate,enddate;
//edit button function for update value
    $(document).on("click", "#edit-data", function (e) {
        e.preventDefault();
        var id = $(this).attr("href").split("=")[1];
        $.ajax({
          type: "POST",
          url: $("#website-url").attr("value") + "leaveform",
          data: { type: "getsingledata", id: id,token: $("#website-token").attr("value") },
          dataType: "json",
          cache: false,
          success: function (data) {
            if (data.isSuccess == true) {
              UPDATEID = id;
              $("#companyname").val(data.Data[0].Company.Name);
              $("#subcompanyname").val(data.Data[0].SubCompany.Name);
              $("#employeename").val(data.Data[0].EmployeeId.Name);
              $("#leavereasonname").val(data.Data[0].Reason.MasterName);
              $("#startdate").val(reversedateFormate(data.Data[0].StartDate));
              $("#enddate").val(reversedateFormate(data.Data[0].EndDate));
              $("#leaveperiod").val(data.Data[0].LeavePeriod);
              $("#leavetype").val(data.Data[0].LeaveType);
              $("#description").val(data.Data[0].Description);
              
              window.scrollTo(0, 0);
              $("#btn-submit-on").html(
                "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
                  "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
              );
            }
          },
        });
      });

//check validation
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
      else if(new Date(stdate).getTime() > new Date(eddate).getTime()){
        return false;
      }
      return true;
    }
// convert date into 
    function convertdateformate(date){
        if(date.includes('T')){
          date = date.split('T')[0];
          date = date.split('-');
          date = date[2]+'/'+date[1]+'/'+date[0];
        }
        return date;
    }
//convert into dd/mm/yyyy formate
    function reversedateFormate(date){
        date = date.split('T')[0];
        date = date.split("-");
        date = date[0]+'-'+date[1]+'-'+date[2];
        return date;
    }
  });
  
  