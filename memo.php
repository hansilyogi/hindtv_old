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
                <h1 class="m-0 text-dark">Find Memo</h1>
              </div>              
            </div>            
          </div>          
        </div>        
        <div class="content">
            <div class="container-fluid">
              <div class="row">            
                <div class="col-md-12">
                  <div class="card card-primary">
                    <div class="card-header">
                      <h3 class="card-title">Find Memo</h3>
                    </div>              
                    <form role="form">
                      <div class="card-body row">                
                        <div class="form-group col-md-6">
                          <label for="department">Sub Company</label>
                          <div class="input-group">
                            <select class="form-control" id="subcompany" name="subcompany"></select>
                          </div>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="employee">Employee</label>
                          <div class="input-group">
                            <select class="form-control" id="employee" name="employee"></select>
                          </div>
                       </div>
                       <div class="form-group col-md-6">
                        <label for="exampleInputEmail1">Start Date</label>
                        <input type="date" class="form-control" id="startdate">                        
                      </div>
                      <div class="form-group col-md-6">
                        <label for="exampleInputPassword1">End Date</label> 
                        <input type="date" class="form-control" id="enddate">
                      </div>                  
                    </div>                
                    <div class="card-footer">
                      <button type="submit" class="btn btn-primary" id="btn-search-date">Submit</button>
                    </div>
                  </form>
            </div>
              </div>
              <!-- /.col-md-6 -->
              <div class="col-md-12">
              <div class="card">              
              <div class="card-body p-0 table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th style="width: 10px">Id</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata">
                    <tr>
                      <td colspan='6' class='text-center font-weight-bold'>Search Above for Memo</td>
                    </tr>          
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
              </div>
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
          <div class="container-fluid">
            
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
    <script src="js/memo.js"></script>
  </body>
</html>
