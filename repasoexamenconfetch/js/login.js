async function getUsers() {
    await fetch ("http://localhost:3000/usuarios")
    .then(res => res.json())
    .then(json => valida(json))
    .catch(error => console.log(error))
}

function valida(arr) {
    const username = document.getElementById("name").value
    const password = document.getElementById("pass").value

    const encontrado = arr.find(user => user.username == username && user.password == password);

    if (encontrado) {
        const usuario = {"id": encontrado.id, "email": encontrado.email, "username": encontrado.username}
        window.location.href="http://127.0.0.1:5500/repasoexamenconfetch/datos.html"
        return usuario;
    } else {
        return null;
    }
}


const main = () => {
    document.getElementById("enviar").addEventListener("click", getUsers);
}

document.addEventListener("DOMContentLoaded", main);