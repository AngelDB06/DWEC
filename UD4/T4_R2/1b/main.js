const cambiarEstilo = () => {
    document.getElementById("normal").addEventListener("click", e =>{
        e.preventDefault();
        const estilo = "normal";
        document.getElementById("estilos").setAttribute("href", `${estilo}.css`);
    })
    document.getElementById("minimalista").addEventListener("click", () =>{
        document.getElementById("estilos").setAttribute("href", ``);
    })
}

const main = () =>{
    cambiarEstilo();
}

document.addEventListener("DOMContentLoaded", main);