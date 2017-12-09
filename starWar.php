<html>
	<head>
	<script type='text/javascript' src="src/myAir.js"></script>
	<script type='text/javascript' src="src/bug.js"></script>
	<script type='text/javascript' src="src/crash.js"></script>
		<style>
			.IMGN1{
				position:absolute;
				left:50px;
				top:400px;
				margin-left:0px;
				margin-top:0px;
			}
			.IMGN2{
				display:none;
				position:absolute;
				left:1400px;
				top:400px;
				margin-left:0px;
				margin-top:0px;
			}
			.IMGN3{
				height:100%;
				background:url('img/ground.png');
			}
			.IMGN4{
				display:none;
				position:absolute;
				left:1400px;
				top:400px;
				margin-left:0px;
				margin-top:0px;
			}
			.IMGN5{
				display:none;
				position:absolute;
				left:1400px;
				top:400px;
				margin-left:0px;
				margin-top:0px;
			}
			.IMGN6{
				display:none;
				position:absolute;
				left:1400px;
				top:400px;
				margin-left:0px;
				margin-top:0px;
			}
			.IMGN7{
				display:none;
				position:absolute;
				left:1400px;
				top:400px;
				margin-left:0px;
				margin-top:0px;
			}
			.DIVN1{
				z-index:40;
				position:fixed;
				left:50%;
				top:50%;
				width:300px;
				height:100px;
				text-align:center;
				color:white;
				font-size:50;
				font-weight:900;
				margin-left:-150px;
				margin-top:-50px;
			}
			.IMGN8{
				display:none;
				position:absolute;
				left:1400px;
				top:400px;
				margin-left:0px;
				margin-top:0px;
			}
			.DIVN2{
				z-index:40;
				position:absolute;
				left:1%;
				top:1%;
				width:300px;
				height:100px;
				text-align:right;
				color:white;
				font-size:50;
				font-weight:900;
			}
			.IMGN9{
				position:absolute;
				left:350px;
				top:20px;
				opacity:0.5;
				width : 5%;
				height: 5%;
			}
			.IMGN10{
				position:absolute;
				left:450px;
				top:20px;
				opacity:0.5;
				width : 5%;
				height: 5%;
			}
			.DIVN3{
				display:none;
				z-index:40;
				position:fixed;
				left:50%;
				top:50%;
				width:500px;
				height:100px;
				text-align:center;
				color:white;
				font-size:50;
				font-weight:900;
				margin-left:-250px;
				margin-top:-50px;

			}
		</style>
	</head>

	<body>
  <div class="IMGN3">
			<img id="img_airp" src="img/ship.png" class="IMGN1">
			<img src="img/bug.png" class="IMGN2">
			<img id="img_airp1" src="img/bug.png" class="IMGN4">
			<img id="img_airp2" src="img/bug.png" class="IMGN5">
			<img id="img_airp3" src="img/bug.png" class="IMGN6">
			<img id="img_airp4" src="img/bug.png" class="IMGN7">
			<img id="img_airp5" src="img/bug.png" class="IMGN8">
			<img id="img_airp6" src="img/ship2.png" class="IMGN9">
			<img id="img_airp7" src="img/ship2.png" class="IMGN10">
			<div style="color:white;font-size:50;font-weight:900">
			Score
			</div>
			<div id="div2" class="DIVN2">
			0
			</div>
			<div id="div1" onclick="start_game()" class="DIVN1">
				START
			</div>
			<div id="div3" onclick="restart_game()" class="DIVN3">
				GAME OVER! RESTART CLICK!
			</div>
</div>
	</body>
</html>
