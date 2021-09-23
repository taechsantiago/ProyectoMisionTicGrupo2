function validar_contrasena(string){
    const regex = /^[A-Z0-9]{6,}$/i;
    return regex.test(string);
}

function validar_nombre_usuario(string) {
    const regex = /^[^0-9 ]{1}([A-Z ])+[A-Z]+$/;
    return regex.test(string);
}


module.exports.validar_nombre_usuario =validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;