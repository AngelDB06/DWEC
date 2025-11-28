
const mostrarCookies=() => {
    console.log(document.cookie);
    alert(document.cookie);
    let valorTema = devuelveCookie("tema");
    console.log(valorTema)
}

const crearCookie= () => {
    document.cookie = "usuario=Juan";
    document.cookie = "tema=oscuro";
    fCrearCookie("apellido", "Pérez", 7);
}

const devuelveCookie=(nombre) => {
    let name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    const encontrar=ca.find(c => {
        const cookie=c.trim();
        return cookie.startsWith(name);
});
    return encontrar.substring(name.length+1, encontrar.length);
}

const fCrearCookie = (nombre, valor, diasExpiracion) => {
    let d = new Date();
    d.setTime(d.getTime()+ (diasExpiracion*24*60*60*1000));
    let expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre +"="+ valor +";"+expiracion+"path=/";
}

const main = () => {
    document.getElementById("btncrearcookie").addEventListener("click" , crearCookie);
    document.getElementById("btnmostrarcookie").addEventListener("click" , mostrarCookies);
}

document.addEventListener("DOMContentLoaded", function () {
    main();
})