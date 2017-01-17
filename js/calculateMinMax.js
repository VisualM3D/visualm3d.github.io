/**
 * Berechnung des kleinsten bzw. groeßten Wertes aus dem Datensatz
 */

function calculateMax(dat){
	var max2=-9999999999999;
	for(var j = 0; j < dat.length; j++){
		if(dat[j] > max2){
			max2 = dat[j];
		}
	}
	return max2;
}

function calculateMin(dat){
	var min2 =99999999999999;
	for(var j = 0; j < dat.length; j++){
		if(dat[j] < min2){
	        min2 = dat[j];
	      }
	}
	return min2;
}