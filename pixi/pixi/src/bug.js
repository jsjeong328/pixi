var opst_left_px=0;//장애물 비행기 가로축 좌표 marginLeft
var opst_left_px1=0;//장애물 두번째 가로축 좌표
var opst_left_px2=0;
var opst_left_px3=0;
var opst_left_px4=0;
var opst_left_px5=0;

var opst_movex_time;//장애물 비행기 가로 setTimeout 함수 저장변수
var opst_movex_time1;//장애물 두번째 비행기 setTimeout 함수 저장변수
var opst_movex_time2;
var opst_movex_time3;
var opst_movex_time4;
var opst_movex_time5;
var opst_movex_time7;

var game_point_init;

var start_game_first;
var opst_top_px=0;//장애물 비행기 랜덤 출발 세로 좌표 저장변수 marginTop
var opst_top_px1=0;//장애물 두번째 비행기 랜덤 출발 세로 좌표 저장변수
var opst_top_px2=0;
var opst_top_px3=0;
var opst_top_px4=0;
var opst_top_px5=0;

var game_stage=0;//게임 스테이지 저장 변수
var game_count=0;//게임 레벨 카운터
var game_point=0;//점수
var our_airp=3;
var opst_move_d=8;//장애물 비행기 이동거리
var opst_move_s=11;//스폐셜 비행기 이동거리

var opst_left_px7 = 0;
var opst_top_px7=0;
var opst_move7 =2;

