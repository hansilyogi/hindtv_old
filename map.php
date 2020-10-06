<!DOCTYPE html>
<html lang="en">  
  <?php include('header.php'); ?>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Employee Live Location</h1>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
          <div id="map"></div>
          <script
            src="https://code.jquery.com/jquery-3.5.1.js"
            integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
            crossorigin="anonymous"
          ></script>
          <script>
            var map;
            var markers = [];
            var count = 0; 
            var infowindow;           
            function initMap() {
              var myLatLng = { lat: 21.1218659, lng: 73.004384 };
              infowindow = new google.maps.InfoWindow();
              map = new google.maps.Map(document.getElementById("map"), {
                zoom: 9.92,
                center: myLatLng,
              });
              getStarted();
            }
            function getStarted() {                        
              $.ajax({
                type: "POST",
                url: $("#website-url").attr("value") + "location",
                dataType: "json",
                cache: false,
                success: function (data) {   
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
                },
              });
            }
            function callname(number){              
              var DATA;
              $.ajax({
                type: "POST",
                url: $("#website-url").attr("value") + "location",
                data: { type: "getnamefrommobile", mobile: number },
                dataType: "json",
                cache: false,
                async: false,
                success: function(data){                  
                  DATA = data[0].Name + " - " + data[0].Mobile;                  
                }
              });              
              return DATA;
            }
            function getClean() {                     
                for (var i = 0; i < markers.length; i++) {                  
                  markers[i].setMap(null);
                }
                markers = [];      
            }
            setInterval(() => {
              getClean();
              getStarted();
            }, 10000);
          </script>
          <script
            async
            defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC55UXQ86t__gJCOoemwCkDY6qWNKLJ3hM&callback=initMap"
          ></script>
        </div>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <!-- Main Footer -->
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>    
    <?php include('script.php'); ?>
  </body>  
</html>
