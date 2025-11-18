const color = "grey";
const colorHover = "green";

const btn =()=> {
    document.getElementById("btn1").addEventListener("click", ()=>{
        alert("Has pulsado el botón");
    });
};
const eventosDiv=()=> {
    div=document.getElementById("div1");

    document.getElementById("div1").addEventListener("mouseover", (event)=>{
        document.getElementById("div1").style.backgroundColor = colorHover;
        document.getElementById("div1").textContent = `${event.pageX}, ${event.pageY}`;
        console.log("Objeto evento: ", event);
        console.log(`Evento: ${event.type} en div ${event.target.id}`);
        if (event.ctrlKey==true) {
            alert("Llevas la tecla control pulsada.");
        }
    });

    document.getElementById("div1").addEventListener("mouseout", (event)=>{
        document.getElementById("div1").style.backgroundColor = color;
        document.getElementById("div1").textContent = "Div1";
        console.log("Objeto evento: ", event);
        console.log(`Evento: ${event.type} en div ${event.target.id}`);
    });
}


(function () {
    console.log("main.js");

    btn();
    eventosDiv();
})();