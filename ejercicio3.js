function calcDiasAqp(){
	
	// Fecha actual
	var hoy = new Date();

	// Día de Arequipa
	var dAqp = new Date("08/15/2022");
	
	// Con .getTime obtengo el número de milisegundos
	
	var porMin = 1000 * 60; // 1 000 milisegundos en un segundo por 60 segundos (1 minuto)
	var porHor = porMin * 60; // 60 minutos (1 hora)
	var porD = porHor * 24; // 24 horas (1 día) -> porD es el número de milisegundos en un día
	
	// Cálculo del número de días hasta AQP y ACTUAL, respectivamente
	let diasAqp = Math.round(dAqp.getTime() / porD);
	let diasAct = Math.round(hoy.getTime() / porD);

	// Cálculo de días faltantes
	var numDiasAqp = diasAqp - diasAct;

	document.getElementById("nDias").innerHTML = "Faltan " + numDiasAqp + " días"; // evento
}
