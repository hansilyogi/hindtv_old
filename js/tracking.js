$(document).ready(function () {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC55UXQ86t__gJCOoemwCkDY6qWNKLJ3hM&callback=initMap";
    document.getElementsByTagName('head')[0].appendChild(script);

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

    $(document).on("click", "#btn-submit", function (e) {
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
                console.log(data);
                $.each(data, function (key, value) {
                    count = count + 1;
                    marker = new google.maps.Marker({
                      position: {
                        lat: parseFloat(value.latitude),
                        lng: parseFloat(value.longitude),
                      },
                      map: map,
                      title: key,                     
                    });
                    marker.addListener("click", (function(marker, key, infowindow) {                          
                        return function () {
                          data = callname(key);
                          infowindow.setContent(data);
                          infowindow.open(map, marker);
                        }  
                      })(marker, key, infowindow));
                    markers.push(marker);                                        
                }); 
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
        var image = '/home/dhanpal/Desktop/it_futurz/hindtv/dist/img/markerImage.png';
        marker = new google.maps.Marker({
                position: myLatLng,
                map,
                title: "Employee Location",
                draggable: true  
        });
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            $('#latlong').val('http://www.google.com/maps/place/'+evt.latLng.lat()+','+ evt.latLng.lng());
            $('#latitude').val(evt.latLng.lat());
            $('#longitude').val(evt.latLng.lng())
         
        });

        google.maps.event.addListener(marker, 'dragstart', function (evt) {
            console.log("start");
        });
        map.setCenter(marker.position);
        marker.setMap(map);
    }
                          
    function getClean() { 
    
        
        if(longitude == "" || latitude == ""){
        latitude = 21.1692881;
        longitude = 72.8300554;
        }
        else{
        latitude =  parseFloat(latitude);
        longitude = parseFloat(longitude);
        }
        myLatLng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
        marker.setMap(null);
        marker = new google.maps.Marker({
                position: myLatLng,
                map,
                title: "office",
                draggable: true  
    });
        console.log("work");
        marker.setMap(map);      
    }                         
    setInterval(() => {
        //getClean();
        //getStarted();
    }, 100000);                 
                         


});