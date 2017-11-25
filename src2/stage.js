function start_game(){
		myairp.src="/img/ship.png";
		div1.style.display="none";
		opst_init();

		x_on=0;
		y_on=0;
		our_airp_inve();
		setTimeout(game_stage_j,500);
		point_count();
	}
