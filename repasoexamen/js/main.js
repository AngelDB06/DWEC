import { cadJsonBDCatetorias, cadJsonBDProductos, cadJSonUsuarios  } from "../bd/BDExamen.js";

const categorias = JSON.parse(cadJsonBDCatetorias);
const productos = JSON.parse(cadJsonBDProductos);
const usuarios = JSON.parse(cadJSonUsuarios);


/**
 * Funcion para mostrar los productos que coge el contenedor donde vamos a querer mostrarlo todo
 * y le agrega los productos que creamos con la funcion CreaCard
 */
function CreaCards() {
    const padre = document.getElementById("container")
    const fragmento = document.createDocumentFragment();
    productos.forEach(product => {
        fragmento.appendChild(CreaCard(product));
    });
    padre.appendChild(fragmento);
}


/**
 * Funcion que crea los productos para mostrarlos en la función anterior
 * @param {*} obj 
 * @returns Devuelve un producto ya creado para mostrar
 */
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
        rating.textContent = "Rating: Rate: "+obj.rating.rate+" - Count: "+ obj.rating.count

        const content = [title, img, description, price, rating];
        content.forEach(elem => {
            div.appendChild(elem)
        });

        div.addEventListener("click", () => {
            carritoAdd(obj.title);
            carritoShow();
        })
        return div;
}


/**
 * Función que detecta que se ha solicitado un filtrado, 
 * posteriormente recoge el atributo que se ha querido filtrar y el valor, se manda a la función filtrar la cual devuelve un array
 * que se manda a la funcion mostrarFiltrado que limpiará el html y mostrará los elementos que pasan el filtro.
 * 
 * Si no se ha enviado ningún valor o simplemente después de haber filtrado productos se quieren visualizar todos de nuevo
 * llamará a la función mostrarFiltrado pasandole como parámetro el array productos para mostrarlo todo
 */
function filtroActivado() {
    document.getElementById("enviarfiltro").addEventListener("click", () => {
        const atributo = document.getElementById("filtrar").value;
        const valor = document.getElementById("valor").value;

        if (!valor) {
            mostrarFiltrado(productos)
        } else {
            const filtrado = filtra({"atributo": atributo, "valor": valor});
            mostrarFiltrado(filtrado);
        }
    })
}

/**
 * Se le pasa un array con los elementos que pasaron el filtro y se muestran en el html limpiandolo previamente
 * para que únicamente se muestren los elementos filtrados
 * 
 * @param {*} arr 
 */
function mostrarFiltrado(arr) {
    const padre = document.getElementById("container");
    padre.innerHTML="";
    const fragmento = document.createDocumentFragment();
    arr.forEach(product => {
        fragmento.appendChild(CreaCard(product));
    });
    padre.appendChild(fragmento);
}

/**
 * Recibe un objeto que posteriormente se utilizará para filtrar los productos por
 * el atributo proporcionado por el valor máximo que se ha elegido
 * 
 * @param {*} obj {"atributo": <atributo>, "valor": <valor>}
 * @returns Array filtrado por el atributo y el valor máximo que se le ha atribuido 
 */
function filtra(obj) {
 if (obj.atributo === "price") {
    const filtrado = productos.filter(elem => elem.price < obj.valor);
    return filtrado;
 } else  if(obj.atributo === "rate"){
    const filtrado = productos.filter(elem => elem.rating.rate < obj.valor);
    return filtrado;
 } else {
    const filtrado = productos.filter(elem => elem.rating.count < obj.valor);
    return filtrado;
 }
}

/**
 * Función a la que se le pasa el array de productos y encuentra las posibles categorias
 * encontradas en todos los productos
 * @param {*} productos 
 * @returns Array con las categorias encontradas
 */

function DevuelveGeneros(productos) {
    const categorias = [];
    productos.forEach(elem => {
        const categoria = elem.category
        const encontrado = categorias.find(elem => elem === categoria);

        if (!encontrado) {
            categorias.push(categoria);
        }
    })
    return categorias;
}

function carritoAdd (item) {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

    carrito.push(item)

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
    h2.textContent = `Carrito (${carrito.length} items)`
    divCarrito.appendChild(h2);

    carrito.forEach(elem => {
        const p = document.createElement("p");
        p.textContent=elem;
        divCarrito.appendChild(p);
    })

}

/**
 * Funcion main con la funcion CreaCards que muestra todos los productos
 * y la funcion filtroActivado la cual detecta cuando se ha pedido filtrar.
 * 
 * También probamos la funcion DevuelveGeneros
 */
const main = () => {
    CreaCards();
    filtroActivado();
    console.log(DevuelveGeneros(productos));
}

document.addEventListener("DOMContentLoaded", main);