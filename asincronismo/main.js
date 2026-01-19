function mostrarCards(arr) {
    const padre = document.getElementById("container");
    const fragmento = document.createDocumentFragment();

   arr.forEach(element => {
    console.log(element);
    const div = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");

    img.src = element.image;
    name.textContent = element.name;

    div.appendChild(img);
    div.appendChild(name);

     fragmento.appendChild(div);
   });

     padre.appendChild(fragmento);
}

async function devuelvePersonajes() {
    const API_URL = "https://futuramaapi.com/api/characters";
    const charactersP=await fetch(API_URL).then(res=>res.json());
    
    mostrarCards(charactersP.items);
    return charactersP.items;
}

async function cargarUsuarios() {
    const API_URL = "https://futuramaapi.com/api/users";
    const users=await fetch(API_URL).then(res=>res.json());

    validarCredenciales(users.items);
    return users.items;
}

function validarCredenciales(arr) {
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const encontrado = arr.find(user => user.name===usuario && user.surname === password);

    if (encontrado) {
        guardarDatos(encontrado);
        window.location.href="http://127.0.0.1:5500/asincronismo/index.html";
    } else {
        alert("inicio de sesión incorrecto");
    }
}

function guardarDatos(user) {
    sessionStorage.setItem("usuario", user.name);
    sessionStorage.setItem("password", user.surname);
}

function botonPulsado() {
    document.getElementById("enviado").addEventListener("click", () => {
        cargarUsuarios();
    })
}

function comprobarSesion() {
    const usuario = sessionStorage.getItem("usuario");

    if (!usuario) {
        window.location.href="http://127.0.0.1:5500/asincronismo/login.html"
    }
}

const main = () => {
    if (document.getElementById("enviado")) {
        botonPulsado();
    }
    if (document.getElementById("container")) {
        devuelvePersonajes();
        comprobarSesion();
    }

}

document.addEventListener("DOMContentLoaded", main);