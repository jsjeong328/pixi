<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$hostname = "localhost:3306";
$username = "cs20101697";
$password = "dbpass";
$dbname = "db20101697";

$connect = new PDO("mysql:dbname=$dbname;host=$hostname",
$username, $password) or die("DB Connection Failed");
?>
