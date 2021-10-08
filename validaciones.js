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

let registros = []

function agregarRegistro(){
  let name = document.getElementById("dato_nombre_usuario").value;
  let age = document.getElementById("dato_edad_usuario").value;
  let password = document.getElementById("dato_contrasena").value;

  var validation_name = validar_nombre_usuario(name);
  var validation_age =validar_edad_usuario(age);
  var validation_password =validar_contrasena(password);

  if (validation_name && validation_age && validation_password){
    console.log("Se ingresa ->"+"name: " + name, "age: " + age, "password: " + password);
    registros.push({usuario: name, edad: age, contrasena: password});
  }
  console.log(registros);
}

function OrdenarArreglo(arreglo){
  arreglo.sort(function (a, b) {
    if (a.edad > b.edad) {
      return 1;
    }
    if (a.edad < b.edad) {
      return -1;
    }
    return 0;
  });
  console.log(arreglo);
  return arreglo;
}
module.exports.validar_nombre_usuario =validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;