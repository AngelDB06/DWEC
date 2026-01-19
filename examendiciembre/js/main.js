//Importo la clase Carrito y las funciones add y dibujaCarrito
import { Carrito, add, dibujaCarrito } from "./carrito.js";

/**
 * Me declaro una variable global que posteriormente almacenará los productos
 */
let productos = [];

/**
 * Me declaro una variable de la clase carrito para almacenar los objetos que queramos guardar
 */
let carrito = new Carrito([]);

/**
 * Función que comprueba si el objeto usuario se encuentra en localStorage, si no está redireccionará a la página de login
 */
function usuarioExiste() {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
        window.location.href="http://127.0.0.1:5500/examenLogin.html"
    }
}

/**
 * Esta función asigna los productos a la variable global de productos y si se han recogido ejecuta las funciones
 * CreaCards y DevuelveGeneros probando su funcionamiento
 */
async function cargarProductos() {
    productos = await fetch("http://localhost:3000/productus").then(res => res.json());
    if (productos) {
        CreaCards(productos);
        console.log(DevuelveGeneros(productos));
    } else {
        console.log("No se ha podido completar la petición");
    }
}

/**
 * Recorre los elementos del array de productos y por cada uno de ellos llama a la función CreaCard
 * para crearnos el DOM individual de cada uno de ellos. Después los añadimos al fragmento que añadiremos
 * al contenedor padre.
 * 
 * @param {*} arrayProductos Array de productos que le pasamos para mostrarlos en el elemento id = container
 */
function CreaCards(arrayProductos) {
    const padre = document.getElementById("container");
    const fragmento = document.createDocumentFragment();

    arrayProductos.forEach(producto => {
        fragmento.appendChild(CreaCard(producto));
    });

    padre.appendChild(fragmento);
}


/**
 * Aparte de crear el DOM individual de un producto esta función se encarga de captar el evento click en cada uno
 * de estos productos para añadirlos al carrito.
 * 
 * @param {*} producto Le pasamos como parametro el producto que queremos representar.
 * @returns Devuelve un DOM con los nodos del producto representado.
 */
function CreaCard(producto) {
    const div = document.createElement("div");
    const title = document.createElement("p");
    const img = document.createElement("img");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const rating = document.createElement("p");

    title.textContent = producto.title;
    img.src = producto.image;
    description.textContent = producto.description;
    price.textContent = producto.price;
    rating.textContent = "Rating: Rate: "+ producto.rating.rate + " - Count: " + producto.rating.count;

    const content = [title, img, description, price, rating];

    content.forEach(elem => {
        div.appendChild(elem);
    })

    div.addEventListener("click", () => {
        add(producto.title, carrito);
    document.getElementById("carrito").appendChild(dibujaCarrito(carrito));
    })
    
    return div;
}

/**
 * Esta función capta que se han eviado parámetros de filtrado, recoge esos parametros y si son completos
 * llamará a la funcion filtra para que devuelva el array de productos filtrado, y este lo pasaremos a la funcion
 * mostrarFiltrados que mostrará únicamente los productos que hayan pasado el filtro
 */
function filtrarEnviado() {
    document.getElementById("enviarfiltrado").addEventListener("click", () => {
        const atributo = document.getElementById("atributo").value;
        const valor = document.getElementById("valor").value;

        if (valor) {
            const filtrado = filtra({"atributo": atributo, "valor": valor});
            mostrarFiltrados(filtrado);
        } else {
            mostrarFiltrados(productos);
        }
    })
}

/**
 * 
 * @param {*} objFiltro Objeto que contiene el atributo y el valor por el que se quiere filtrar
 * @returns Devuelve el array de productos filtrado según los valores del objFiltro
 */
function filtra(objFiltro) {
    if (objFiltro.atributo === "price") {
        const filtrado = productos.filter(elem => elem.price < objFiltro.valor);
        return filtrado;
    } else if (objFiltro.atributo === "rate") {
        const filtrado = productos.filter(elem => elem.rating.rate < objFiltro.valor);
        return filtrado;
    } else {
        const filtrado = productos.filter(elem => elem.rating.count < objFiltro.valor);
        return filtrado;
    }
}

/**
 * Esta función realiza los mismos pasos que CreaCards con la diferencia de que 
 * limpia el html previo
 * 
 * @param {*} arrFiltrado Recibe array de productos ya filtrado para mostrar
 */
function mostrarFiltrados(arrFiltrado) {
    const padre = document.getElementById("container");
    padre.innerHTML="";
    const fragmento = document.createDocumentFragment();

    arrFiltrado.forEach(producto => {
        fragmento.appendChild(CreaCard(producto));
    });

    padre.appendChild(fragmento);
}

/**
 * La función recorre el array de productos y por cada elemento si su categoría no está ya en el array de categorias
 * se añadirá.
 * 
 * @param {*} arrObjBDProductos Recibe array de productos
 * @returns devuelve todas las categorías que hay existentes entre todos los productos
 */
function DevuelveGeneros(arrObjBDProductos) {
    const categorias = [];
    arrObjBDProductos.forEach(producto => {
        const categoria = categorias.find(elem => elem === producto.category);
        if (!categoria) {
            categorias.push(producto.category);
        }
    })
    return categorias;
}

/**
 * Función main que verifica la existencia del usuario en el localStorage, carga los Productos y añade las funciones de filtrado
 */
const main = () => {
    usuarioExiste();
    cargarProductos();
    filtrarEnviado();
}

document.addEventListener("DOMContentLoaded", main);