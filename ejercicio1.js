// Obtener fecha (día) actual
const fecha = new Date();
const dia = fecha.getDate();

// Cálculo de "d"
let d = (dia % 7) - 1;

// Llamada de función
console.log("Número de día: ", d, " (", new_Date(d), ")");

// Función de cálculo
function new_Date(d)  {
	if (d == 0) {
		return "Domingo";
	} else if (d == 1) {
		return "Lunes";
	} else if (d == 2) {
		return "Martes";
	} else if (d == 3) {
		return "Miércoles";
	} else if (d == 4) {
		return "Jueves";
	} else if (d == 5) {
		return "Viernes";
	} else if (d == 6) {
		return "Sábado";
	}
}

