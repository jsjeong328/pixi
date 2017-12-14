var left_px=0;//비행기 가로축 좌표 marginLeft
var top_px=0;//비행기 세로축 좌표 marginTop
var move_d=2;//비행기 이동거리
var savex_key;//눌려진 가로키 저장변수
var savey_key;//눌려진 세로키 저장변수
var movex_time;//가로 setInterval 함수 저장변수
var movey_time;//세로 setInterval 함수 저장변수
var x_on=0;//가로방향 키보드 눌림 감지
var y_on=0;//세로방향 키보드 눌림 감지

var savespace_key; // 스페이스 키
var moves_time;
var s_on = 0;
var left_pxs= 0;
var top_pxs = 0;
var move_s = 30;
var br_width=window.outerWidth; //브라우저 가로크기
var br_height=window.innerHeight;//브라우저 세로크기

document.onkeydown = onkey_press;
document.onkyup = onkey_clear;

$('#div1').on('click', function(){
	start_game();
});

function onkey_press(){
	if(event.keyCode==37 || event.keyCode==39){
		savex_key=event.keyCode;
				if(x_on!=1){
					x_on=1;
					movex_time=setInterval(keyx_move,1);
				}
			}
			else if(event.keyCode==38 || event.keyCode==40){
				savey_key=event.keyCode;
				if(y_on!=1){
					y_on=1;
					movey_time=setInterval(keyy_move,1);
				}
			}
			else if(event.keyCode == 32){
				document.styleSheets[0].rules[13].style.display="block";
				savespace_key = event.keyCode;
				left_pxs = left_px;
				top_pxs = top_px;
				if(s_on!=1){
					s_on=1;
					moves_time=setInterval(keys_move,1);
				}
			}
}
function onkey_clear(){
			if(event.keyCode==37 || event.keyCode==39){
				clearInterval(movex_time);
				x_on=0;
				}
			else if(event.keyCode==38 || event.keyCode==40){
				clearInterval(movey_time);
				y_on=0;
			}else if(event.keyCode==32){
				clearInterval(moves_time);
				y_on=0;
			}
}
		////////////////////////
    function keyx_move() {
			if(savex_key==37){
				left_px=left_px-move_d;
				document.styleSheets[0].rules[0].style.marginLeft=left_px+'px';
				if(left_px<-20){
					left_px=-20;
				}
			}

			else if(savex_key==39){
				left_px=left_px+move_d;
			//	left_pxs = left_px;
				document.styleSheets[0].rules[0].style.marginLeft=left_px+'px';
				if(left_px>1800){
					left_px=1800;
				}
			}
		}
		/////////////////////////////
	function keyy_move(){
	if(savey_key==38){
		top_px=top_px-move_d;
	document.styleSheets[0].rules[0].style.marginTop=top_px+'px';
		if(top_px<-300){
			top_px=-300;
		}
	}
	else if(savey_key==40){
		top_px=top_px+move_d;
		document.styleSheets[0].rules[0].style.marginTop=top_px+'px';
		if(top_px>430){
			top_px=430;
		}
	}
}

	function keys_move(){
	 	if(savespace_key==32){
			document.styleSheets[0].rules[13].style.marginLeft=left_pxs+'px';
			document.styleSheets[0].rules[13].style.marginTop=top_pxs+'px';
				left_pxs = left_pxs+move_s;
				if(left_pxs>1650){
					document.styleSheets[0].rules[13].style.display="none";
				}
			}
	}
