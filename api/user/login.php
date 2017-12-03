<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$hostname = "localhost:3306";
$username = "root";
$password = "{7akit5low}";
$dbname = "starwars";

$connect = new PDO("mysql:dbname=$dbname;host=$hostname", $username, $password) or die("DB Connection Failed");

if(isset($_POST["id"])){
  $uid = $_POST["id"];
  $stmt = $connect->prepare('select uID, uPassword, HighScore from userinfo WHERE `uID` = :uid');
  $stmt->bindParam(':uid', $uid, PDO::PARAM_INT);
}

$stmt->execute();
$result = $stmt->fetch();

if(count($result)==0){
  echo "No Search Result";
}else if($_POST["password"]==$result["uPassword"]){
   $_SESSION["uid"]=$_POST["id"];
   $_SESSION["highscore"]=$result["HighScore"];
   header('Location: /~jjs/menu.html');
}else{
  echo "wrong password";
}
?>
