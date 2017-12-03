<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$hostname = "localhost:3306";
$username = "root";
$password = "{7akit5low}";
$dbname = "starwars";

$connect = new PDO("mysql:dbname=$dbname;host=$hostname", $username, $password) or die("DB Connection Failed");



if(isset($_POST["id"]) && isset($_POST["password"])){
  $uid = $_POST["id"];
  $upassword = $_POST["password"];

  // TODO: run validation check function

  //if validation check success
  $stmt = $connect->prepare('insert into userinfo(uID, uPassword, HighScore) VALUES(:uid, :upassword, 0)');
  $stmt->bindParam(':uid', $uid, PDO::PARAM_INT);
  $stmt->bindParam(':upassword', $upassword, PDO::PARAM_INT);
}

$stmt->execute();
$result = $stmt->fetch();
$_SESSION["uid"]=$_POST["id"];
$_SESSION["highscore"]=$result["HighScore"];
header('Location: /~jjs/menu.html');
?>
