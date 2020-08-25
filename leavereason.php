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
              <div class="col-lg-12">
                <h1 class="m-0 text-dark">Add Reason</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">ADD Reason</h3>
                  </div>
                  <form role="form" method="post">
                    <div class="card-body row">

                      <div class="form-group col-md-4">
                        <label for="reasonname">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="reasonname"
                          name="reasonname"
                          placeholder="Enter Reason"
                        />
                      </div>
                        <label id="errorname" class="text-danger"></label>
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
        </div>
        <div class="content">
            <div class="card">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="displaydata"></tbody>
              </table>
            </div>

        </div>
      </div>
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>
    <?php include('script.php'); ?>
    <script src="js/leavereason.js"></script>
  </body>
</html>
