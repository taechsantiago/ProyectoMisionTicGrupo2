function validar_captcha(rcaptcha){
    sw = false;
    if (rcaptcha == "Bogota" || rcaptcha == "BOGOTA" || rcaptcha == "Bogotá" || rcaptcha == "BOGOTÁ"){
         sw = true;
    }
    return sw;
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
