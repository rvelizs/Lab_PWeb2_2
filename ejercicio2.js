// Defino la función
function invertir(){
	
	// Capturar el input text
	let cad = document.getElementById("cad").value;
	let invertido = ""; // auxiliar

	for (let i = cad.length - 1; i >= 0; i--) {
		invertido = invertido + cad.charAt(i);
	} // inversión

	document.getElementById("nCad").innerHTML = invertido; // evento
}
