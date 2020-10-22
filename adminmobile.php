<!DOCTYPE html>
<html lang="en">
<?php include('header.php'); ?>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Admin Dashboard</h1>
              </div>
            </div>
              <!-- /.col -->
              
          <div class="row"> 
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

          </div>

          <hr>
          <h5><b>Attendance Detail</b></h5>
          <div class="row">

            <div class="col-lg-4 col-6">
                <div class="small-box shadow" style="background-color:#ede6e1">
                  <div class="icon">
                      <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="inner">
                    <h3><label  id="memorequest" name="memorequest" value="0"></label></h3>
                    <h5><a href="memostatus.php" class="text-dark">See Memo Request</a></h5>
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
                    <h5><a href="leaveAction.php" class="text-dark">See Leave Request</a></h5>
                  </div>
                </div>
            </div>

          </div>
          <hr>

          <h5><b>Tracking Report</b></h5>
            <div class="row">
                <div class="col-lg-4 col-12">
                    <div class="small-box shadow" style="background-color:#ede6e1">
                        <div class="icon">
                            <i class="fas fa-user-cog"></i>
                        </div>
                        <div class="inner">
                        <h5><a href="tracking.php" class="text-dark">Track Employee</a>
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
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>
    <?php include('script.php'); ?>
    <script src="js/adminmobile.js"></script>
  </body>
</html>
