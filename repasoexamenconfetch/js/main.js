let productos = [];

function getProductos() {
    fetch("http://localhost:3000/productos")
    .then(res => res.json())
    .then(json => {
        productos = json;
        CreaCards(productos);
    })
    .catch(error => console.log(error))
}

function CreaCards(arr) {
    const padre = document.getElementById("container");
    const fragmento = document.createDocumentFragment();

    arr.forEach(producto => {
        fragmento.appendChild(CreaCard(producto));
    });

    padre.appendChild(fragmento);
}

function CreaCard(obj) {
    const div = document.createElement("div");
    const title = document.createElement("p");
    const img = document.createElement("img");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const rating = document.createElement("p");

    title.textContent = obj.title;
    img.src = obj.image;
    description.textContent = obj.description;
    price.textContent = obj.price;
    rating.textContent = "Rating: Rate: "+obj.rating.rate+" - Count: "+obj.rating.count;

    const content = [title, img, description, price, rating];

    content.forEach(elem => {
        div.appendChild(elem);
    })

    div.addEventListener("click", ()=>{
        carridtoAdd(obj.title);
        carritoShow();
    })

    return div;
}

function filtradoEnviado() {
    document.getElementById("enviarfiltrado").addEventListener("click", () => {
        const atributo = document.getElementById("atributo").value;
        const valor = document.getElementById("valor").value;
        if (!valor) {
            mostrarFiltrado(productos);
        } else {
            const filtrado = filtrar({"atributo": atributo, "valor": valor});
            mostrarFiltrado(filtrado);
        }
    })
}

function filtrar(obj) {
    if (obj.atributo==="price") {
        const filtrado = productos.filter(elem => elem.price<obj.valor);

        return filtrado;
    } else if (obj.atributo==="rate") {
        const filtrado = productos.filter(elem => elem.rating.rate<obj.valor);
        return filtrado;
    } else {
        const filtrado = productos.filter(elem => elem.rating.count<obj.valor);
        return filtrado;
    }
}

function mostrarFiltrado(arr) {
    const padre = document.getElementById("container");
    padre.innerHTML="";
    const fragmento = document.createDocumentFragment();

    arr.forEach(producto => {
        fragmento.appendChild(CreaCard(producto));
    });

    padre.appendChild(fragmento);
}

function carridtoAdd(item) {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    carrito.push(item);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

function carritoShow() {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

    const divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML="";

    if (carrito.length===0) {
        return;
    }

    const h2 = document.createElement("h2");
    h2.textContent=`Carrito (${carrito.length} item)`
    divCarrito.appendChild(h2);

    carrito.forEach((elem) => {
        const p = document.createElement("p");
        p.textContent = elem;
        divCarrito.appendChild(p);
    })
}

const main = () => {
    getProductos();
    filtradoEnviado();
}

document.addEventListener("DOMContentLoaded", main);