$(document).ready(function(){
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC55UXQ86t__gJCOoemwCkDY6qWNKLJ3hM&callback=initMap";
    document.getElementsByTagName('head')[0].appendChild(script);

    var SUBCOMPANY;
    //loadcompanyname();
    //loadsubcompanyname();
    loaddata();

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

    function loaddata(){

        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "subcompnaylocation",
            data:{
                type:"getdata"
            },
            dataType:"json",
            cache:"false",
            success: function(data){
                $("#displaydata").append("");
                for (i = 0; i < data.Data.length; i++) {
                    $("#displaydata").append(
                      "<tr><td>" +
                      data.Data[i].Name +
                      "</td><td>" +
                        '<a target="blank" href=' +
                        data.Data[i]["Link"] +
                        ">View Location</a></td></tr>"
                        // <td>"+
                        // {/* '<a id="delete-data" href=location.php?id=' +
                        //     data.Data[i]["_id"] +
                        //     '><i class="fa fa-trash" aria-hidden="true"></i></a>'
                        // +"</td> */}
                        // "</tr>"
                    );
                }
            }
        })
    }

    $(document).on("click", "#btn-submit",function(e){
        e.preventDefault();
        var lat  =  $('#latitude').val();
        var long =  $('#longitude').val();
        var link = $('#link').val();
        var name = $("#locationname").val();
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "subcompnaylocation",
            data:{
                type:"insert",
                name:name,
                latitude:lat,
                longitude:long,
                link:link
            },
            dataType:"json",
            cache:"false",
            beforeSend: function(){
                $("#btn-submit-on").html(
                    '<button class="btn btn-success" type="button">\
                                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                          Loading...\
                                          </button>'
                );
            },
            success: function(data){
                $("form")[0].reset();
                if (data.isSuccess == true) {
                    toastr.success(data.Message);
                    
                  $("#staticmessage")
                    .removeClass("text-success text-danger")
                    .addClass("text-success font-weight-bold");
                  $("#staticmessage").html(data["Message"]).fadeOut(10000);
                  $.when($("#staticmessage").fadeOut()).then(function () {
                    $("#staticmessage").html("");
                    $("#staticmessage").removeAttr("style");
                    $("#staticmessage");
                  });
                  location.reload();
                }
                else if(data.isSuccess == false){
                  toastr.error(data.Message);
                  $("#staticmessage")
                    .removeClass("text-success text-danger")
                    .addClass("text-success font-weight-bold");
                  $("#staticmessage").html(data["Message"]).fadeOut(10000);
                  $.when($("#staticmessage").fadeOut()).then(function () {
                    $("#staticmessage").html("");
                    $("#staticmessage").removeAttr("style");
                    $("#staticmessage");
                  });
                  location.reload();
                }
            },
            complete: function(){
                $("#btn-submit-on").html(
                    '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>'
                  );
                  
            }
        });

    });


    $(document).on("click", "#delete-data",function(e){
    e.preventDefault();
    var id = $(this).attr("href").split("=")[1];
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompnaylocation",
      data: { type: "getsingledata", id: id },
      dataType: "json",
      cache: false,
      success: function (data) {
          console.log(data);
        if (data.isSuccess == true) {
          UPDATEID = id;
          $("#subcompanyname").val(data.Data[0].SubCompanyId);
          $("#link").val(data.Data[0].Link);
          $("#latitude").val(data.Data[0].Latitude);
          $("#longitude").val(data.Data[0].Longitude);
          window.scrollTo(0, 0);
          $("#btn-submit-on").html(
            "<button type='submit' class='btn btn-danger' id='btn-delete'>Delete</button>" +
              "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
          );
        }
      },
    });
    });

    $(document).on("click", "#btn-delete",function(e){
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "subcompnaylocation",
            data: { type: "delete", id: UPDATEID },
            dataType: "json",
            cache: false,
            success: function (data) {
               
              if (data.isSuccess == true) {
                toastr.success(data.Message);
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
                window.scrollTo(0, 0);
                $("#btn-submit-on").html(
                  "<button type='submit' class='btn btn-danger' id='btn-delete'>Delete</button>" +
                    "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
                );
              }
            },
          });
    });

    window.initMap = function() {
        myLatLng = { lat: 21.1692881, lng: 72.8300554 };
        infowindow = new google.maps.InfoWindow();
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 9.92,
            center: myLatLng,
        });
        var image = '/home/dhanpal/Desktop/it_futurz/hindtv/dist/img/markerImage.png';
        marker = new google.maps.Marker({
                position: myLatLng,
                map,
                title: "Employee Location",
                draggable: true  
        });
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            $('#latitude').val(evt.latLng.lat());
            $('#longitude').val(evt.latLng.lng());
            $('#link').val('http://www.google.com/maps/place/'+evt.latLng.lat()+','+ evt.latLng.lng());
        });

        google.maps.event.addListener(marker, 'dragstart', function (evt) {
            console.log("start");
        });
        map.setCenter(marker.position);
        marker.setMap(map);
    }
});