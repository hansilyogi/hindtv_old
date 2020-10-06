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
                <h1 class="m-0 text-dark">Employee Details</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="card card-success">
                    <div class="card-header">
                      <h3 class="card-title">Filter</h3>
                    </div>
                      <form role="form" id="Filter">
                        <div class="card-body row">
                         <!-- Company DropDown -->
                          <div class="form-group col-md-6">
                            <label for="companyname">Company Name</label>
                            <div class="input-group">
                              <select
                                class="form-control"
                                id="companyname"
                                name="companyname"
                              ></select>
                            </div>
                          </div>
                          <!-- SubCompany Dropdown -->
                          <div class="form-group col-md-6">
                            <label for="subcompanyname">Sub Company Name</label>
                            <div class="input-group">
                              <select
                                class="form-control"
                                id="subcompanyname"
                                name="subcompanyname"
                              >
                              </select>
                            </div>
                          </div>

                          <!-- <div class="form-group col-md-3">
                            <label for="employeename">Employee Name</label>
                            <div class="input-group">
                              <select
                                class="form-control"
                                id="employeename"
                                name="employeename"
                              ></select>
                            
                            </div>
                          </div> -->
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
            </div>
              <!-- /.col-md-6 -->
          </div>
          
          <div class="content">
            <!-- /.container-fluid -->
            <div class="container-fluid">
              <div class="card">
                <div class="card-header row">
                  <h3 class="card-title col-9">Display Data</h3>
                  <input type="text" class="form-control col-3" id="txt_searchemployee" name="txt_searchemployee" placeholder="Search Employee"/>
                </div>
                <!-- /.card-header -->
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>SubCompany Name</th>
                      <th>Mail</th>
                      <th>Mobile</th>
                      <th>Action</th>
                      <th>View More</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata"></tbody>
                </table>
              </div>
            </div>
          </div>
            <!-- /.col -->
      </div>
          <!-- /.row -->
    </div>
       
      <!-- Main Footer -->
    <footer class="main-footer">
      All rights reserved.
    </footer>
    </div>
    <?php include('script.php'); ?>
    <script src="js/employeeview.js"></script>
    <script src="plugins/bs-custom-file-input/bs-custom-file-input.min.js"></script>
    <script type="text/javascript">
    $(document).ready(function () {
      bsCustomFileInput.init();
    });
    </script>
  </body>
</html>
