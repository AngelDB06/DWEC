

function CargarDatos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contenedorDatos").innerHTML = this.responseText;
        }
        console.log("ReadyState: "+ this.readyState, "-",this.status)
    };
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}

function CargarDatosOnLoadFormateaDatos() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onload = function () {
        let arDatos = JSON.parse(this.responseText);
        let arTitulos = [];
        console.log(arDatos);
        arDatos.forEach(obj => {
            arTitulos.push({title: obj.title, price: obj.price, id: obj.id})
        });
        console.log(arTitulos)
        document.getElementById("contenedorDatos").innerHTML =arDatos[0].title;
        arTitulos.forEach(element => {
            const p = document.createElement("p");
            p.textContent = `ID: ${element.id} Title: ${element.title} Price: ${element.price}`
            document.getElementById("contenedorDatos").appendChild(p);
        })
    }
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}


const main = () => {
    console.log("Cargando script main U6_request");
    document.getElementById("cargaDatos").addEventListener("click", CargarDatosOnLoadFormateaDatos)
}

document.addEventListener("DOMContentLoaded", main);