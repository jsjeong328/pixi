<?php
session_start();
require '../../system-critical/ConnectMainDB.php';

if(isset($_POST["id"]) && isset($_POST["password"])){
  $uid = $_POST["id"];
  $upassword = $_POST["password"];

  // TODO: run validation check function

  //if validation check success
  if($uid && $upassword){
    $stmt = $connect->prepare('insert into userinfo(uID, uPassword, HighScore) VALUES(:uid, :upassword, 0)');
    $stmt->bindParam(':uid', $uid, PDO::PARAM_STR);
    $stmt->bindParam(':upassword', $upassword, PDO::PARAM_INT);
    $stmt->execute();
    $result = $stmt->fetch();
    $_SESSION["uid"]=$_POST["id"];
    $_SESSION["highscore"]=$result["HighScore"];
    header('Location: ../../menu.php');
    exit;
  }else{
    echo 'Validation Fail!';
  }
}
?>
