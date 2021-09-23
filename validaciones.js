function validar_contrasena(string){
    const regex = /^[A-Z0-9]{6,}$/i;
    return regex.test(string);
}

module.exports.validar_contrasena = validar_contrasena;