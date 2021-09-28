
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
   let registros =[9,5,4,6,1,7,8,2,11,0,3];
   OrdenarArreglo(registros);
}
function OrdenarArreglo(arreglo){
  cad = "";
  console.log("arreglo ordando1: " + arreglo);
  for (let i = 0; i <= arreglo.length-1; i++) {
    for (let j = i+1; j <= arreglo.length; j++) {
        if (arreglo[j] < arreglo[i]){
          Auxiliar = arreglo[i];
          arreglo[i] = arreglo[j];
          arreglo[j] = Auxiliar;
        }
    }


  }
  alert("Arreglo ordenado" + arreglo);
  /*for(i of arreglo){
    console.log(i);
  }*/
  //console.log("arreglo ordando: " + arreglo);
}
module.exports.validar_nombre_usuario =validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
