import { get } from "./httpCliente.js";



const cargar=(url)=>{
    get(url)
    .then(json =>{
        cards(json.items)
    })
    .catch(error => console.log(error));
    
}

const cards = (db) => {
    const padre = document.getElementById("caracteres");
    let div;
    db.forEach(element => {;

        div=card(element);
        div.id=`character${element.id}`
        padre.appendChild(div);
    })
}

const card = (objeto) => {
    let fragmento = document.createElement("div");
    const name = document.createElement("p");
    const img = document.createElement("img");
    const gender = document.createElement("p");
    const id = document.createElement("p");
    const button = document.createElement("button");
    button.className = `view view${objeto.id}`;
    button.textContent= "View";
    id.textContent= objeto.id;
    gender.textContent= objeto.gender;
    name.textContent = objeto.name;
    img.src= objeto.image;

    button.addEventListener("click", () => mostrarInfo(objeto))
    
    fragmento.appendChild(id);
    fragmento.appendChild(name);
    fragmento.appendChild(gender);
    fragmento.appendChild(img);
    fragmento.appendChild(button);
    return fragmento;
}

const mostrarInfo= (objeto) => {
    const existente = document.getElementById("cardDestacado");
    if (existente) {
        existente.remove();
    }

    let fragmento = document.createElement("div");
    fragmento.id="cardDestacado";
    fragmento.className = "detalle";
    const name = document.createElement("p");
    const img = document.createElement("img");
    const gender = document.createElement("p");
    const id = document.createElement("p");
    const status = document.createElement("p");
    const specie = document.createElement("p");
    const date = document.createElement("p");
    date.textContent = objeto.createdAt;
    specie.textContent = objeto.species
    status.textContent = objeto.status;
    id.textContent= objeto.id;
    gender.textContent= objeto.gender;
    name.textContent = objeto.name;
    img.src= objeto.image;

    fragmento.appendChild(id);
    fragmento.appendChild(name);
    fragmento.appendChild(gender);
    fragmento.appendChild(img);
    fragmento.appendChild(status);
    fragmento.appendChild(specie);
    fragmento.appendChild(date);
    document.body.innerHTML="";
    document.body.appendChild(fragmento);
}

const main = () => {
    cargar("https://futuramaapi.com/api/characters");
}

document.addEventListener("DOMContentLoaded", main);