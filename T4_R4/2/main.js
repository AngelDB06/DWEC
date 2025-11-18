const formularioValidacion = () => {
        const form = document.getElementById("formRegistro");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let valido = true;

        const regexTexto = /^[A-Za-zÁÉÍÓÚñÑ ]+$/;
        const regexDni = /^\d{8}[A-Za-z]$/;
        const regexTelefono = /^[679]\d{8}$/; 
        const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        const regexUsuarioNum = /\d/;
        const regexUsuarioPuntuacion = /[.,:;!?_-]/;

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const dni = document.getElementById("dni").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const usuario = document.getElementById("usuario").value.trim();

        if (!regexTexto.test(nombre)) {
            valido = false;
            document.getElementById("errorNombre").innerText = "Nombre inválido (solo letras).";
        } else document.getElementById("errorNombre").innerText = "";

        if (!regexTexto.test(apellidos)) {
            valido = false;
            document.getElementById("errorApellidos").innerText = "Apellidos inválidos (solo letras).";
        } else document.getElementById("errorApellidos").innerText = "";

        if (!regexDni.test(dni)) {
            valido = false;
            document.getElementById("errorDni").innerText = "Formato DNI inválido (8 números + letra).";
        } else document.getElementById("errorDni").innerText = "";

        if (!regexTelefono.test(telefono)) {
            valido = false;
            document.getElementById("errorTelefono").innerText = "Teléfono inválido (9 dígitos, empieza por 6, 7 o 9).";
        } else document.getElementById("errorTelefono").innerText = "";

        if (!regexEmail.test(email)) {
            valido = false;
            document.getElementById("errorEmail").innerText = "Email inválido.";
        } else document.getElementById("errorEmail").innerText = "";

        if (usuario.length < 8 ||
            !regexUsuarioNum.test(usuario) ||
            !regexUsuarioPuntuacion.test(usuario)) 
        {
            valido = false;
            document.getElementById("errorUsuario").innerText =
                "Debe tener mínimo 8 caracteres, un número y un signo de puntuación.";
        } else document.getElementById("errorUsuario").innerText = "";

        if (valido) {
            alert("Registro completado con éxito.");

        }
    })
}


const main = () => {
    formularioValidacion()
}

document.addEventListener("DOMContentLoaded", main);