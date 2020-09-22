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
                <h1 class="m-0 text-dark">Leave Form</h1>
              </div>
            </div>


            <div class="row">
              <div class="col-lg-12">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Add Company</h3>
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
                        <label for="leavereason">Reason</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <div class="input-group">
                              <select
                                class="form-control"
                                id="leavereasonname"
                                name="leavereasonname"
                              ></select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label>Start Date</label>
                        <input type="date" required class="form-control" id="startdate" name="startdate" />
                      </div>

                      <div class="form-group col-md-3">
                        <label>End Date</label>
                        <input type="date" required class="form-control" id="enddate" name="enddate" />
                      </div>
                      
                      <div class="form-group col-md-3">
                        <label>Leave Period(Days) </label>
                        <input type="text" class="form-control" id="leaveperiod" name="leaveperiod" readonly>
                      </div>

                      <div class="form-group col-md-3">
                        <label>Leave Type</label>
                        <select class="form-control mt-1" id="leavetype" name="leavetype">
                        <option value="Paid Leave">Paid Leave</option>
                        <option value="Unpaid Leave">Unpaid Leave</option>
                        </select>                    
                      </div>

                      <div class="form-group col-md-3">
                      <label for="description">Description</label>
                      <textarea
                          type="textarea"
                          class="form-control"
                          id="description"
                          name="description"
                          placeholder="Description"
                          rows="3"
                        ></textarea>
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
        </div>
        <div class="content">
        </div>
      </div>
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>
    <?php include('script.php'); ?>
    <script src="js/leaveform.js"></script>
  </body>
</html>
