  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
            ></a>
          </li>
      </ul>
  </nav>

  <aside class="main-sidebar sidebar-dark-primary elevation-4 scrollbar">
    <div class="main-sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 ml-3 d-flex">
        <!--SideBar logo updated By Dhanpal 21.08-->
        <div class="logo mb-4">
          <a href="#" class="d-block">
            <span class="logo-xs text-center">
            <h5><b>D G</b></h5>
            </span>
            <span class="logo-xl text-center">
              <h5><b>DL GTPL</b></h5>
            </span>
          </a>
        </div>
        <!-- End logo -->


      </div>
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!--Dashboard Opition-->
          <li class="nav-item">
            <a href="dashboard.php" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <!--End Dashboard Opition-->

          <li class="nav-item">
            <a href="admin.php" class="nav-link">
              <i class="nav-icon fas fa-user-cog"></i>
              <p>Admin</p>
            </a>
          </li>

          <!--Leave Manage-->
          <li class="nav-item has-treeview">
                <a href="leaveform.php" class="nav-link">
                <i class="nav-icon fas fa-house-user"></i>
                <p>Leave Form</p>
                <!-- <p>Leave<i class="fas fa-angle-left right"></i></p> -->
                </a>

                <!-- <ul class="nav nav-treeview" style="display: none;">
                <li class="nav-item">
                  <a href="leaveform.php" class="nav-link">
                    <i class="nav-icon fas fa-user"></i>
                    <p>Leave Form</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="defineleave.php" class="nav-link">
                    <i class="nav-icon fas fa-user-plus"></i>
                    <p>Define Leave</p>
                  </a>
                </li>
              </ul> -->
          </li>

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-brain"></i>
              <p>Masters<i class="fas fa-angle-left right"></i></p>
            </a>

            <ul class="nav nav-treeview" style="display: none;">
              <li class="nav-item">
                <a href="timing.php" class="nav-link">
                  <i class="fas fa-clock nav-icon"></i>
                  <p>Timing</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="thoughts.php" class="nav-link">
                  <i class="nav-icon fas fa-quote-left"></i>
                  <p>Thoughts</p>
                </a>
              </li>

              <li class="nav-item">
                <a href="leavereason.php" class="nav-link">
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Reason</p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-industry"></i>
              <p>Company<i class="fas fa-angle-left right"></i></p>
            </a>
            <ul class="nav nav-treeview" style="display: none;">
              <!--<li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-industry"></i>
                  <p>View</p>
                </a>
              </li>-->
              <li class="nav-item">
                <a href="company.php" class="nav-link">
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Add/Update</p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-building"></i>
              <p>Sub Company<i class="fas fa-angle-left right"></i></p>
            </a>

            <ul class="nav nav-treeview" style="display: none;">
              <!--<li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-building"></i>
                  <p>View</p>
                </a>
              </li>-->
              <li class="nav-item">
                <a href="subcompany.php" class="nav-link">
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Add/Update</p>
                </a>
              </li>

              <li class="nav-item">
                <a href="location.php" class="nav-link">
                  <i class="nav-icon fas fa-map-marker-alt"></i>
                  <p>Add Office Location</p>
                </a>
              </li>
            </ul>

          </li>

        <!--Employee Master Updated By Dhanpal 20.08-->
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>Employee<i class="fas fa-angle-left right"></i> </p>
            </a>
            <ul class="nav nav-treeview" style="display: none;">
              <li class="nav-item">
                <a href="employeeview.php" class="nav-link">
                  <i class="nav-icon fas fa-user"></i>
                  <p>View</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="employee.php" class="nav-link">
                  <i class="nav-icon fas fa-user-plus"></i>
                  <p>Add/Update</p>
                </a>
              </li>
            </ul>
          </li>
          <!-- End Employee Master-->

          <!-- Attendance Type Master -->
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-hourglass"></i>
              <p>Attendance Types<i class="fas fa-angle-left right"></i></p>
            </a>
            <ul class="nav nav-treeview" style="display: none;">
              <li class="nav-item">
                <a href="attendance.php" class="nav-link">
                  <i class="nav-icon fas fa-hourglass"></i>
                  <p>Attendance</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="employeedetails.php" class="nav-link">
                  <i class="nav-icon fas fa-user-clock"></i>
                  <p>Employee Attendance</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="tracking.php" class="nav-link">
                  <i class="nav-icon fas fa-map-marker-alt"></i>
                  <p>Employee Tracking</p>
                </a>
              </li>
            </ul>
          </li>
          <!-- End Attendance Type Master -->

          <!-- Memo -->
          <li class="nav-item">
            <a href="memo.php" class="nav-link">
              <i class="nav-icon fas fa-sticky-note"></i>
              <p>Memo</p>
            </a>
          </li>
          <!-- End Memo-->

          <!-- Live Location DropDown -->
          <li class="nav-item">
            <a href="map.php" class="nav-link">
              <i class="nav-icon fas fa-map-marker-alt"></i>
              <p>Live Location</p>
            </a>
          </li>
          <!-- End LiveLocation -->

          <!-- Employee Attendance Report -->
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-file-excel"></i>
              <p>Report's<i class="fas fa-angle-left right"></i></p>
            </a>
            <ul class="nav nav-treeview" style="display: none;">
              <li class="nav-item">
                <a href="employeeattendance.php" class="nav-link">
                  <i class="nav-icon fas fa-file-excel"></i>
                  <p>Employee Attendance</p>
                </a>
              </li>
            </ul>
          </li>
          <!-- end Employee Attendance Report -->

          <!-- Logout Option -->
          <li class="nav-item">
            <a href="logout.php" class="nav-link">
              <i class="nav-icon fas fa-sign-out-alt"></i>
              <p>Logout</p>
            </a>
          </li>
          <!-- End Logout -->
        </ul>
      </nav>
    </div>
  </aside>
