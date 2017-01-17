/**
 * Erstellt den Rand auf der Oberflaeche zwischen Land und Wasser
 */

function drawLandBoarder(lsm2){
	for(var i = 0; i < 64; i++){
	    for(var y = 0; y < 128; y++){
			if(parseInt(lsm2[i][y]) == 0){
		        if(i < 63 && i > 0 && y < 127 && y > 0){
		          if(parseInt(lsm2[i+1][y]) != 0){// FALL: obere Seite ist Wasser
		            ctx.fillStyle = "rgb(0,0,0)";
		            ctx.fillRect(y*10,640-i*10,10,3);
		          }
		          if(parseInt(lsm2[i-1][y]) != 0 ) {// FALL: untere Seite ist Wasser
		            ctx.fillStyle = "rgb(0,0,0)";
		            ctx.fillRect(y*10,640-i*10+7,10,3);
		          }
		          if(parseInt(lsm2[i][y+1]) != 0) {// FALL: rechte Seite ist Wasser
		            ctx.fillStyle = "rgb(0,0,0)";
		            ctx.fillRect(y*10+7,640-i*10,3,10);
		          }
		          if(parseInt(lsm2[i][y-1]) != 0 ) {// FALL: linke Seite ist Wasser
		            ctx.fillStyle = "rgb(0,0,0)";
		            ctx.fillRect(y*10,640-i*10,3,10);
		          }
		          if(parseInt(lsm2[i+1][y+1]) != 0){// FALL: obere rechte Seite ist Wasser
		            ctx.fillStyle = "rgb(0,0,0)";
		            ctx.fillRect(y*10+7,640-i*10,3,3);
		          }
		          if(parseInt(lsm2[i+1][y-1]) != 0){// FALL: obere linke Seite ist Wasser
		            ctx.fillStyle = "rgb(0,0,0)";
		            ctx.fillRect(y*10,640-i*10,3,3);
		          }
		          if(parseInt(lsm2[i-1][y+1]) != 0 ) {// FALL: untere rechte Seite ist Wasser
		            ctx.fillStyle = "rgb(0,0,0)";
		            ctx.fillRect(y*10+7,640-i*10+7,3,3);
		          }
		          if(parseInt(lsm2[i-1][y-1]) != 0 ) {// FALL: untere linke Seite ist Wasser
		            ctx.fillStyle = "rgb(0,0,0)";
		            ctx.fillRect(y*10,640-i*10+7,3,3  );
		          }
		        }
		        //Spezial Fall: Der Wert steht an der linken Seite und hat somit keine Werte weiter links
		        if(y==0){
		          if(i<63 && i>0){
		            if(parseInt(lsm2[i+1][y]) != 0){// FALL: obere Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10,640-i*10,10,3);
		            }
		            if(parseInt(lsm2[i-1][y]) != 0 ) {// FALL: untere Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10,640-i*10+7,10,3);
		            }
		            if(parseInt(lsm2[i][y+1]) != 0) {// FALL: rechte Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10+7,640-i*10,3,10);
		            }
		            if(parseInt(lsm2[i+1][y+1]) != 0){// FALL: obere rechte Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10+7,640-i*10,3,3);
		            }
		            if(parseInt(lsm2[i-1][y+1]) != 0 ) {// FALL: untere rechte Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10+7,640-i*10+7,3,3);
		            }
		          }
		        }
		        //Spezial Fall: Der Wert steht an der rechten Seite und hat somit keine Werte weiter rechts
		        if(y==127){
		          if(i<63 && i>0){
		            if(parseInt(lsm2[i+1][y]) != 0){// FALL: obere Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10,640-i*10,10,3);
		            }
		            if(parseInt(lsm2[i-1][y]) != 0 ) {// FALL: untere Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10,640-i*10+7,10,3);
		            }
		            if(parseInt(lsm2[i][y-1]) != 0 ) {// FALL: linke Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10,640-i*10,3,10);
		            }
		            if(parseInt(lsm2[i+1][y-1]) != 0){// FALL: obere linke Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10,640-i*10,3,3);
		            }
		            if(parseInt(lsm2[i-1][y-1]) != 0 ) {// FALL: untere linke Seite ist Wasser
		              ctx.fillStyle = "rgb(0,0,0)";
		              ctx.fillRect(y*10,640-i*10+7,3,3);
		            }
		          }
		        }
			}
	    }    
	}
	
}