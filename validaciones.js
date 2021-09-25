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
module.exports.validar_nombre_usuario =validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;
