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
                <h1 class="m-0 text-dark">Admin Details</h1>
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
                    <h3 class="card-title">Add Admin</h3>
                  </div>
                  <form role="form">
                    <div class="card-body row">
                      <div class="form-group col-md-3">
                        <label for="name">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                        />
                        <label id="errorName" class="text-danger"></label>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                        <label id="errorPassword" class="text-danger"></label>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="mobilenumber">Mobile Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="mobilenumber"
                          name="mobilenumber"
                          placeholder="Mobile Number"
                        />
                        <label id="errorMobile" class="text-danger"></label>
                      </div>                      
                      <div class="form-group col-md-3">
                        <label for="email">Email</label>                                                  
                        <input
                            type="text"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                        <label id="errorEmail" class="text-danger"></label>                    
                      </div>
                      <div class="form-group col-md-3">
                        <label for="subcompany">Sub Company</label>
                        <select class="form-control" id="subcompany" name="subcompany"></select>                        
                      </div>
                    <div class="col-md-12 table-responsive">
                    <label for="subcompany">Permissions</label> - <label id="select-change"><a href="" id="select-all-check-box">Select All</a></label>    
                    <table class="table table-bordered">
                      <thead>
                        <tr>                          
                          <th class="mr-3">Name</th>
                          <th class="mr-3">Add</th>
                          <th class="mr-3">Update</th>
                          <th class="mr-3">View</th>
                          <th class="mr-3">Download Report(If Available)</th>								
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td>
                              <label>Admin</label>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass"  id="Admin1" name="Admin1">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Admin2" name="Admin2">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Admin3" name="Admin3">                            
                              </div>
                            </td>
													  <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Admin4" name="Admin4">                            
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label>Timing</label>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Timing1" name="Timing1">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Timing2" name="Timing2">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Timing3" name="Timing3">                            
                              </div>
                            </td>
													  <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Timing4" name="Timing4">                            
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label>Thought</label>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Thought1" name="Thought1">
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Thought2" name="Thought2">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Thought3" name="Thought3">                            
                              </div>
                            </td>
													  <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Thought4" name="Thought4">
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label>SubCompany</label>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="SubCompany1" name="SubCompany1">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="SubCompany2" name="SubCompany2">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="SubCompany3" name="SubCompany3">                            
                              </div>
                            </td>
													  <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="SubCompany4" name="SubCompany4">
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label>Employee</label>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass"  id="Employee1" name="Employee1">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Employee2" name="Employee2">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Employee3" name="Employee3">                            
                              </div>
                            </td>
													  <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Employee4" name="Employee4">                            
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label>Attendance</label>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass"  id="Attendance1" name="Attendance1">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Attendance2" name="Attendance2">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Attendance3" name="Attendance3">                            
                              </div>
                            </td>
													  <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Attendance4" name="Attendance4">                            
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label>Memo</label>
                            </td>
                            <td>                              
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass"  id="Memo1" name="Memo1">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Memo2" name="Memo2">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Memo3" name="Memo3">                            
                              </div>
                            </td>
													  <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Memo4" name="Memo4">                            
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label>Report</label>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass"  id="Report1" name="Report1">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Report2" name="Report2">                            
                              </div>
                            </td>
                            <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Report3" name="Report3">                            
                              </div>
                            </td>
													  <td>
                              <div class="icheck-primary d-inline">
                                <input type="checkbox" class="checkBoxClass" id="Report4" name="Report4">                            
                              </div>
                            </td>
                          </tr>
                      </tbody>
                    </table>
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
                    <th>Admin Name</th>                                        
                    <th>Admin Phone Number</th>
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
    <script src="js/admin.js"></script>
  </body>
</html>
