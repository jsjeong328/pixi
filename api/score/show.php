<?php
session_start();
require '../../system-critical/ConnectMainDB.php';

$uid = $_SESSION['uid'];

$stmt = $connect->prepare("select * from Game where uID=:uid");
$stmt->bindParam(':uid', $uid, PDO::PARAM_STR);
$stmt->execute();
$result = $stmt->fetchAll();

echo '<html>
  <head>
    <link rel="stylesheet" type="text/css" href="../../css/ScoreBoard.css">
  </head>
  <body>

    <div class="user-control-window">
      <div id="board">';
if(count($result)==0){
  echo "<h1>No Game Result</h1>";
}
foreach($result as $key){
  echo $key['Playtime'].' | '.$key['Score'].'</br>';
}

  echo '</div>
</div>
</body>
</html>';
?>