function start_game(){
  img_airp.src="img/ship.png";
//  div3.innerHTML="Your Score is " + game_point +"!!";
  div1.style.display="none";
  opst_init();
  x_on=0;
  y_on=0;
  s_on=0;
  our_airp_inve();
  setTimeout(game_stage_j,500);
  point_count();
}
function restart_game(){
  our_airp=3;
  game_stage=0;
  game_point=0;
  div3.style.display="none";
  document.styleSheets[0].rules[10].style.display="block";
  document.styleSheets[0].rules[11].style.display="block";
  start_game();
}
function point_count(){
  game_point=game_point+1;
div2.innerHTML=game_point;
  game_point_init=setTimeout(point_count,1);
}
function stage_message(){
opst_init();
  setTimeout(re_play,2000);
}
function re_play(){
  div1.style.display="none";
  game_stage_j();
}
//게임 스테이지 판별 함수
function game_stage_j(){
  if(game_stage == 0){
  opst_move_f1();
    setTimeout(opst_move_f2,200);
    setTimeout(opst_move_f3,400);
    setTimeout(opst_move_f4,600);
    setTimeout(opst_move_f5,800);
    setTimeout(opst_move_f6,900);
    setTimeout(opst_move_f7,1000);
  }
}
function opst_init(){
    clearTimeout(opst_movex_time);
    clearTimeout(opst_movex_time1);
    clearTimeout(opst_movex_time2);
    clearTimeout(opst_movex_time3);
    clearTimeout(opst_movex_time4);
    clearTimeout(opst_movex_time5);
    clearTimeout(opst_movex_time7);

    opst_top_px=br_height*Math.random()-400;
    opst_top_px1=br_height*Math.random()-400;
    opst_top_px2=br_height*Math.random()-400;
    opst_top_px3=br_height*Math.random()-400;
    opst_top_px4=br_height*Math.random()-400;
    opst_top_px5=br_height*Math.random()-400;
    opst_top_px7 = 430;

    if(opst_top_px > 440)opst_top_px = 440;
    if(opst_top_px1 > 440)opst_top_px1 = 440;
    if(opst_top_px2 > 440)opst_top_px2 = 440;
    if(opst_top_px3 > 440)opst_top_px3 = 440;
    if(opst_top_px4 > 440)opst_top_px4 = 440;
    if(opst_top_px5 > 440)opst_top_px5 = 440;

    if(opst_top_px < -300)opst_top_px = -300;
    if(opst_top_px1 < -300)opst_top_px1 = -300;
    if(opst_top_px2 < -300)opst_top_px2 = -300;
    if(opst_top_px3 < -300)opst_top_px3 = -300;
    if(opst_top_px4 < -300)opst_top_px4 = -300;
    if(opst_top_px5 < -300)opst_top_px5 = -300;

    opst_left_px=280;//장애물 비행기 가로축 좌표
    opst_left_px1=280;//장애물 두번째 가로축 좌표
    opst_left_px2=280;
    opst_left_px3=280;
    opst_left_px4=280;
    opst_left_px5=280;
    opst_left_px7=br_width*Math.random()-300;
    if(opst_left_px7 > 1500) opst_left_px7 = 1500;
    if(opst_left_px7 < 300)  opst_left_px7 = 300;

    document.styleSheets[0].rules[1].style.marginTop=opst_top_px+'px';
    document.styleSheets[0].rules[3].style.marginTop=opst_top_px1+'px';
    document.styleSheets[0].rules[4].style.marginTop=opst_top_px2+'px';
    document.styleSheets[0].rules[5].style.marginTop=opst_top_px3+'px';
    document.styleSheets[0].rules[6].style.marginTop=opst_top_px4+'px';
    document.styleSheets[0].rules[8].style.marginTop=opst_top_px5+'px';
    document.styleSheets[0].rules[16].style.marginTop="0px";

    document.styleSheets[0].rules[1].style.marginLeft="0px";
    document.styleSheets[0].rules[3].style.marginLeft="0px";
    document.styleSheets[0].rules[4].style.marginLeft="0px";
    document.styleSheets[0].rules[5].style.marginLeft="0px";
    document.styleSheets[0].rules[6].style.marginLeft="0px";
    document.styleSheets[0].rules[8].style.marginLeft="0px";

    document.styleSheets[0].rules[1].style.left=br_width+"px";
    document.styleSheets[0].rules[3].style.left=br_width+"px";
    document.styleSheets[0].rules[4].style.left=br_width+"px";
    document.styleSheets[0].rules[5].style.left=br_width+"px";
    document.styleSheets[0].rules[6].style.left=br_width+"px";
    document.styleSheets[0].rules[8].style.left=br_width+"px";
    document.styleSheets[0].rules[16].style.left=opst_left_px7+'px';

    document.styleSheets[0].rules[1].style.display="none";
    document.styleSheets[0].rules[3].style.display="none";
    document.styleSheets[0].rules[4].style.display="none";
    document.styleSheets[0].rules[5].style.display="none";
    document.styleSheets[0].rules[6].style.display="none";
    document.styleSheets[0].rules[8].style.display="none";
    document.styleSheets[0].rules[16].style.display="none";

}
function opst_move_f1(){
  document.styleSheets[0].rules[1].style.display="block";
  opst_left_px=opst_left_px - opst_move_d;
  document.styleSheets[0].rules[1].style.marginLeft=opst_left_px+'px';
  opst_movex_time=setTimeout(opst_move_f1,1);
  if(opst_left_px<=-br_width){
    clearTimeout(opst_movex_time);
    opst_left_px=280;
    document.styleSheets[0].rules[1].style.marginLeft=opst_left_px+'px';
    opst_top_px=br_height*Math.random()-400;
    if(opst_top_px > 440)opst_top_px = 440;
    if(opst_top_px < -300)opst_top_px = -300;
    document.styleSheets[0].rules[1].style.marginTop=opst_top_px+'px';
    opst_move_d=8;//장애물 비행기 이동거리
    opst_move_s=11;
    opst_move_f1();
  }
  if(opst_left_px<=left_px-br_width+150 && opst_left_px>=left_px-br_width-50 && opst_top_px<=top_px+53 && opst_top_px>= top_px-53){
    air_crash(1);
  }
  if(opst_left_px<=left_pxs-br_width+150 && opst_left_px>=left_pxs-br_width-50 && opst_top_px<=top_pxs+33 && opst_top_px>= top_pxs-33){
        game_point = game_point +100;
        document.styleSheets[0].rules[13].style.display="none";
        left_pxs = left_px;
        top_pxs = top_px;
        document.styleSheets[0].rules[13].style.marginLeft=left_pxs+'px';
  			document.styleSheets[0].rules[13].style.marginTop=top_pxs+'px';

    document.styleSheets[0].rules[1].style.display="none";
    clearTimeout(opst_movex_time);
    opst_left_px=280;
    document.styleSheets[0].rules[1].style.marginLeft=opst_left_px+'px';
    opst_top_px=br_height*Math.random()-400;
    if(opst_top_px > 440)opst_top_px = 440;
    if(opst_top_px < -300)opst_top_px = -300;
    document.styleSheets[0].rules[1].style.marginTop=opst_top_px+'px';
    opst_move_d=8;//장애물 비행기 이동거리
    opst_move_s=11;
  opst_move_f1();
  }
}
function opst_move_f2(){
  document.styleSheets[0].rules[3].style.display="block";
  opst_left_px1=opst_left_px1-opst_move_d;
  document.styleSheets[0].rules[3].style.marginLeft=opst_left_px1+'px';
  opst_movex_time1=setTimeout(opst_move_f2,1);
  if(opst_left_px1<=-br_width){
    clearTimeout(opst_movex_time1);
    opst_left_px1=280;
    document.styleSheets[0].rules[3].style.marginLeft=opst_left_px1+'px';
    opst_top_px1=br_height*Math.random()-400;
    if(opst_top_px1 > 440)opst_top_px1 = 440;
    if(opst_top_px1 < -300)opst_top_px1 = -300;
    document.styleSheets[0].rules[3].style.marginTop=opst_top_px1+'px';
    opst_move_d=8;//장애물 비행기 이동거리
    opst_move_s=11;
    opst_move_f2();
  }
  if(opst_left_px1<=left_px-br_width+150 && opst_left_px1>=left_px-br_width-50 && opst_top_px1<=top_px+53 && opst_top_px1>= top_px-53){
    air_crash(2);
  }
  if(opst_left_px1<=left_pxs-br_width+150 && opst_left_px1>=left_pxs-br_width-50 && opst_top_px1<=top_pxs+33 && opst_top_px1>= top_pxs-33){

    game_point = game_point +100;
        document.styleSheets[0].rules[13].style.display="none";
        left_pxs = left_px;
        top_pxs = top_px;
        document.styleSheets[0].rules[13].style.marginLeft=left_pxs+'px';
  			document.styleSheets[0].rules[13].style.marginTop=top_pxs+'px';
document.styleSheets[0].rules[3].style.display="none";
clearTimeout(opst_movex_time1);
opst_left_px1=280;
document.styleSheets[0].rules[3].style.marginLeft=opst_left_px1+'px';
opst_top_px1=br_height*Math.random()-400;
if(opst_top_px1 > 440)opst_top_px1 = 440;
if(opst_top_px1 < -300)opst_top_px1 = -300;
document.styleSheets[0].rules[3].style.marginTop=opst_top_px1+'px';
opst_move_d=8;//장애물 비행기 이동거리
opst_move_s=11;

    opst_move_f2();
  }
}
function opst_move_f3(){
  document.styleSheets[0].rules[4].style.display="block";
  opst_left_px2=opst_left_px2-opst_move_d;
  document.styleSheets[0].rules[4].style.marginLeft=opst_left_px2+'px';
  opst_movex_time2=setTimeout(opst_move_f3,1);
  if(opst_left_px2<=-br_width){
    clearTimeout(opst_movex_time2);
    opst_left_px2=280;
    document.styleSheets[0].rules[4].style.marginLeft=opst_left_px2+'px';
    opst_top_px2=br_height*Math.random()-400;
    if(opst_top_px2 > 440)opst_top_px2 = 440;
    if(opst_top_px2 < -300)opst_top_px2 = -300;
    document.styleSheets[0].rules[4].style.marginTop=opst_top_px2+'px';
    opst_move_d=8;//장애물 비행기 이동거리
    opst_move_s=11;
4
    opst_move_f3();
  }
  if(opst_left_px2<=left_px-br_width+150 && opst_left_px2>=left_px-br_width-50 && opst_top_px2<=top_px+53 && opst_top_px2>= top_px-53){
    air_crash(3);
  }
  if(opst_left_px2<=left_pxs-br_width+150 && opst_left_px2>=left_pxs-br_width-50 && opst_top_px2<=top_pxs+33 && opst_top_px2>= top_pxs-33){
    game_point = game_point +100;
    document.styleSheets[0].rules[13].style.display="none";
    left_pxs = left_px;
    top_pxs = top_px;
    document.styleSheets[0].rules[13].style.marginLeft=left_pxs+'px';
    document.styleSheets[0].rules[13].style.marginTop=top_pxs+'px';

document.styleSheets[0].rules[4].style.display="none";
clearTimeout(opst_movex_time2);
opst_left_px2=280;
document.styleSheets[0].rules[4].style.marginLeft=opst_left_px2+'px';
opst_top_px2=br_height*Math.random()-400;
if(opst_top_px2 > 440)opst_top_px2 = 440;
if(opst_top_px2 < -300)opst_top_px2 = -300;
document.styleSheets[0].rules[4].style.marginTop=opst_top_px2+'px';
opst_move_d=8;//장애물 비행기 이동거리
opst_move_s=11;

    opst_move_f3();
  }
}
function opst_move_f4(){
  document.styleSheets[0].rules[5].style.display="block";
  opst_left_px3=opst_left_px3-opst_move_d;
  document.styleSheets[0].rules[5].style.marginLeft=opst_left_px3+'px';
  opst_movex_time3=setTimeout(opst_move_f4,1);
  if(opst_left_px3<=-br_width){
    clearTimeout(opst_movex_time3);
    opst_left_px3=280;
    document.styleSheets[0].rules[5].style.marginLeft=opst_left_px3+'px';
    opst_top_px3=br_height*Math.random()-400;
    if(opst_top_px3 > 440)opst_top_px3 = 440;
    if(opst_top_px3 < -300)opst_top_px3 = -300;
    document.styleSheets[0].rules[5].style.marginTop=opst_top_px3+'px';
    opst_move_d=8;//장애물 비행기 이동거리
    opst_move_s=11;

    opst_move_f4();
  }
  if(opst_left_px3<=left_px-br_width+150 && opst_left_px3>=left_px-br_width-50 && opst_top_px3<=top_px+53 && opst_top_px3>= top_px-53){
    air_crash(4);
  }
  if(opst_left_px3<=left_pxs-br_width+150 && opst_left_px3>=left_pxs-br_width-50 && opst_top_px3<=top_pxs+33 && opst_top_px3>= top_pxs-33){
  game_point = game_point +100;
        document.styleSheets[0].rules[13].style.display="none";
        left_pxs = left_px;
        top_pxs = top_px;
        document.styleSheets[0].rules[13].style.marginLeft=left_pxs+'px';
  			document.styleSheets[0].rules[13].style.marginTop=top_pxs+'px';

document.styleSheets[0].rules[5].style.display="none";
clearTimeout(opst_movex_time3);
opst_left_px3=280;
document.styleSheets[0].rules[5].style.marginLeft=opst_left_px3+'px';
opst_top_px3=br_height*Math.random()-400;
if(opst_top_px3 > 440)opst_top_px3 = 440;
if(opst_top_px3 < -300)opst_top_px3 = -300;
document.styleSheets[0].rules[5].style.marginTop=opst_top_px3+'px';
opst_move_d=8;//장애물 비행기 이동거리
opst_move_s=11;

    opst_move_f4();
  }
}
function opst_move_f5(){
  document.styleSheets[0].rules[6].style.display="block";
  opst_left_px4=opst_left_px4-opst_move_d;
  document.styleSheets[0].rules[6].style.marginLeft=opst_left_px4+'px';
  opst_movex_time4=setTimeout(opst_move_f5,1);
  if(opst_left_px4<=-br_width){
    clearTimeout(opst_movex_time4);
    opst_left_px4=280;
    document.styleSheets[0].rules[6].style.marginLeft=opst_left_px4+'px';
    opst_top_px4=br_height*Math.random()-400;
    if(opst_top_px4 > 440)opst_top_px4 = 440;
    if(opst_top_px4 < -300)opst_top_px4 = -300;
    document.styleSheets[0].rules[6].style.marginTop=opst_top_px4+'px';
    opst_move_d=8;//장애물 비행기 이동거리
    opst_move_s=11;

    opst_move_f5();

  }
  if(opst_left_px4<=left_px-br_width+150 && opst_left_px4>=left_px-br_width-50 && opst_top_px4<=top_px+53 && opst_top_px4>= top_px-53){
    air_crash(5);
  }
  if(opst_left_px4<=left_pxs-br_width+150 && opst_left_px4>=left_pxs-br_width-50 && opst_top_px4<=top_pxs+33 && opst_top_px4>= top_pxs-33){
    game_point = game_point +100;
        document.styleSheets[0].rules[13].style.display="none";
        left_pxs = left_px;
        top_pxs = top_px;
        document.styleSheets[0].rules[13].style.marginLeft=left_pxs+'px';
  			document.styleSheets[0].rules[13].style.marginTop=top_pxs+'px';

    document.styleSheets[0].rules[6].style.display="none";
    clearTimeout(opst_movex_time4);
    opst_left_px4=280;
    document.styleSheets[0].rules[6].style.marginLeft=opst_left_px4+'px';
    opst_top_px4=br_height*Math.random()-400;
    if(opst_top_px4 > 440)opst_top_px4 = 440;
    if(opst_top_px4 < -300)opst_top_px4 = -300;
    document.styleSheets[0].rules[6].style.marginTop=opst_top_px4+'px';
    opst_move_d=8;//장애물 비행기 이동거리
    opst_move_s=11;
    opst_move_f5();
  }
}
function opst_move_f6(){
  document.styleSheets[0].rules[8].style.display="block";
  opst_left_px5=opst_left_px5-opst_move_s;
  document.styleSheets[0].rules[8].style.marginLeft=opst_left_px5+'px';
  opst_movex_time5=setTimeout(opst_move_f6,1);
  if(opst_left_px5<=-br_width){
    clearTimeout(opst_movex_time5);
    opst_left_px5=280;
    document.styleSheets[0].rules[8].style.marginLeft=opst_left_px5+'px';
    opst_top_px5=br_height*Math.random()-400;
    if(opst_top_px5 > 440)opst_top_px5 = 440;
    if(opst_top_px5 < -300)opst_top_px5 = -300;
    document.styleSheets[0].rules[8].style.marginTop=opst_top_px5+'px';
    opst_move_d=8;//장애물 비행기 이동거리
    opst_move_s=11;
    opst_move_f6();
  }
  if(opst_left_px5<=left_px-br_width+150 && opst_left_px5>=left_px-br_width-50 && opst_top_px5<=top_px+53 && opst_top_px5>= top_px-53){
    air_crash(6);
  }
  if(opst_left_px5<=left_pxs-br_width+150 && opst_left_px5>=left_pxs-br_width-50 && opst_top_px5<=top_pxs+33 && opst_top_px5>= top_pxs-33){
    game_point = game_point +100;
    document.styleSheets[0].rules[13].style.display="none";
    left_pxs = left_px;
    top_pxs = top_px;
    document.styleSheets[0].rules[13].style.marginLeft=left_pxs+'px';
    document.styleSheets[0].rules[13].style.marginTop=top_pxs+'px';
    document.styleSheets[0].rules[8].style.display="none";
    clearTimeout(opst_movex_time5);
    opst_left_px5=280;
    document.styleSheets[0].rules[8].style.marginLeft=opst_left_px5+'px';
    opst_top_px5=br_height*Math.random()-400;
    if(opst_top_px5 > 440)opst_top_px5 = 440;
    if(opst_top_px5 < -300)opst_top_px5 = -300;
    document.styleSheets[0].rules[8].style.marginTop=opst_top_px5+'px';
    opst_move_d=8;//장애물 비행기 이동거리
    opst_move_s=11;
    opst_move_f6();
  }
}
function opst_move_f7()
{
document.styleSheets[0].rules[16].style.display="block";
  opst_top_px7 = opst_top_px7 - opst_move7 - 1;
  document.styleSheets[0].rules[16].style.marginTop = opst_top_px7+'px';
  opst_movex_time7 = setTimeout(opst_move_f7,1);
  if(opst_top_px7 < -300 ){
    clearTimeout(opst_movex_time7);
    opst_top_px7 = 430;
    document.styleSheets[0].rules[16].style.marginTop = opst_top_px7+'px';
    opst_left_px7 = br_width * Math.random() - 300;
    if(opst_left_px7 > 1500)  opst_left_px7 = 1500;
    if(opst_left_px7 < 300)  opst_left_px7 = 300;
    document.styleSheets[0].rules[16].style.left=opst_left_px7+'px';
    opst_move7 = 2;
    opst_move_f7();
  }
  if(opst_left_px7<=left_px +130 && opst_left_px7>=left_px -30&& opst_top_px7<=top_px+33 && opst_top_px7>= top_px-33){
    air_crash(7);
  }
  if(opst_left_px7<=left_pxs +130 && opst_left_px7>=left_pxs- 30&& opst_top_px7<=top_px+33 && opst_top_px7>= top_px-33){
    game_point = game_point +1000;
    document.styleSheets[0].rules[13].style.display="none";
    left_pxs = left_px;
    top_pxs = top_px;
    document.styleSheets[0].rules[13].style.marginLeft=left_pxs+'px';
    document.styleSheets[0].rules[13].style.marginTop=top_pxs+'px';
    document.styleSheets[0].rules[16].style.display="none";
    clearTimeout(opst_movex_time7);
    opst_top_px7=430;
    document.styleSheets[0].rules[16].style.marginTop=opst_top_px7+'px';
    opst_left_px7 = br_width * Math.random() - 300;
    if(opst_left_px7 > 1500)  opst_left_px7 = 1500;
    if(opst_left_px7 < 300)  opst_left_px7 = 300;
    document.styleSheets[0].rules[8].style.marginleft=opst_left_px7+'px';
    opst_move7 = 2;
    opst_move_f7();
  }
}
