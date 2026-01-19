import { cadJSonUsuarios  } from "../bd/BDExamen.js";

const usuarios = JSON.parse(cadJSonUsuarios);

/**
 * Para la función valida se cogerán los valores de los inputs introducidos en el html
 * y se buscarán en el array de objetos usuarios
 * 
 * @returns null si no se ha encontrado el usuario o no se ha encontrado nada, un objeto usuario si la validación ha sido correcta
 */

function valida() {
    const username = document.getElementById("name").value;
    const password = document.getElementById("pass").value;


    if (username!="" && password!="") {
        const encontrado = usuarios.find(user => user.username === username && user.password === password);
        if (encontrado) {
            const usuario = {"id": encontrado.id, "email": encontrado.email, "username": encontrado.username};
            window.location.href="http://127.0.0.1:5500/repasoexamen/datos.html";
            return usuario;
        } else {
            alert("El usuario es incorrecto")
            return null;
        }
    } else {
        return null;
    }

}


/**
 * Funcion main captura si se ha pulsado sobre el botón enviar y ejecuta la función valida
 */
const main = () => {
    document.getElementById("enviar").addEventListener("click", () => {
        console.log(valida());
    });
}

document.addEventListener("DOMContentLoaded", main);