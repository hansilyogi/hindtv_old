$(document).ready(function () {
  loaddata();
  loadcompany();

  var UPDATEID;

  function loadcompany() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompany",
      data: { type: "getcompany" },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#subcompany").html("");
          for (i = 0; i < data.Data.length; i++) {
            $("#company").append(
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


  function convertdatetostring(date) {
    if (date != "" && date != undefined) {
      date = date.substr(0,10);
      date = date[5]+date[6]+"/"+date[8]+date[9]+"/"+date[2]+date[3]+date[0]+date[1];
      //date = date[2] + "/" + date[1] + "/" + date[0];
    } else {
      date = "";
    }
    return date;
  }

  function loaddata() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompany",
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
            data.Data[i]["ContactPersonName"] =
              data.Data[i]["ContactPersonName"] == undefined
                ? "-"
                : data.Data[i]["ContactPersonName"];
            data.Data[i]["ContactPersonNumber"] =
              data.Data[i]["ContactPersonNumber"] == undefined
                ? "-"
                : data.Data[i]["ContactPersonNumber"];
          
            $("#displaydata").append(
              "<tr><td>" +
                data.Data[i]["Name"] +
                "</td><td>" +
                data.Data[i]["Address"] +
                "</td><td>" +
                data.Data[i]["ContactPersonName"] +
                "</td><td>" +
                data.Data[i]["ContactPersonNumber"] +
                "</td><td>" +
                data.Data[i]["SalaryDate"]+
                "</td><td>"+
                data.Data[i]["MemoNumber"]+
                "</td><td>"+
                '<a id="edit-data" href="subcompany.php?id=' +
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

  $(document).on("click", "#edit-data", function (e) {
    e.preventDefault();
    var id = $(this).attr("href").split("=")[1];
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompany",
      data: { type: "getsubcompanydetail", id: id },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          UPDATEID = id;
          $("#companyname").val(data.Data[0].Name);
          $("#companyaddress").val(data.Data[0].Address);
          $("#ccpn").val(data.Data[0].ContactPersonName);
          $("#cpn").val(data.Data[0].ContactPersonNumber);
          $("#email").val(data.Data[0].Email);
          $("#gstin").val(data.Data[0].GSTIN);
          $("#latlong").val(data.Data[0].Link);
          $("#company").val(data.Data[0].CompanyId);
          $("#buffertime").val(data.Data[0].BufferTime);
          $("#wifiname").val(data.Data[0].wifiName);
          $("#memonumber").val(data.Data[0].MemoNumber);
          $("#salarydate").val(data.Data[0].SalaryDate);

          window.scrollTo(0, 0);
          $("#btn-submit-on").html(
            "<button type='submit' class='btn btn-success' id='btn-update'>Update</button>" +
              "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
          );
        }
      },
    });
  });

  $(document).on("click", "#btn-cancel", function (e) {
    $("#errorName").html("");
    $("form")[0].reset();
    $("#btn-submit-on").html(
      "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
        "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
    );
  });

  $(document).on("click", "#btn-update", function (e) {
    e.preventDefault();
    val1 = 1;
    if (UPDATEID !== undefined) {
      if ($("#latlong").val() != "") {
        if ($("#latlong").val().split("@")) {
          var lat = $("#latlong").val().split("@")[1].split(",")[0];
          var long = $("#latlong").val().split("@")[1].split(",")[1];
        } else {
          $("#errorLatLong").html("Invalid Link");
          val1 = 0;
        }
      }
      val = validation();
      if (val == 1 && val1 == 1) {
        $.ajax({
          type: "POST",
          url: $("#website-url").attr("value") + "subcompany",
          data: {
            type: "update",
            id: UPDATEID,
            name: $("#companyname").val(),
            address: $("#companyaddress").val(),
            contactpersonname: $("#ccpn").val(),
            contactpersonnumber: $("#cpn").val(),
            Email: $("#email").val(),
            GSTIN: $("#gstin").val(),
            companyid: $("#company").val(),
            lat: lat,
            long: long,
            googlelink: $("#latlong").val(),
            timing: $("#timing").val(),
            buffertime: $("#buffertime").val(),
            memonumber: $("#memonumber").val(),
            salarydate: $("#salarydate").val(),
            
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
            if (data.isSuccess == true) {
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
              $("#btn-submit-on").html(
                '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>' +
                  "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
              );
              loaddata();
            } else {
              $("#btn-submit-on").html(
                '<button type="submit" class="btn btn-success" id="btn-update">Update</button>'
              );
            }
          },
        });
      } else {
        $("#btn-submit-on").html(
          "<button type='submit' class='btn btn-success' id='btn-update'>Update</button>" +
            "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
        );
      }
    }
  });

  $(document).on("click", "#btn-submit", function (e) {
    e.preventDefault();
    // console.log($("#latlong").val().split("=")[1].split(",")[0]);
    // console.log($("#latlong").val().split("=")[1].split(",")[1]);
    val1 = 1;
    if ($("#latlong").val() != "") {
      if ($("#latlong").val().split("@")) {
        var lat = $("#latlong").val().split("@")[1].split(",")[0];
        var long = $("#latlong").val().split("@")[1].split(",")[1];
      } else {
        $("#errorLatLong").html("Invalid Link");
        val1 = 0;
      }
    }
    val = validation();
    if (val == 1 && val1 == 1) {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "subcompany",
        data: {
          type: "insert",
          name: $("#companyname").val(),
          address: $("#companyaddress").val(),
          contactpersonname: $("#ccpn").val(),
          contactpersonnumber: $("#cpn").val(),
          Email: $("#email").val(),
          GSTIN: $("#gstin").val(),
          companyid: $("#company").val(),
          lat: lat,
          long: long,
          googlelink: $("#latlong").val(),
          timing: $("#timing").val(),
          buffertime: $("#buffertime").val(),
          //wifiname: $("#wifiname").val(),
          memonumber: $("#memonumber").val(),
          salarydate: $("#salarydate").val(),
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
            loaddata();
          }
        },
        complete: function () {
          $("#btn-submit-on").html(
            '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>'
          );
        },
      });
    }
  });

  function validation() {
    val = 1;
    $("#errorName").html("");
    if ($("#companyname").val() == "") {
      $("#errorName").html("Company Name can't be empty");
      val = 0;
    }
    return val;
  }
});
