const colorAletorio = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const asignacionColores = () => {
    const adivinar = colorAletorio();
    document.getElementById("colorrgb").textContent = adivinar;
    const divAleatorio = Math.floor(Math.random() * 6)+1;
    for (let i = 1; i < 7; i++) {
        if (i == divAleatorio) {
            const div = document.getElementById(i);
            div.style.backgroundColor = adivinar; 
        } else {
            const div = document.getElementById(i);
            div.style.backgroundColor = colorAletorio(); 
        }     
    }
}

const adivinarColor = () => {
    let dificil = false;
    let fallos = 0;
    asignacionColores();
    document.querySelectorAll("div").forEach(div => {
            div.onclick = ()=> {
                if (div.style.backgroundColor === document.getElementById("colorrgb").textContent) {
                    alert("¡Has acertado!");
                    fallos = 0;
                    asignacionColores();
                } else {
                    if (dificil) {
                        fallos++
                        if (fallos>=6) {
                            alert("No quedan intentos")
                            fallos = 0;
                            asignacionColores();
                            return;
                        }
                    }
                    alert("¡Inténtalo de nuevo!");
                }
            };
        });
    document.getElementById("dificil").addEventListener("change", () => {
        dificil = true
        fallos = 0;
    })
    document.getElementById("cambiar").addEventListener("click", () => {
        asignacionColores();
        fallos = 0;
    });
}


const main = () => {
    adivinarColor();
}

document.addEventListener("DOMContentLoaded", main);