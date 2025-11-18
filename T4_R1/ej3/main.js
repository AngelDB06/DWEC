const tiempoI= new Date()

const tiempoCarga = () => {
    window.addEventListener("load", ()=>{
        const tiempoF = new Date()
        alert(`Tiempo de carga:  ${(tiempoF-tiempoI)} ms`);
    })
};

(()=>{
    tiempoCarga();
})();