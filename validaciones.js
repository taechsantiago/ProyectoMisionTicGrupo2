/*let edad = document.getElementById("dato_edad_usuario").value;
validar_edad_usuario(edad);
alert("dato afuera"+ edad);*/

/*document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("dato_edad_usuario").addEventListener('submit', validar_edad_usuario);
});*/
function enviar_formulario(){
  console.log("Enviando formulario...");
  var edad = document.getElementById("dato_edad_usuario").value;
  alert(edad);
  return false;
}
function validar_contrasena(string){
    const regex = /^[A-Z0-9]{6,}$/i;
    return regex.test(string);
}
function validar_edad_usuario(Num){
  sw = true;
  var edad = document.getElementById("dato_edad_usuario").value;
  if (typeof(edad) != "number"){
      sw = false;
      alert("entro primera condicion");
  }
  if (edad <0){
    sw = false;
    alert("entro segunda condicion");
  }
  if (edad < 13 || edad > 110 ){
    sw = false;
    alert("entro tercera condicion");
  }
  console.log(sw);
  return sw;
}

module.exports.validar_contrasena = validar_contrasena;
