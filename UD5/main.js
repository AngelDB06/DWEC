const informacionNodo = (nodo) => {
    console.log("Información del Nodo: ", nodo);
    console.log("Tipo de nodo: ", nodo.nodeType);
    console.log("Nombre del nodo: ", nodo.nodeName);
    console.log("Valor del nodo: ", nodo.nodeValue);
    console.log("Número de hijos: ", nodo.childNodes.length);
    console.log("Contenido del nodo: ", nodo.textContent);
    

    console.log("Primer hijo: ", nodo.firstChild);
    console.log("Último hijo: ", nodo.lastChild);
    console.log("Nodo padre: ", nodo.parentNode);
    console.log("Nodo siguiente: ", nodo.nextSibling);
    console.log("Nodo anterior: ", nodo.previousSibling);
    
    console.log("Primer hijo (elemento): ", nodo.firstElementChild);
    console.log("Último hijo (elemento): ", nodo.lastElementChild);
    console.log("Nodo siguiente (elemento): ", nodo.nextElementSibling);
    console.log("Nodo anterior: (Elemento)", nodo.previousElementSibling);
}


/**
 * Muestra el nodo y todos sus hijos
 * @param {*} nodo 
 */
const recorreNodo =(nodo) => {
    console.log("Recorriendo nodo: ", nodo);
    // nodo.childNodes.forEach(child => {
    //     console.log(child);
    // });
    
    for (let hijo of nodo.children)
        console.log(hijo)
}

/**
 * Recorre un nodo junto con todo su subarbol
 * @param {*} nodo 
 */
const recorreNodoRecursivo = (nodo) =>{
    console.log(nodo);
    for (let hijo of nodo.children)
        recorreNodoRecursivo(hijo);
}
const main = () => {
    // informacionNodo(document.getElementById("lista"));
    // recorreNodo(document.getElementById("lista"));
    recorreNodoRecursivo(document.getElementById("lista"));
}

document.addEventListener("DOMContentLoaded", main);