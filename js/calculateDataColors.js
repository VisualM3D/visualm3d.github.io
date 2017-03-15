/**
 * Berechnet die Farben fuer jeden einzelnen Datenpunkt
 * @param dat Datensatz
 * @param lsm2 Landseamask
 * @param step Skalaschritt
 * @param min  Skalaminimum
 * @param depth Anzeigetiefe
 */

function calculateDataColors(dat, lsm2, step, min, depth) {
	var index = 0;
	for(var i = 0; i < 64; i++){
		for(var y = 0; y < 128; y++){
			//Einfaerbung von Land
			if(parseInt(lsm2[i][y]) == 0){
				ctx.fillStyle = "rgb(225,225,225)";
				ctx.fillRect(y*10+2,640-i*10+2,6,6);
			//Einfaerbung von Wasser welches nicht tief genug ist
			}else if (parseInt(lsm2[i][y]) < parseInt(depth)){
				ctx.fillStyle = "rgb(255,255,255)";
				ctx.fillRect(y*10,640-i*10,10,10);
			}else{ // Wasser einfaerbung
				var d = step*(dat[index+parseInt(depth-1)]-min); //Errechnung des Skalawertes anhand des Datenwertes
				// Einfaerbungs umrechnung
				// Wert  Farbe
				// min = rgb(255,0,0);
				// 1/4 = rgb(125,125,0);
				// 2/4 = rgb(0,255,0);
				// 3/4 = rgb(0,125,125);
				// max = rgb(0,0,255);
				if(parseInt(d) < 255){
					ctx.fillStyle = 'rgb(0,'+ Math.floor((parseInt(d) - 0)) +','+ Math.floor(255 - (parseInt(d) - 0)) +')';
					ctx.fillRect(y*10,640-i*10,10,10);
				}else{
					ctx.fillStyle = 'rgb('+ Math.floor((parseInt(d) - 255)) +','+ Math.floor(255 - (parseInt(d) - 255)) +',0)';
					ctx.fillRect(y*10,640-i*10,10,10);
				}
			}
		index = parseInt(index) + parseInt(lsm2[i][y]);
		}
	} 
}
/**
 * Mal die Oberflaeche mit nur Land
 * @param lsm2 landseamask
 */

function landDataColors(lsm2){
	var index = 0;
	for(var i = 0; i < 64; i++){
		for(var y = 0; y < 128; y++){
			if(parseInt(lsm2[i][y]) == 0){
				ctx.fillStyle = "rgb(225,225,225)";
				ctx.fillRect(y*10+2,640-i*10+2,6,6);
			}
		}
	} 
}

function calculateProfileDataColors(dat, lsm2, step, min, latitude) {
	var index = 0;
	for(var counter2 = 0; counter2 < 64; counter2++ ){
		for(var i = 0 ; i < 128 ; i++){
			if(latitude == i){
				var bisherDepth=0;
				for(var counter = 1; counter <= 15; counter++){
					tiefe=calcDepthdimension(counter);
					if(lsm2[counter2][i]-counter >= 0){
						var d = step*(dat[index+parseInt(counter-1)]-min); //Errechnung des Skalawertes anhand des Datenwertes
						// Einfaerbungs umrechnung
						// Wert  Farbe
						// min = rgb(255,0,0);
						// 1/4 = rgb(125,125,0);
						// 2/4 = rgb(0,255,0);
						// 3/4 = rgb(0,125,125);
						// max = rgb(0,0,255);
						if(parseInt(d) < 255){
							ctxProfile.fillStyle = 'rgb(0,'+ Math.floor((parseInt(d) - 0)) +','+ Math.floor(255 - (parseInt(d) - 0)) +')';
							ctxProfile.fillRect(630-counter2*10,bisherDepth,10,tiefe+2);
						}else{
							ctxProfile.fillStyle = 'rgb('+ Math.floor((parseInt(d) - 255)) +','+ Math.floor(255 - (parseInt(d) - 255)) +',0)';
							ctxProfile.fillRect(630-counter2*10,bisherDepth,10,tiefe+2);
						}
//						
//						if(counter==15){
//							if(lsm2[counter2][i]==15){
//							console.log("lsm: "+ lsm2[counter2][i] + "dat: " + dat[index+parseInt(counter-1)] + "d: " +d );
//							}
//						}
					}
					bisherDepth=bisherDepth+tiefe+2;
					
				}
			}
			index = parseInt(index) + parseInt(lsm2[counter2][i]);		
		}
	}

}
