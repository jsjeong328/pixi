<?php
  session_start();
  require '../../system-critical/ConnectMainDB.php';

  $uid = $_SESSION['uid'];
  $score = (int)$_POST['score'];

  $stmt = $connect->prepare("insert into Game (uID, Playtime, Score) VALUES (:uid, now(), :score)");
  $stmt->bindParam(':uid', $uid, PDO::PARAM_STR);
  $stmt->bindParam(':score', $score, PDO::PARAM_INT);

  $stmt->execute();
 ?>
