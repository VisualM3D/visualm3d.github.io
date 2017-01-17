/**
 * Zeichnen der Skala für den angegebenen Wertebereich auf 2 Nachkommastellen gerundet.
 * @param max2 Maximal Wert
 * @param min2 Minimal Wert
 */

function doScala(max2, min2){
	var scalaSteps = 510/64;
	//Erstellung von Farbbalken für jeden Skalaschritt
	for(var i = 0 ; i < 64 ; i++){
		var value = i*scalaSteps;
		if(parseInt(value) < 255){
			ctx.fillStyle = 'rgb('+ Math.floor(255 - (parseInt(value) - 0)) +','+ Math.floor((parseInt(value) - 0)) +',0)';
		}else{
			ctx.fillStyle = 'rgb(0,'+ Math.floor(255 - (parseInt(value) - 255)) +','+ Math.floor((parseInt(value) - 255)) +')';
		}
		ctx.fillRect(1300, i*10, 15, 10);
	}
	var middle = (parseFloat(max2) + parseFloat(min2))/2;
	
	//beschriftung der Skala
	ctx.font = "bold 30px serif";
	ctx.fillStyle = 'rgb(255,0,0)';
	ctx.fillText(Math.round(max2*100)/100, 1320, 30); // Math.round rundet die Werte.
	ctx.fillStyle = 'rgb(0,255,0)';
	ctx.fillText(Math.round(middle*100)/100, 1320, 320);
	ctx.fillStyle = 'rgb(0,0,255)';
	ctx.fillText(Math.round(min2*100)/100, 1320, 635);
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 9, 1281, 1);
	ctx.fillRect(0, 639, 1281, 1);
	ctx.fillRect(0, 9, 1, 640);
	ctx.fillRect(1280, 9, 1, 640);
}