
const mostrarCookies = () => {
    console.log(document.cookie);
}

const crearCookies = () => {
    if (document.cookie=="") {
        const nombre = prompt("Introduce tu nombre: ");
        if (nombre != null) {
            const tiempo = new Date();
            tiempo.setTime(tiempo.getTime()+ 5*60*1000);
            const cookie = document.cookie=`Usuario=${nombre}; expires=${tiempo}path=/`;
        } else {
            alert("Procura introducir un nombre.")
        }
    }
}

const eliminarCookie = (cookie) => {
    document.cookie=`Usuario="";expires=`
}

const main = () => {
    crearCookies();
    mostrarCookies();
}

document.addEventListener("DOMContentLoaded", main);