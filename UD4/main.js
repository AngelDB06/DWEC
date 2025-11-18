const eventoLeer = () => {
    document.getElementById('principal').onclick = function (event){
        console.log(`Evento: ${event.type} en ${event.target.tagName}, this: ${this.tagName}`)
}
}

document.getElementById('principal').onclick = function (event){
        console.log(`Evento: ${event.type} en ${event.target.tagName}, this: ${this.tagName}`)
}
const main =() =>{
    eventoLeer();
}

document.addEventListener("DOMContentLoaded", main);