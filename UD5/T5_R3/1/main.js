const incrementar = (nodo) =>{
    document.getElementById("incrementar").addEventListener("click", () => {
        let valor = nodo.textContent;
    valor = parseInt(valor) + 1;
    nodo.textContent = valor;
    });
}

const main = () => {
    incrementar(document.getElementById("id"));
}

document.addEventListener("DOMContentLoaded", main);