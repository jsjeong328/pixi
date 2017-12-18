<?php
session_start();
if(!isset($_SESSION["uid"])){
  header('Location: api/user/login.php');
}
?>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/UserControl.css">
  </head>
  <body>

    <div class="user-control-window">
      <div class="menu-title">MENU</div>
      <hr>
      <a href="starWar.php">PLAY</a>
      <hr>
      <a href="api/score/show.php">SCORE BOARD</a>
    </div>

  </body>
</html>
