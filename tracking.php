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
                <h1 class="m-0 text-dark">Tracking</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Choose Detail</h3>
                  </div>
                  <form role="form" id="trackingform">
                    <div class="card-body row">

                      <div class="form-group col-md-3">
                        <label for="companyname">Company Name</label>
                        <div class="input-group">
                          <select
                            class="form-control"
                            id="companyname"
                            name="companyname"
                          ></select>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="subcompanyname">Sub Company Name</label>
                        <div class="input-group">
                          <select
                            class="form-control"
                            id="subcompanyname"
                            name="subcompanyname"
                          ></select>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="employeename">Employee Name</label>
                        <div class="input-group">
                          <select
                            class="form-control"
                            id="employeename"
                            name="employeename"
                          ></select>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label>Date</label>
                        <input type="date" required class="form-control" id="date" name="date" />
                      </div>

                      <div class="form-group col-12">
                          <div id="map"></div>
                     </div>

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
                        class="btn btn-danger"
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
                      <div class="content">
            <div class="card">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody id="displaydata"></tbody>
              </table>
            </div>

        </div>
        </div>
        <div class="content">
        </div>
      </div>
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>
    <?php include('script.php'); ?>
    <script src="js/tracking.js"></script>
  </body>
</html>
