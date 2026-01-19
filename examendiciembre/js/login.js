/**
 * Variable global donde se guardarán los usuarios
 */
let users = [];


/**
 * Función que recoge el array de usuarios y lo asigna a la variable users,
 * recoge los valores que se han introducido en el login y los pasa a la funcion valida mediante un objeto
 */
async function credencialesEnviadas() {
    users = await fetch("http://localhost:3000/users").then(res=> res.json())
    const username = document.getElementById("name").value;
    const password = document.getElementById("pass").value;

    valida({"user": username, "pass": password});
}


/**
 * 
 * @param {*} objUsuario Se le pasa un objeto usuario para buscar las credenciales en el array de usuarios
 * Posteriormente si se ha encontrado redireccionará a datosExamen.html y guardará un objUsuario en el almacenamiento local
 * @returns Objeto de usuario si la validación ha sido satisfactoria
 * @returns Null si no se ha pasado la validación
 */
function valida(objUsuario) {
    const username = objUsuario.user;
    const password = objUsuario.pass;

    const encontrado = users.find(elem=> elem.username === username && elem.password === password);
    console.log(encontrado);
    if (encontrado) {
        const usuario = {"id":encontrado.id, "email":encontrado.email, "username":encontrado.username};
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href="http://127.0.0.1:5500/datosExamen.html";
        return usuario;
    } else {
        alert("El usuario es incorrecto");
        return null;
    }
}

/**
 * En la función main detectamos que se ha pulsado el botón para valdiar las credenciales
 */
const main = () => {
    document.getElementById("enviar").addEventListener("click", credencialesEnviadas);
}

document.addEventListener("DOMContentLoaded", main);