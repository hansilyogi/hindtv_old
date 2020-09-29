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
                <h1 class="m-0 text-dark">Office Location</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Office Location</h3>
                  </div>
                  <form role="form">
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

                      <div class="form-group col-md-6">
                        <label for="locationname">Location Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="locationname"
                          name="locationname"
                          placeholder="Location Name"
                        />
                        <label id="errorLocationName" class="text-danger"></label>
                      </div>


                      <div class="form-group col-md-3">
                        <label for="latitude">Latitude</label>
                        <input
                          type="text"
                          class="form-control"
                          id="latitude"
                          name="latitude"
                          placeholder="Latitude"
                        />
                        <label id="errorLatitude" class="text-danger"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="longitude">Longitude</label>
                        <input
                          type="text"
                          class="form-control"
                          id="longitude"
                          name="longitude"
                          placeholder="Longitude"
                        />
                        <label id="errorLongitude" class="text-danger"></label>
                      </div>

                      <div class="form-group col-md-6">
                        <label for="link">Link</label>
                        <input
                          type="text"
                          class="form-control"
                          id="link"
                          name="link"
                          placeholder="Link"
                        />
                        <label id="errorLink" class="text-danger"></label>
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
                      <div class="container-fluid">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Display Data</h3>
              </div>
              <!-- /.card-header -->
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Location Name</th>
                    <th>SubCompany Name</th>
                    <th>View Location</th>
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
    <script src="js/location.js"></script>
  </body>
</html>
