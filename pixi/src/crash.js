function air_crash(a){
  var img_airp=document.getElementById("img_airp");
  img_airp.src="img/bomb.png";
  clearTimeout(opst_movex_time);
  clearTimeout(opst_movex_time1);
  clearTimeout(opst_movex_time2);
  clearTimeout(opst_movex_time3);
  clearTimeout(opst_movex_time4);
  clearTimeout(opst_movex_time5);
  clearTimeout(opst_movex_time7);
  clearTimeout(game_point_init);

  our_airp=our_airp-1;
  game_count=0;
  clearInterval(movex_time);
  clearInterval(movey_time);
  x_on=1;
  y_on=1;
  if(our_airp==0){
  div3.style.display="block";
   over_game();
 }
  else {
    setTimeout(start_game,3000);
  }
}
function our_airp_inve(){
  if(our_airp==1){
    document.styleSheets[0].rules[10].style.display="none";
    document.styleSheets[0].rules[11].style.display="none";
  }
  else if(our_airp==2){
    document.styleSheets[0].rules[10].style.display="block";
    document.styleSheets[0].rules[11].style.display="none";
  }
  else if(our_airp==3){
    document.styleSheets[0].rules[10].style.display="block";
    document.styleSheets[0].rules[11].style.display="block";
  }
}
function over_game(){
//  div3.innerHTML="Your Score is " + game_point +"!!";
  $.ajax({
      type: 'post'
    , url: 'api/score/update.php'
    , dataType: "json"
    , data: {"score" : game_point}
  });
  // div3.style.display="block";
}
