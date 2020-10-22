$(document).ready(function(){
    loaddata();
    var UPDATEID;
    function loaddata(){
        $.ajax({
          type:"POST",
          url:$("#website-url").attr("value")+ "memo",
          data: {
            type:"getalldata",
            token: $("#website-token").attr("value"),
          },dataType: "json",
          cache: false,
          success:function(data){
            console.log(data);
            if(data.isSuccess ==  true){
              $("#displaydata").html("");
              for (i = data.Data.length - 1; i > 0; i--) { 
                if(data.Data[i]["Eid"]==null || data.Data[i]["Eid"] == "-" || data.Data[i]["Eid"] == undefined ){
                  i--;
                } 
                else{
                    data.Data[i]["Eid"] =
                    data.Data[i]["Eid"] == undefined
                      ? "-"
                      : data.Data[i]["Eid"];
    
                    data.Data[i]["Status"] =
                      data.Data[i]["Status"] == "false"
                      ? "-"
                      : data.Data[i]["Status"];
    
                      data.Data[i]["Date"] =
                      data.Data[i]["Date"] == undefined
                        ? "-"
                        : convertdateformate(data.Data[i]["Date"]);
      
                      data.Data[i]["Reason"] = 
                        data.Data[i]["Reason"] == undefined
                        ? "-"
                        : data.Data[i]["Reason"];

                    $("#displaydata").append(
                      "<tr><td>" +
                        data.Data[i]["Eid"].Name +
                        "</td><td>" +
                        data.Data[i]["Eid"].SubCompany.Name +
                        "</td><td>" +
                        convertdateformate(data.Data[i]["Date"]) +
                        "</td><td>" +
                        data.Data[i]["Reason"]+
                        "</td><td>"+
                        data.Data[i]["Type"]+
                        "</td><td>"+
                        data.Data[i]["Status"]+
                        "</td><td>"+
                        '<a id="edit-data" href="memostatus.php?id=' +
                        data.Data[i]["_id"] +
                        '"><i class="fas fa-edit" aria-hidden="true"></i></a>' +
                        "</td></tr>"
                    );
                    }
                }
            }
          },
        });
    }

    $(document).on("click", "#edit-data", function (e) {
      e.preventDefault();
      var id = $(this).attr("href").split("=")[1];
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "memo",
        data: { type: "getmemodata", id: id,token: $("#website-token").attr("value") },
        dataType: "json",
        cache: false,
        success: function (data) {
          if (data.isSuccess == true) {
            UPDATEID = id;
            $("#subcompanyname").val(data.Data[0]["Eid"].SubCompany.Name);
            $("#employeename").val(data.Data[0]["Eid"].Name);
            $("#leavetype").val( data.Data[0].Type);
            $("#startdate").val(reversedateFormate(data.Data[0].Date));
            $("#leavereasonname").val(data.Data[0].Reason);
            //$("#description").val(data.Data[0].Type);
            window.scrollTo(0, 0);
            $("#btn-submit-on").html(
              "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
                "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
            );
          }
        },
      });
    });

    $(document).on("click", "#btn-submit", function(e){
      e.preventDefault();
      $.ajax({
        type:"POST",
        url:$("#website-url").attr("value")+ "memo",
        data: {
          type:"updatedata",
          token: $("#website-token").attr("value"),
          id:UPDATEID,
          status:$("#leavestatus").val()
        },dataType: "json",
        cache: false,
        success:function(data){
          if(data.isSuccess == true){
            $("#staticmessage")
                .removeClass("text-success text-danger")
                .addClass("text-success font-weight-bold");
              $("#staticmessage").html(data["Message"]).fadeOut(10000);
              $.when($("#staticmessage").fadeOut()).then(function () {
                $("#staticmessage").html("");
                $("#staticmessage").removeAttr("style");
                $("#staticmessage");
              });
              $("form")[0].reset();
          }
        },
        complete:function(){
          loaddata();
        }
       
      });
    })
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
    if(date.includes("T")){
      date = date.split('T')[0];
      date = date.split("-");
      date = date[0]+'-'+date[1]+'-'+date[2];
    } else if(date.includes("-")) {
      date = date.split("-");
      date = date[2]+"/"+date[1]+"/"+date[0];
    } else if(date.includes("/")) {
      date = date.split("/");
      date = date[2]+"-"+date[1]+"-"+date[0];
    }
    return date;
  }

  function displaydate(date){
    date = date.split("-");
      date = date[0]+'-'+date[1]+'-'+date[2];
      return date;
  }

});