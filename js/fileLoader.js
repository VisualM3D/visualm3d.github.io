
/**
 * Laden der .petsc Dateien 
*/
function handleFiles(files) {
      // Check for the various File API support.
      if (window.FileReader) {
          // FileReader are supported.
          getAsFloat(files[0]);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    }
// Erzeugung des FileReader und des ArrayBuffer 
function getAsFloat(file){
  
  var reader = new FileReader();
  reader.onload = function(e) {
    parse(e.target.result);
         
  };
  reader.readAsArrayBuffer(file);
}
// Interpretation der Binaerzahlen und Speicherung der umgewandelten Werte in ein Array
function parse(buffer) {
	var arr = new Array;
	var dv= new DataView(buffer);  // Mittels DataView können die Inhalte des Buffers ausgelesen werden
	var first = dv.getInt32(0);    // Ersten 32 Bit 
	var count = dv.getInt32(4);    // Zweiten 32 Bit ->  Anzahl der zu lesenden Daten 
	console.log("First 32 Bit: "+ first);
	console.log("Count: "+ count);
 
	for(var i=1; i<=count; i++){      
		arr[i-1]=dv.getFloat64(i*8);  // Daten werden in Float-Werte umgewandelt und in ein Array gespeichert. 
	}
	redrawData(arr);
}

 