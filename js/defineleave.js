$(document).ready(function () {
    loadcompany();
    loadsubcompany();
    loaddata();
    var UPDATEID;

    function loadcompany(){
    $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "subcompany",
        data: { type: "getcompany" },
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

    function loadsubcompany(){
    $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "subcompany",
        data: { type: "getdata", token: $("#website-token").attr("value") },
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
        });
    }

    function loaddata() {
        var currentdate = new Date();
        var year = currentdate.getFullYear();
        $.ajax({
          type: "POST",
          url: $("#website-url").attr("value") + "defineleave",
          data: { type: "getdata" ,year:year, token: $("#website-token").attr("value") },
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
                data.Data[i]["StartDate"] =
                  data.Data[i]["StartDate"] == undefined
                    ? "-"
                    : data.Data[i]["StartDate"];
                data.Data[i]["EndDate"] =
                  data.Data[i]["EndDate"] == undefined
                    ? "-"
                    : data.Data[i]["EndDate"];
                $("#displaydata").append(
                  "<tr><td>" +
                  convertdateView(data.Data[i]["StartDate"]) +
                    "</td><td>" +
                    convertdateView(data.Data[i]["EndDate"]) +
                    "</td><td>" +
                    data.Data[i]["LeaveNumber"] +
                    "</td><td>"+
                    '<a id="edit-data" href="defineleave.php?id=' +
                    data.Data[i]["_id"] +
                    '"><i class="fas fa-edit" aria-hidden="true"></i></a>' +
                    "</td></tr>"
                );
              }
            } else {
              $("#displaydata").html(
                '<tr><td colspan="5" class="text-center font-weight-bold">No Records Found.</td></tr></center>'
              );
            }
          },
        });
      }


    function convertdateView(date){
        date = date.split('T');
        return date[0];
    }

    $(document).on("click", "#btn-submit", function (e) {
        var currentdate = new Date();
        var year = currentdate.getFullYear();
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "defineleave",
            data: { 
                type: "insert", 
                token: $("#website-token").attr("value"),
                startdate:$("#startdate").val(),
                enddate:$("#enddate").val(),
                year:year,
                leave:$("#leave").val() 
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
                $("form")[0].reset();
                if (data.isSuccess == true) {
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
                loaddata();
                $("#btn-submit-on").html(
                  '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>'
                );
              },
            });
            
    });
    
    $(document).on("click", "#edit-data", function (e) {
        e.preventDefault();
        var id = $(this).attr("href").split("=")[1];
        UPDATEID = id;
        $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "defineleave",
        data: { type: "getsingledata", id: id,token:id },
        dataType: "json",
        cache: false,
        success: function (data) {
            console.log(data);
            if (data.isSuccess == true) {
            UPDATEID = id;
            $("#startdate").val(convertdateView(data.Data.StartDate));
            $("#enddate").val(convertdateView(data.Data.EndDate));
            $("#leave").val(data.Data.LeaveNumber);
            window.scrollTo(0, 0);
            $("#btn-submit-on").html(
                "<button type='submit' class='btn btn-success' id='btn-update'>Update</button>" +
                "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
            );
            }
        },
        });
    });

    $(document).on("click", "#btn-update", function (e) {
        var currentdate = new Date();
        var year = currentdate.getFullYear();
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "defineleave",
            data: { 
                type: "update", 
                id:UPDATEID,
                token: $("#website-token").attr("value"),
                startdate:$("#startdate").val(),
                enddate:$("#enddate").val(),
                year:year,
                leave:$("#leave").val() 
            },
            dataType: "json",
            cache: false,
            beforeSend: function () {
                $("#btn-update-on").html(
                  '<button class="btn btn-success" type="button">\
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                        Loading...\
                                        </button>'
                );
            },
            success: function (data) {
                $("form")[0].reset();
                if (data.isSuccess == true) {
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
                loaddata();
                $("#btn-submit-on").html(
                  '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>'
                );
              },
            });
            
    });
});