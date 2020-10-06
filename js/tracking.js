$(document).ready(function () {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC55UXQ86t__gJCOoemwCkDY6qWNKLJ3hM&callback=initMap";
    document.getElementsByTagName('head')[0].appendChild(script);

    var map;
    var markers = [];
    var count = 0; 
    var marker;
    var infowindow;    
    var myLatLng;       
                                  
    window.initMap = function() {
        myLatLng = { lat: 21.1692881, lng: 72.8300554 };
        infowindow = new google.maps.InfoWindow();
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 9.92,
            center: myLatLng,
        });
    }
                          
    function getClean() { 
        myLatLng = { lat: 21.1692881, lng: 72.8300554 };
        marker.setMap(null);
        marker = new google.maps.Marker({
                position: myLatLng,
                map,
                title: "office",
                draggable: true  
        });
        marker.setMap(null);
        //marker.setMap(map);      
    }                         
    // setInterval(() => {
    //     //getClean();
    //     //getStarted();
    // }, 100000);

    var SUBCOMPANY;
    loadcompanyname();
    loadsubcompanyname();
    loademployeename();

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
        },
    });
    }

    function loademployeename(){
    $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "employee",
        data: { type: "getgpsemployee", 
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

    $(document).on("click", "#btn-submit", function (e) {
        window.initMap();
        $("#displaydata").html("");
        var empid = $("#employeename").val();
        var date = $("#date").val();
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "gpstracking",
            data :{
                type:"getdata",
                employeeid:empid,
                date:date
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
                if(data.isSuccess == true){
                
                    // $("#btn-submit-on").html(
                    //     "<button type='submit' class='btn btn-success' id='btn-update'>Refresh</button>" +
                    //     "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
                    // );
                    $("#btn-submit-on").html(
                        "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
                          "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
                      );
                    var employeepath = [];
                    for(i=0;i<data.Data.length;i++){
                    employeepath.push({
                        lat:parseFloat(data.Data[i].Latitude),
                        lng:parseFloat(data.Data[i].Longitude)
                    });
                    }
                    
                    for(i=0;i<data.Data.length;i++){
                        marker = new google.maps.Marker({
                        position: {
                            lat: parseFloat(data.Data[i].Latitude),
                            lng: parseFloat(data.Data[i].Longitude),
                        },
                        map: map,
                        title: data.Data[i].Time,                     
                        });
                    
                        var line = new google.maps.Polyline({
                            path: employeepath,
                            strokeColor: "#FF0000",
                            strokeOpacity: 1.0,
                            strokeWeight: 10,
                            geodesic: true,
                            map: map
                        });
                        line.setMap(map);
                        line.addListener("click", (function(line, infowindow) {                          
                            return function () {
                            infowindow.setContent(data.Data[i].Time);
                            infowindow.open(map, marker);
                            }  
                            })(line, infowindow));
                            markers.push(line);    
                    } 
                    for(i=0;i<data.Data.length;i++){
                        $("#displaydata").append(
                            "<tr><td>" +
                            data.Data[i].Time +
                            "</td><td>" +
                            data.Data[i].Name
                                +"</td></tr>"
                                
                            );
                    } 
                } else if(data.isSuccess == false) {
                    toastr.error(data.Message);
                    $("#btn-submit-on").html(
                        "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
                          "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
                      );
                }                           
            }
        });
    });

    $(document).on("change", "#subcompanyname", function () {
        SUBCOMPANY = $("#subcompanyname").val();
        loademployeename();
      });
    
      //change value on company master's value selection
    $(document).on("change", "#companyname", function () {
    COMPANY = $("#companyname").val();
    loadsubcompany();
    });
                    
});