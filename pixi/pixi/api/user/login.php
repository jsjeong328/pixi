<?php
session_start();
require '../../system-critical/ConnectMainDB.php';

if(isset($_POST["id"])){
  $uid = $_POST["id"];
  $stmt = $connect->prepare(
    'select uID, uPassword, HighScore from userinfo WHERE `uID` = :uid'
  );
  $stmt->bindParam(':uid', $uid, PDO::PARAM_STR);
}

$stmt->execute();
$result = $stmt->fetch();

if(count($result)==0){
  echo "No Search Result";
}else if($_POST["password"]==$result["uPassword"]){
   $_SESSION["uid"]=$_POST["id"];
   $_SESSION["highscore"]=$result["HighScore"];
   header('Location: ../../menu.php');
   exit;
}else{
  echo "wrong password";
}
?>
