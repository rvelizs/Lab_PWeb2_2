function quitarG(){

	// Texto
	let url1 = document.getElementById("url1").value;
	let url2 = document.getElementById("url2").value;

	// Usando substring
	let parte1 = url1.substring(24, 27);
	let parte2 = url1.substring(28, 32);
	let parte3 = url1.substring(33);

	let resultado1 = parte1 + " " + parte2 + " " + parte3;

	// Usando replace
	let sinGuiones = url2.replace(/-/g, " ");
	let resultado2 = sinGuiones.substring(24);

	document.getElementById("sinG1").innerHTML = "La nueva cadena de URL (1) es : " + resultado1;
	document.getElementById("sinG2").innerHTML = "La nueva cadena de URL (2) es : " + resultado2;
}
