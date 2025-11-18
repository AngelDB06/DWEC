function validarMayuscula(texto) {
    const regex = /[A-Z]/;
    return regex.test(texto);
}

function validarCaracteresEspeciales(texto) {
    const regex = /[!@#$%^&]/;
    return regex.test(texto);
}

function validarCorreo(correo) {
    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}

function validarTarjetaCredito(numero) {
    const regex = /^\d{13,19}$/;
    return regex.test(numero);
}

function validarLongitud(texto) {
    return texto.length >= 8;
}

function validarNumero(texto) {
    const regex = /\d/;
    return regex.test(texto);
}

const main = () => {
    console.log(validarMayuscula("Hola"));
console.log(validarCaracteresEspeciales("Hola!"));
console.log(validarCorreo("test@correo.com"));
console.log(validarTarjetaCredito("12345678901234A6"));
console.log(validarLongitud("1234567"));
console.log(validarNumero("abc3"));

}

document.addEventListener("DOMContentLoaded", main);