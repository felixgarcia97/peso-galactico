function validar(){
   var us,co;
   us=document.getElementById("usuario").value;
   co=document.gtElementById("contraseña").value;
   
   if(us=="Felix"&&co=="mendoza"){
   	
   	alert("Tu usuario y contraseña son validos");
   	window.open("peso.html");
}
else{
	alert("Tu usuario y contraseña no son validos");
}
}