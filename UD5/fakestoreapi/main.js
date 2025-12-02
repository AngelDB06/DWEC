let db = [];

function cargarDatos() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();

    xhttp.onload = () => {
    if (xhttp.status === 200) {
        db = JSON.parse(xhttp.responseText);
        mostrarProductos(document.getElementById("productos"), db);
        filtrarProductos();
    } else {
        alert("Error al cargar los datos");
    }
    }
}

function cargarDatosV2() {
    fetch ("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => {
            db=json
            mostrarProductos(document.getElementById("productos"), db);
            filtrarProductos();
        })
        .catch(error => "Error: ", error);
        
}

const mostrarProductos = (padre, arr) => {
    const fragmento = document.createDocumentFragment();
    padre.innerHTML = "";

    arr.forEach(element => {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.id = `div${element.id}`;

        const ul = document.createElement("ul");
        ul.style.listStyle = "none";

        const id = document.createElement("li");
        id.textContent = "ID: " + element.id;

        const title = document.createElement("li");
        title.textContent = "Artículo: " + element.title;

        const price = document.createElement("li");
        price.textContent = element.price + "€";

        const image = document.createElement("img");
        image.src = element.image;

        const button = document.createElement("button");
        button.textContent = "Ver Info";
        button.type = "button";

        button.addEventListener("click", () => mostrarInfo(div, element.id));
        div.addEventListener("click", () => mostrarInfoPorProducto(padre, element.id));

        [id, title, price, image, button].forEach(item => ul.appendChild(item));

        div.appendChild(ul);
        fragmento.appendChild(div);
    });

    padre.appendChild(fragmento);
};

const filtrarProductos = () => {
    const select = document.getElementById("opt");

    select.addEventListener("change", () => {
        if (select.value === "all") {
            mostrarProductos(document.getElementById("productos"), db);
        } else {
            const filtrado = db.filter(e => e.category === select.value);
            mostrarProductos(document.getElementById("productos"), filtrado);
        }
    });
};

const  mostrarInfo=(contenedor, id) => {
    let producto = db.find(p => p.id === id);

    if (producto) {
        let info = contenedor.querySelector(".info");
        if (info) contenedor.removeChild(info);

        let div = document.createElement("div");
        div.className = "info";

        div.innerHTML = "<p>Categoría: " + producto.category + "</p>" +
                        "<p>Descripción: " + producto.description + "</p>";

        contenedor.appendChild(div);
    }
}

const mostrarInfoPorProducto=(padre, id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => {
            mostrarProductos(padre, [json]);
        })
        .catch(error => console.log("Error: ", error))
}

const main = () => {
    document.getElementById("btnCargar").addEventListener("click", () => {
        cargarDatosV2();
    })
};

document.addEventListener("DOMContentLoaded", main);
