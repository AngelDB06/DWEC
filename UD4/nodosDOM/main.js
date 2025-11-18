import db from "./db.json" with {type: 'json'};

const crearNodosDiv = (nodePadre, n) => {
    for (let i = 1; i < n + 1; i++) {
        const div = document.createElement(`div`);

        div.textContent = `div${i}`
        div.id = `div${i}`

        nodePadre.appendChild(div);
    }

}

function evento (div) {
    div.addEventListener("click", function () {
        alert(this.id);
    });
}

const crearStudents = (nodoPadre) => {
    const students = db.students;
    const fullStudents = () => {
        nodoPadre.innerHTML = "";
        for (let i = 0; i < students.length; i++) {
            const div = document.createElement("div");

            div.id = `student${students[i].id}`;
            const pname = document.createElement("p");
            pname.textContent = `Nombre: ${students[i].name}`;
            div.appendChild(pname);

            const plevel = document.createElement("p");
            plevel.textContent = `Nivel: ${students[i].level}`;
            div.appendChild(plevel);

            nodoPadre.appendChild(div);

            div.style.border = "1px solid black";
            nodoPadre.style.border = "1px solid black";
            nodoPadre.style.padding = "20px"
            nodoPadre.style.display = "flex";
            div.style.display = "flex";
            div.style.margin = "20px";
            div.style.padding = "20px";
            div.style.flexDirection = "column";
            evento(div);
        }
    }
    fullStudents();

    document.getElementById("activo").addEventListener("change", (e) => {
        nodoPadre.innerHTML = "";
        if (e.target.checked) {
            for (let i = 0; i < students.length; i++) {
                if (students[i].active == true) {
                    const div = document.createElement("div");

                    div.id = `student${students[i].id}`;
                    const pname = document.createElement("p");
                    pname.textContent = `Nombre: ${students[i].name}`;
                    div.appendChild(pname);

                    const plevel = document.createElement("p");
                    plevel.textContent = `Nivel: ${students[i].level}`;
                    div.appendChild(plevel);

                    nodoPadre.appendChild(div);

                    div.style.border = "1px solid black";
                    nodoPadre.style.border = "1px solid black";
                    nodoPadre.style.padding = "20px"
                    nodoPadre.style.display = "flex";
                    div.style.display = "flex";
                    div.style.margin = "20px";
                    div.style.padding = "20px";
                    div.style.flexDirection = "column";
                }

            }
        } else {
            fullStudents();
        }
    })

}

const main = () => {
    // crearNodosDiv(document.getElementById("contenedor"),5);
    crearStudents(document.getElementById("contenedor"));

}

document.addEventListener("DOMContentLoaded", main);