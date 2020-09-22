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
          <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Bulk Download and Update</h3>
              </div>
                <form id="uploaddata" enctype="multipart/form-data">
                  <div class="card-body">
                    <div class="form-group">
                      <label for="report">File input</label>
                      <div class="input-group">
                        <div class="custom-file">
                          <input type="file" class="custom-file-input" id="report" name="report">
                          <input type="hidden" id="type" name="type" value="uploademployee">
                          <input type="hidden" id="token" name="token" value="<?php echo $_SESSION['id']; ?>">
                          <label class="custom-file-label" for="report">Choose file</label>
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <div class="row" id="btn-upload-on">
                          <div class="form-group ml-1">
                            <button type="submit" class="btn btn-primary" id="uploadexcelsheet">Upload</button>
                          </div>
                          <div class="form-group ml-3">
                            <button type="submit" class="btn btn-primary" id="removeexcelsheet">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="card-footer" id="btn-download-on">
                  <button type="submit" class="btn btn-primary float-right" id="downloademployeeexcel">Download Employee Excel</button>
                </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Add Employee</h3>
                  </div>
                  <form  id="employeedata" enctype="multipart/form-data"> 
                    <div class="card-body row">
                      <div class="form-group col-md-3">
                        <label for="firstname">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                        />
                        <label id="errorFirstName" class="text-danger"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="lastname">Middle Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="middlename"
                          name="middlename"
                          placeholder="Middle Name"
                        />
                        <label id="errorMiddleName"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="lastname">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastname"
                          name="lastname"
                          placeholder="Last Name"
                        />
                        <label id="errorLastName"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="gender">Gender</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <select
                              class="form-control"
                              id="gender"
                              name="gender"
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                        <label id="errorGender"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="dob">DOB</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="dob"
                              name="dob"
                              placeholder = "dd/mm/yyyy"
                            />
                          </div>
                        </div>
                        <label id="errorDOB"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="mobile">Mobile Number</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="mobile"
                              name="mobile"
                              placeholder="Mobile"
                            />
                          </div>
                        </div>
                        <label id="errorMobile" class="text-danger"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="mail">Mail</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="mail"
                              name="mail"
                              placeholder="Mail Id"
                            />
                          </div>
                        </div>
                        <label id="errorMail"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="married">Maritial Status</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <select
                              class="form-control"
                              id="married"
                              name="married"
                            >
                              <option value="Married">Married</option>
                              <option value="Unmarried">Unmarried</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="joindate">Join Date</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="joindate"
                              name="joindate"
                              placeholder = "Join Date"
                            />
                          </div>
                        </div>
                        <label id="errorJoinDate"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="confirmationdate">Confirmation Date</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="confirmationdate"
                              name="confirmationdate"
                              placeholder = "Confirmation Date"
                            />
                          </div>
                        </div>
                        <label id="errorConfirmationDate"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="terminationdate">Termination Date</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="terminationdate"
                              name="terminationdate"
                              placeholder = "Termination Date"
                            />
                          </div>
                        </div>
                        <label id="errorTerminationDate"></label>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="prohibition">Probation Period</label>
                        <input
                          type="text"
                          class="form-control"
                          id="prohibition"
                          name="prohibition"
                          placeholder="Prohibition Period(Months)"
                        />
                      </div>

                      <label id="Prohibition"></label>
                      <div class="form-group col-md-3">
                        <label for="subcompany">Sub Company</label>
                        <div class="input-group">
                          <select
                            class="form-control"
                            id="subcompany"
                            name="subcompany"
                          ></select>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="department">Department</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="department"
                              name="department"
                              placeholder="Department"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="designation">Designation</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="designation"
                              name="designation"
                              placeholder="Designation"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="idtype">ID Type</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="idtype"
                              name="idtype"
                              placeholder="ID Type"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="idnumber">ID Number</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="idnumber"
                              name="idnumber"
                              placeholder="ID Number"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="timing">Timing</label>
                        <div class="input-group">
                          <select
                            class="form-control"
                            id="timing"
                            name="timing"
                          ></select>
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="wifiname">Wifi Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="wifiname"
                          name="wifiname"
                          placeholder="Wifi Name"
                        />
                      </div>

                         <!--Name of days Drop Down-->
                      <div class="form-group col-md-3">
                        <label for="weekdayname">Week of Days</label>
                        <div class="input-group">
                          <select
                            class="form-control"
                            id="weekdayname"
                            name="weekdayname"
                          >
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                          </select>
                        </div>
                      </div>
                         <!--End Name of days Drop Down-->
                        <!--Number of Leave Drop Down-->
                      <div class="form-group col-md-3">
                        <label for="numofday">Number of Leave</label>
                        <div class="input-group">
                          <select
                            class="form-control"
                            id="numofday"
                            name="numofday"
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                          </select>
                        </div>
                      </div>
                        <!--End Number of Leave Drop Down-->

                      <div class="form-group  col-md-3">
                        <label for="gpstrack">GPS Track </label>
                        <div>
                          <label class="btn btn-default ml-3">
                            <input type="radio" id="gpstrack1" name="gpstrack" value=1> Yes <br>
                          </label>
                          <label class="btn btn-default mr-3">
                            <input type="radio" id="gpstrack2" name="gpstrack" value=0> No <br>
                          </label>
                        </div>
                      </div>

                        <!--Employee Profile Input File-->
                      <div class="form-group  col-md-3">
                        <label for="employeeimage">Employee's Image</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input type="file" 
                            class="custom-file-input" 
                            id="employeeimage" 
                            name="employeeimage"   
                            accept=".png, .jpg, .jpeg"
                            >
                            <label id="lblempimg" name="lblempimg" class="custom-file-label" for="employeeimage">Choose file</label>
                          </div>
                        </div>
                      </div>
                        <!--Employee Certificate Input File-->
                        <div class="form-group  col-md-3">
                          <label for="employeedocument">Document</label>
                          <div class="input-group">
                           <div class="custom-file">
                              <input type="file" 
                              class="custom-file-input" 
                              id="employeedocument" 
                              name="employeedocument"
                              accept=".png, .jpg, .jpeg"
                              >
                              <label id="lblempdoc" name="lblempdoc" class="custom-file-label" for="employeedocument">Choose file</label>
                          </div>
                       </div> 
                       </div>
                       <!--<div> <input type="file" 
                              id="employeeimage" 
                              name="employeeimage"
                              accept=".png, .jpg, .jpeg" 
                              value=""></div>
                      <div><input type="file" 
                              id="employeedocument" 
                              name="employeedocument"
                              accept=".png, .jpg, .jpeg" 
                              value=""></div>-->
                              
                      <div class="form-group col-md-12 mt-3 rounded">
                        <h6><b>Bank Details</b></h6>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="accountname">Account's Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="accountname"
                          name="accountname"
                          placeholder="Account Name"
                        />
                      </div>

                      <div class="form-group col-md-3">
                        <label for="bankname">Bank Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="bankname"
                          name="bankname"
                          placeholder="Bank Name"
                        />
                      </div>

                      <div class="form-group col-md-3">
                        <label for="accountnumber">Account Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="accountnumber"
                          name="accountnumber"
                          placeholder="Account Number"
                        />
                      </div>

                      <div class="form-group col-md-3">
                        <label for="ifsccode">IFSC Code</label>
                        <input
                          type="text"
                          class="form-control"
                          id="ifsccode"
                          name="ifsccode"
                          placeholder="IFSC Code"
                        />
                      </div>

                      <div class="form-group col-md-3">
                        <label for="branchname">Branch Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="branchname"
                          name="branchname"
                          placeholder="Branch Name"
                        />
                      </div>

                      <div class="form-group col-md-3">
                        <label for="micrcode">MICR Code</label>
                        <input
                          type="text"
                          class="form-control"
                          id="micrcode"
                          name="micrcode"
                          placeholder="MICR Code"
                        />
                      </div>

                      <div class="form-group col-md-3">
                        <label for="upicode">UPI</label>
                        <input
                          type="text"
                          class="form-control"
                          id="upicode"
                          name="upicode"
                          placeholder="UPI"
                        />
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
                        class="btn btn-danger ml-2"
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
          <!--<div class="container-fluid">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Display Data</h3>
              </div>

              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Mobile</th>
                    <th>Action</th>
                    <th>View More</th>
                  </tr>
                </thead>
                <tbody id="displaydata"></tbody>
              </table>
            </div>-->
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
    <script src="js/employee.js"></script>
    <script src="plugins/bs-custom-file-input/bs-custom-file-input.min.js"></script>
    <script type="text/javascript">
    $(document).ready(function () {
      bsCustomFileInput.init();
    });
    </script>
  </body>
</html>
