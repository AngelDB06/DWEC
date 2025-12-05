let db = [];

const cargarDatos = () => {
    fetch("http://localhost:3000/students")
        .then(res=>res.json())
        .then(json => {
            db=json;
            validarCredenciales();
        })
        .catch ( error => console.log("error", error))
}

const botonPulsado=() => {
    document.getElementById("enviado").addEventListener("click", () => {
        cargarDatos();
        
    })
}

const guardarDatos = (objeto) => {
        localStorage.setItem("usuario", objeto.name);
        localStorage.setItem("contraseña", objeto.email);
}


const validarCredenciales = () => {
    const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;
        console.log(usuario);
        console.log(password);
        if (usuario!="" || password != "") {
            const encontrado = db.find(item => item.name === usuario && item.email === password );
            console.log(encontrado);
            if (encontrado) {
                guardarDatos(encontrado);
                console.log("Login correcto");
                window.location.href="http://127.0.0.1:5500/login/index.html"
            } else {
                alert("Usuario no registrado")
            }
        } else {
            alert("Introduce tus credenciales");
        }
}

const main = () => {
    botonPulsado();
}

document.addEventListener("DOMContentLoaded", main);