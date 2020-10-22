<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- <meta value="http://15.206.236.83/api/" id="website-url"> -->
    <meta value="http://localhost:3000/api/" id="website-url">
    <!-- <meta value="https://itfutrz-attendance-system.herokuapp.com/api/" id="website-url">     -->    
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>HIND TV</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css" />
    <link rel="stylesheet" href="plugins/toastr/toastr.min.css">
    <!-- Google Font: Source Sans Pro -->
    <link
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
      rel="stylesheet"
    />
    <style>
      /* Set the size of the div element that contains the map */
      #map {
        height: 400px; /* The height is 400 pixels */
        width: 100%; /* The width is the width of the web page */
      }
    </style>
  </head>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Admin Dashboard</h1>
              </div>
            </div>
              <!-- /.col -->
              
          <!-- <div class="row"> 
            <div class="col-lg-4 col-6">
              <div class="small-box" style="background-color:#ede6e1">
              <div class="icon">
                      <i class="fas fa-user"></i>
                  </div>
                <div class="inner">
                  <h3><label  id="present" name="present" text="0"></label></h3>
                  <h4><b>Present</b></h4>
                </div>
              </div>
            </div>
          
            <div class="col-lg-4 col-6">
              <div class="small-box" style="background-color:#ede6e1">
              <div class="icon">
                      <i class="fas fa-sticky-note"></i>
                  </div>
                <div class="inner">
                  <h3><label  id="leave" name="leave" text="0"></label></h3>
                  <h4><b>On Leave</b></h4>
                </div>
              </div>
            </div>

          </div> -->

          <!-- <hr>
          <h5><b>Attendance Detail</b></h5>
          <div class="row">

            <div class="col-lg-4 col-6">
                <div class="small-box shadow" style="background-color:#ede6e1">
                  <div class="icon">
                      <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="inner">
                    <h3><label  id="memorequest" name="memorequest" value="0"></label></h3>
                    <h5><a href="#" class="text-dark">See Memo Request</a></h5>
                  </div>
                </div>
            </div>

            <div class="col-lg-4 col-6 h-100">
                <div class="small-box shadow" style="background-color:#ede6e1">
                <div class="icon">
                      <i class="fas fa fa-wifi"></i>
                  </div>
                  <div class="inner">
                    <h3><label  id="leaverequest" name="leaverequest" value="0"></label></h3>
                    <h5><a href="#" class="text-dark">See Leave Request</a></h5>
                  </div>
                </div>
            </div>

          </div>
          <hr> -->

          <!-- <h5><b>Tracking Report</b></h5> -->
            <div class="row">
                <div class="col-lg-4 col-12">
                    <div class="small-box shadow" style="background-color:#ede6e1">
                        <div class="icon">
                            <i class="fas fa-user-cog"></i>
                        </div>
                        <div class="inner">
                        <h5><a  class="text-dark">Welcome Admin</a>
                        <br></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- /.row -->
                      <!-- /.container-fluid -->
        </div>
        <div class="content">
        </div>
      </div>
    </div>
    <?php include('script.php'); ?>
    <!-- <script src="js/adminmobile.js"></script> -->
  </body>
</html>
