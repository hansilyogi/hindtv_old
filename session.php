<?php session_start();    
    $_SESSION['id'] = $_REQUEST['id'];
    $data = array('Id' => $_SESSION['id']);
    echo json_encode($data);
?>