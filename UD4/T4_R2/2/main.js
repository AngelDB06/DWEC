const cambiarEstilo = () => {
    const contenido = document.getElementById("contenido");
    let fontSize = 16;
    const fontStep = 2;
    const defaultFontSize = 16;

    function aumentarFuente() {
      fontSize += fontStep;
      contenido.style.fontSize = fontSize + "px";
    }

    function disminuirFuente() {
      if (fontSize > 8) {
        fontSize -= fontStep;
        contenido.style.fontSize = fontSize + "px";
      }
    }

    function restablecerFuente() {
      fontSize = defaultFontSize;
      contenido.style.fontSize = fontSize + "px";
    }

    function alinearIzquierda() {
      contenido.style.textAlign = "left";
    }

    function justificarTexto() {
      contenido.style.textAlign = "justify";
    }

    document.getElementById("aumentar").addEventListener("click", aumentarFuente);
    document.getElementById("disminuir").addEventListener("click", disminuirFuente);
    document.getElementById("restablecer").addEventListener("click", restablecerFuente);
    document.getElementById("izquierda").addEventListener("click", alinearIzquierda);
    document.getElementById("justificar").addEventListener("click", justificarTexto);
}

const main = () =>{
    cambiarEstilo();
}

document.addEventListener("DOMContentLoaded", main);