<!DOCTYPE html>
<html lang="en">
<?php include('header.php'); ?>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
      <!-- Navbar -->
      <?php include('navbar.php'); ?>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Sub Company Details</h1>
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
          <div class="container-fluid">
            <div class="row">
              
                <div class="col-lg-12">
                  <div class="card card-success">
                    <div class="card-header">
                      <h3 class="card-title">Add Sub Company</h3>
                    </div>
                    <form role="form">
                      <div class="card-body row">
                        <div class="form-group col-md-3">
                          <label for="companyname">Company Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="companyname"
                            name="companyname"
                            placeholder="Company Name"
                          />
                          <label id="errorName" class="text-danger"></label>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="companyaddress">Company Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="companyaddress"
                            name="companyaddress"
                            placeholder="Company Address"
                          />
                        </div>
                        <div class="form-group col-md-3">
                          <label for="ccpn">Contact Person Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="ccpn"
                            name="ccpn"
                            placeholder="Contact Person Name"
                          />
                        </div>
                        <div class="form-group col-md-3">
                          <label for="cpn">Contact Person Number</label>
                          <div class="input-group">
                            <div class="custom-file">
                              <input
                                type="text"
                                class="form-control"
                                id="cpn"
                                name="cpn"
                                placeholder="Contact Person Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="email">Email</label>
                          <div class="input-group">
                            <div class="custom-file">
                              <input
                                type="text"
                                class="form-control"
                                id="email"
                                name="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="gstin">GSTIN</label>
                          <div class="input-group">
                            <div class="custom-file">
                              <input
                                type="text"
                                class="form-control"
                                id="gstin"
                                name="gstin"
                                placeholder="GSTIN"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="latlong">Google Map Link</label>
                          <div class="input-group">
                            <div class="custom-file">
                              <input
                                type="text"
                                class="form-control"
                                id="latlong"
                                name="latlong"
                                placeholder="Select From Map"
                              />
                            </div>
                          </div>
                          <label id="errorLatLong" class='text-danger'></label>
                        </div>
                        <!--<div class="form-group col-md-3">
                          <label for="latlong">Sub Wifi Name</label>
                          <div class="input-group">
                            <div class="custom-file">
                              <input
                                type="text"
                                class="form-control"
                                id="wifiname"
                                name="wifiname"
                                placeholder="Sub Wifi Name"
                              />
                            </div>
                          </div>
                          <label id="errorLatLong" class='text-danger'></label>
                        </div>-->
                        <div class="form-group col-md-3">
                          <label for="company">Company</label>
                          <div class="input-group">
                            <div class="custom-file">
                              <select
                                class="form-control"
                                name="company"
                                id="company"
                              >
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="buffertime">Buffer Time(In Minutes)</label>
                          <div class="input-group">
                            <div class="custom-file">
                              <input type="text"
                                class="form-control"
                                name="buffertime"
                                id="buffertime"
                                value = 0
                              >                            
                            </div>
                          </div>
                        </div> 

                        <div class="form-group col-md-3">
                          <label for="salarydate">Salary Date</label>
                          <div class="input-group">
                            <div class="custom-file">
                              <select
                              class="form-control"
                              id="salarydate"
                              name="salarydate"
                              >
                              <?php
                              for($i=1; $i<=31; $i++) {
                              ?>
                              <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                              <?php
                              }
                              ?>
                              </select>
                            </div>
                          </div>
                          <label id="errorLatLong" class='text-danger'></label>
                        </div>

                        <div class="form-group col-md-3">
                          <label for="memonumber">Number of Memo</label>
                          <div class="input-group">
                            <select
                              class="form-control"
                              id="memonumber"
                              name="memonumber"
                            >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group col-md-3">
                        <input type="hidden"  id="latitude" name="latitude">
                        <input type="hidden"  id="longitude" name="longitude">
                        </div>

                              <!--Gooogle Map-->
                        <div class="form-group col-12">
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
                            var marker;
                            var infowindow;           
                            function initMap() {
                              var myLatLng = { lat: 21.1692881, lng: 72.8300554 };
                              infowindow = new google.maps.InfoWindow();
                              map = new google.maps.Map(document.getElementById("map"), {
                                  zoom: 9.92,
                                  center: myLatLng,
                              });
                              var image = '/home/dhanpal/Desktop/it_futurz/hindtv/dist/img/markerImage.png';
                              marker = new google.maps.Marker({
                                        position: myLatLng,
                                        map,
                                        title: "office",
                                        draggable: true  
                              });
                              google.maps.event.addListener(marker, 'dragend', function (evt) {
                                  $('#latlong').val('http://www.google.com/maps/place/'+evt.latLng.lat()+','+ evt.latLng.lng());
                                  $('#latitude').val(evt.latLng.lat());
                                  $('#longitude').val(evt.latLng.lng())
                                  //console.log(evt.latLng.lat());
                                  //console.log(evt.latLng.lng());
                              });

                              google.maps.event.addListener(marker, 'dragstart', function (evt) {
                                  console.log("start");
                              });
                              map.setCenter(marker.position);
                              marker.setMap(map);

                              /*map.addListener('click', function(mapsMouseEvent) {
                                infowindow.close();
                                infowindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
                                console.log(infowindow);
                                infowindow.setContent(mapsMouseEvent.latLng.toString());
                                var coordinate = infowindow.content.split(',');
                                //console.log(coordinate[0].replace('(',''),coordinate[1].replace(')',''));
                                $("#latlong").val(coordinate[0].replace('(','')+'  '+coordinate[1].replace(')',''));
                                infowindow.open(map);
                              });*/
                              getStarted();
                            }
                            function getStarted() {    
                              
                              /*                    
                              $.ajax({
                                type: "POST",
                                url: $("#website-url").attr("value") + "location",
                                dataType: "json",
                                cache: false,
                                success: function (data) {                
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
                              });*/
                            }
                            /*function callname(number){              
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
                            }*/
                            function getClean() {                     
                                for (var i = 0; i < markers.length; i++) {                  
                                  markers[i].setMap(null);
                                }
                                markers = [];      
                            }
                            setInterval(() => {
                              //getClean();
                              getStarted();
                            }, 10000);
                          </script>
                        
                          <script
                            async
                            defer
                            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC55UXQ86t__gJCOoemwCkDY6qWNKLJ3hM&callback=initMap"
                          ></script>
                        </div>
                              <!--/Google Map-->







                      </div>
                      <!-- /.card-body -->
                      <center>
                        <div class="form-check" id="staticmessage"></div>
                      </center>
                      <div class="card-footer" id="btn-submit-on">
                        <button
                          type="submit"
                          class="btn btn-success"
                          id="btn-submit"
                        >
                          Submit
                        </button>
                        <button
                          type="submit"
                          class="btn btn-danger ml-1"
                          id="btn-cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

              <!-- /.col-md-6 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
          <div class="container-fluid">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Display Data</h3>
              </div>
              <!-- /.card-header -->
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Company Address</th>
                    <th>Contact Person Name</th>
                    <th>Contact Person Number</th>
                    <th>Date of Salary</th>
                    <th>Number of Memo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="displaydata"></tbody>
              </table>
            </div>
          </div>
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
    <script src="js/subcompany.js"></script>
  </body>
</html>
