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
function validar_edad_usuario(edad){
  sw = true;
  if (isNaN(edad) == true){
      sw = false;
  }
  if (edad <0){
    sw = false;
  }
  if (edad < 13 || edad > 110 ){
    sw = false;

  }
  return sw;
}

module.exports.validar_contrasena = validar_contrasena;
