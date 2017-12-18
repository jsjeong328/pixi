<?php
session_start();
require '../../system-critical/ConnectMainDB.php';

$uid = $_SESSION['uid'];

$stmt = $connect->prepare("select * from Game where uID=:uid");
$stmt->bindParam(':uid', $uid, PDO::PARAM_STR);
$stmt->execute();
$result = $stmt->fetchAll();

foreach($result as $key){
  echo $key['Playtime'].' | '.$key['Score'].'</br>';
}
 ?>
