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
                <h1 class="m-0 text-dark">Memo Status Form</h1>
              </div>
            </div>


            <div class="row">
              <div class="col-lg-12">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Memo Info</h3>
                  </div>
                  <form role="form">
                    <div class="card-body row">

                      <div class="form-group col-md-3">
                        <label for="subcompanyname">Sub-Company Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="subcompanyname"
                          name="subcompanyname"
                          placeholder="SubCompany Name"
                          readonly
                        />
                        <label id="errorSubCompanyName" class="text-danger"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="employeename">Employee Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="employeename"
                          name="employeename"
                          placeholder="Employee Name"
                          readonly
                        />
                        <label id="errorEmployeeName" class="text-danger"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="leavereasonname">Duty Type</label>
                        <input
                          type="text"
                          class="form-control"
                          id="leavetype"
                          name="leavereasonname"
                          placeholder="Duty Type"
                          readonly
                        />
                        <label id="errorReason" class="text-danger"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label>Date</label>
                        <input type="date" required class="form-control" id="startdate" name="startdate" readonly/>
                      </div>

                      <div class="form-group col-md-3">
                      <label for="leavereasonname">Description</label>
                      <textarea
                          type="textarea"
                          class="form-control"
                          id="leavereasonname"
                          name="leavereasonname"
                          placeholder="Description"
                          rows="3"
                          readonly
                        ></textarea>
                      </div>

                      <div class="form-group col-md-3">
                        <label>Status</label>
                        <select class="form-control mt-1" id="leavestatus" name="leavestatus">
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Approved">Approved</option>
                        </select>                    
                      </div>
                    </div>
                    <!-- /.card-body -->
                    <center>
                      <div class="form-check" id="staticmessage"></div>
                    </center>
                    <div class="card-footer" id="btn-submit-on">
                      <!-- <button
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
                      </button> -->
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
                                <th>Name</th>
                                <th>SubCompany Name</th>
                                <th>Date</th>
                                <th>Reason</th>
                                <th>Duty Type</th>
                                <th>Status</th>
                                <th>Action</th>
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
    <script src="js/memostatus.js"></script>
  </body>
</html>
