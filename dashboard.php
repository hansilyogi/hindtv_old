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
                <h1 class="m-0 text-dark">Dashboard</h1>
              </div>
            </div>
              <!-- /.col -->
            <div class="row">
              <div class="col-lg-4 col-6">
                <!-- small card -->
                <div class="small-box bg-info">
                  <div class="inner">
                    <h3>100</h3>
                    <p>Present</p>
                  </div>

                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small card -->
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>50</h3>
                  <p>Absent</p>
                </div>

              </div>
            </div>

            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small card -->
              <div class="small-box bg-warning">
                <div class="inner">
                  <h3>150</h3>
                  <p>Employee</p>
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
    <script src="js/dashboard.js"></script>
  </body>
</html>
