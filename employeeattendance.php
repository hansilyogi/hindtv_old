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
                                <h1 class="m-0 text-dark">Employee Attendance Report</h1>
                            </div>              
                        </div>            
                    </div>          
                </div>        
                <div class="content">
                    <div class="container-fluid">
                        <div class="card card-default">                            
                            <div class="card-body ">
                                <div class="row"> 
                                    <div class="col-12">
                                        <label>Sub Company</label>
                                        <select class="form-control" id="subcompany"></select>
                                        <label></label>                                    
                                    </div>
                                    <!-- Starting Months and Ending Months -->
                                    <div class="col-12 row">
                                        <div class="col-md-6">
                                            <label>Start Date</label>
                                            <input type="date" class="form-control" id="startdate" name="startdate">                    
                                        </div>
                                        <div class="col-md-6">
                                            <label>End Date</label>
                                            <input type="date" class="form-control mt-1" id="enddate" name="enddate">
                                        </div>    
                                    </div>
                                    
                                    <!-- <div class="col-12 row">
                                        <div class="col-md-6">
                                            <label> Months</label>
                                            <select class="form-control mt-1" id="months" name="months">
                                            <option value=01>January</option>
                                            <option value=02>February</option>
                                            <option value=03>March</option>
                                            <option value=04>April</option>
                                            <option value=05>May</option>
                                            <option value=06>June</option>
                                            <option value=07>July</option>
                                            <option value=08>August</option>
                                            <option value=09>September</option>
                                            <option value=10>October</option>
                                            <option value=11>November</option>
                                            <option value=12>December</option>
                                            </select>                    
                                        </div>
                                        <div class="col-md-6">
                                            <label> Year</label>
                                            <select class="form-control mt-1" id="year" name="year"></select>
                                        </div>    
                                    </div>      -->
                                </div>
                            </div> 
                            <label class="text-center text-danger" id="errorMessage"></label>
                        <div class="card-footer" id="btn-submit-on"> 
                            <button type="submit" class="btn btn-success"id="btn-apply-filter">Download Report</button>
                        </div>              
                    </div>
                </div>          
            </div> 
        </div>      
      <footer class="main-footer">
        All rights reserved.
      </footer>         
    <?php include('script.php'); ?>
    <script src="js/employeeattendance.js"></script>
  </body>
</html>
