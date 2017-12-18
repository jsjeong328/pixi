<?php
  session_start();
  require '../../system-critical/ConnectMainDB.php';


  $uid = $_SESSION['uid'];
  $score = 11111;

  $stmt = $connect->prepare("insert into Game (uID, Playtime, Score) VALUES (:uid, now(), :score)");
  $stmt->bindParam(':uid', $uid, PDO::PARAM_STR);
  $stmt->bindValue(':score', $score, PDO::PARAM_INT);

  $stmt->execute();

 ?>
