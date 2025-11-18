import { Persona } from "./persona.js";
import { Telefono } from "./telefono.js";
import { Puntos, Lineas } from "./puntoslineas.js";
import { Vivienda } from "./viviendas.js";
import { Alumnos } from "./alumno.js";
import { Colegios } from "./colegio.js";

function edadPromedio(arr){
        let suma = arr.reduce((acc, persona) => acc+persona.edad, 0);
        return suma / arr.length;
    }

(function () {
    // Clase y métodos persona
    let p1 = new Persona("Angel", 17);
    let p2 = new Persona("Pepe", 18);
    let p3 = new Persona("Daniel", 19);
    let arrp=[p1,p2,p3];

    console.log(p1);
    console.log(p1.mayoriaEdad());
    console.log(edadPromedio(arrp));

    //Clase y métodos telefono
    let tlf = new Telefono(111111111);

    console.log(tlf.llamar());
    console.log(tlf.llamar());
    console.log(tlf.llamar());

    //Clase puntos y lineas
    let punto1 = new Puntos(6,4);
    let punto2 = new Puntos(7,5);

    let l1= new Lineas(punto1, punto2);

    //Clase Vivienda
    let vivienda1 = new Vivienda("Garcia Prieto", 58, 15706);
    let vivienda2 = new Vivienda("Camino Caneiro", 29, 32004);
    let vivienda3 = new Vivienda("San Clemente", null,  15705);
    console.log("El código postal de vivienda1 es: ", vivienda1.imprimeCodigoPostal());
    console.log("La calle de vivienda 3 es: ", vivienda3.imprimeCalle());

    //Centro Educativo
    let alumno1 = new Alumnos(0,"Angel");
    let alumno2 = new Alumnos(1,"Pepe");
    let alumno3 = new Alumnos(2,"Daniel");
    let arral=[alumno1, alumno2, alumno3]

    let colegio = new Colegios("IES Iliberis", 25, 1000, arral);

    console.log(colegio.consultarNotaMedia(0));
    colegio.modificarNotaMedia(0, 7);
    console.log(colegio.consultarNotaMedia(0));

})();