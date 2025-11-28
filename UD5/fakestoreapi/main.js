import db from "./db.json" with {type: 'json'};

const mostrarProductos = (padre, arr) => {
    const fragmento = document.createDocumentFragment();
    padre.innerHTML="";
    arr.forEach(element => {
        const div = document.createElement("div");
        div.style.border="1px solid black";
        div.id = `div${element.id}`;
        const ul = document.createElement("ul");
        ul.style.listStyle="none";
        const id = document.createElement("li");
        const title = document.createElement("li");
        const price = document.createElement("li");
        const image = document.createElement("img");
        const button = document.createElement("button");

        button.textContent = "Ver Info";
        button.type = "button";
        button.addEventListener("click", () => mostrarInfo(div, element.id));
        image.src = element.image;
        price.textContent = element.price+"€";
        title.textContent = "Artículo: "+element.title;
        id.textContent= "ID: "+element.id;
        const content = [id, title, price,image, button];
        content.forEach(nodo => {
            ul.appendChild(nodo);
        })
        div.appendChild(ul);
        fragmento.appendChild(div);
        mostrarInfo(fragmento, element.id)
    });

    padre.appendChild(fragmento);
}

const filtrarProductos = () => {
    const select = document.getElementById("opt");
    select.addEventListener("change", () => {
        if (select.value==="all"){
            mostrarProductos(document.getElementById("productos"), db);
        } else {
            const filtrado = db.filter(element => element.category === select.value);
            mostrarProductos(document.getElementById("productos"), filtrado);
        }
    })
}

const mostrarInfo = (fragmento, id) => {
    const articulo = db.find((element) => element.id === id);
    if (!articulo) return;

    const existingInfo = fragmento.querySelector(".info");
    if (existingInfo) existingInfo.remove();

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const category = document.createElement("p");
    category.textContent = "Categoría: " + articulo.category;

    const description = document.createElement("p");
    description.textContent = "Descripción: " + articulo.description;

    infoDiv.appendChild(category);
    infoDiv.appendChild(description);

    fragmento.appendChild(infoDiv);
};

const main = () => {
    mostrarProductos(document.getElementById("productos"),db);
    filtrarProductos();
    mostrarInfo();
}

document.addEventListener("DOMContentLoaded", main);