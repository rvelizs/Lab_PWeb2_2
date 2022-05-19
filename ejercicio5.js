function generarDimensiones() {
	
	var numElementos = document.getElementById("n").value;
	// Para crear la distribución
	fil = Math.floor(Math.random() * numElementos) + 1;
	col = 0;
	// *
	if(numElementos % fil != 0) {
		col = Math.floor(numElementos / fil) + 1;
	}
	else {
		col = numElementos / fil;
	}

	console.log(fil + " ; " + col);
}


