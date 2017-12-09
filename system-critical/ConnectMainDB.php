<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$hostname = "localhost:3306";
$username = "root";
$password = "{7akit5low}";
$dbname = "starwars";

$connect = new PDO("mysql:dbname=$dbname;host=$hostname",
$username, $password) or die("DB Connection Failed");
?>
