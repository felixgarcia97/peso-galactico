function Calcular(){
	var m,g,P;
	m=parseFloat(document.getElementById("Peso").value);
	g=parseFloat(document.getElementById("Gravedad").value);
	//Realizar la operacion
	P=(m*g)/9.8;

	document.getElementById("Resultado").value=P;}

	function Borrar(){
		document.getElementById("Peso").value="";
		document.getElementById("Gravedad").value="";
		document.getElementById("Resultado").value="";
	}