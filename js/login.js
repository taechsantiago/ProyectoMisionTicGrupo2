let registros = [];

function validar_contrasena(string){
    const regex = /^[A-Za-z0-9]{6,}$/;
    return regex.test(string);
}
function validar_nombre_usuario(string) {
    const regex = /^[^0-9 ]([A-Za-z ])+[A-Za-z]+$/;
    return regex.test(string);
}
function validar_edad_usuario(edad){
  sw = true;
  if (isNaN(edad) == true){
      sw = false;
  }
  else if (edad <0){
    sw = false;
  }
  else if (edad < 13 || edad > 110 ){
    sw = false;

  }
  return sw;
}

function agregarRegistro(){
    let name = document.getElementById("dato_nombre_usuario").value;
    let age = document.getElementById("dato_edad_usuario").value;
    let password = document.getElementById("dato_contrasena").value;
  
    var validation_name = validar_nombre_usuario(name);
    var validation_age =validar_edad_usuario(age);
    var validation_password =validar_contrasena(password);
  
    if (validation_name && validation_age && validation_password){
      registros.push({usuario: name, edad: age, contrasena: password});
    }
  }

function validar_captcha(rcaptcha) {
    return rcaptcha.toLowerCase().replace("á", "a") === "bogota";
  }
  
  function iniciar_sesion(usuario, contrasena, rcaptcha) {
    return registros.some(
      (e) =>
        e.usuario === usuario &&
        e.contrasena === contrasena &&
        validar_captcha(rcaptcha)
    );
  }
  
module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.validar_nombre_usuario =validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.agregarRegistro = agregarRegistro;