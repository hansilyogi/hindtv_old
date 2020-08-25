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
                <h1 class="m-0 text-dark">Memo Details</h1>
              </div>              
            </div>            
          </div>          
        </div>                
        <div class="content">
          <div class="container-fluid">
            <div class="card">                          
              <div class="card-body">
                <table class="table table-bordered">
                  <tbody id="displaydata"></tbody>
                </table>
              </div>              
            </div>
          </div>
        </div>        
      </div>      
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>        
    <?php include('script.php'); ?>
    <script src="js/memodetails.js"></script>
  </body>
</html>
