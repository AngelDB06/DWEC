/**
 * Declaro la clase carrito donde se le pasará un array de articulos
 */
class Carrito {
    constructor(articulos) {
        this.articulos = articulos;
    }
}

/**
 *  Esta función añade el item al carrito pasado por parámetro 
 * @param {*} item se le pasa el articulo que queremos añadir al carrito 
 * @param {*} carrito el objeto de la clase carrito a la que queremos añadirlo
 */
function add(item, carrito) {
    const articulos = carrito.articulos || [];
    articulos.push(item);
}


/**
 *  
 * @param {*} carrito Se le pasa el carrito con los datos que queremos mostrar como parámetro
 * @returns Devuelve un fragmento con los nodos de nuestro array de articulos en nuestro objeto carrito
 */
function dibujaCarrito(carrito) {
    const fragmento = document.createDocumentFragment();
    const articulos = carrito.articulos || [];

    const divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML="";

    if (articulos.length === 0) {
        return;
    }

    const h2 = document.createElement("h2");
    h2.textContent = `CARRITO (${articulos.length} items)`;
    fragmento.appendChild(h2);

    articulos.forEach((element) => {
        const p = document.createElement("p");
        p.textContent = element;
        fragmento.appendChild(p);
    });

    return fragmento;
}

// Exportar clase y funciones
export { Carrito, dibujaCarrito, add };