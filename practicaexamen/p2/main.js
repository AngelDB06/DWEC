import { Libro } from "./biblioteca.js";
import { CursosOnline } from "./conline.js";
import { Empleados } from "./empleados.js";
import { Facturas } from "./facturas.js";
import { Mascota } from "./mascota.js";
import { Videojuego } from "./videojuego.js";


function importeTotal(arr) {
    let suma=0;
    arr.forEach(element => {
        suma+=element.importe;
    });
    return suma;
}

function facturasRecientes(arr) {
    return arr.filter(element => element.esReciente()==true);
}

function salarioMedio(arr) {
    let suma=0;
    arr.forEach(element => {
       suma+=element.salario;
    });
    return suma/arr.length;
}

function filtradoDep(arr, dep) {
    return arr.filter((element) => element.departamento==dep);
}

function salarioMasAlto(arr) {
    let sma = arr.sort((a,b) => b.salario-a.salario);
    console.log(arr);
    return sma.filter(element => element.salario==sma[0].salario);
}

function cursoMasPopular(arr) {
    let pop = arr.sort((a,b) => b.alumnos.length-a.alumnos.length);
    return pop.filter(element => element.alumnos.length==pop[0].alumnos.length )
}

function masVisitas(arr) {
   let mvisitas = arr.sort((a,b) => b.visitas.length-a.visitas.length);
   return mvisitas.filter(element => element.visitas.length == mvisitas[0].visitas.length);
}

function exitosos(arr) {
    return arr.filter(element => element.puntuacion>=8);
}

function pMedio(arr) {
    let suma = arr.reduce((acc, element) => acc+element.precio,0);
    return suma/arr.length;
}

function mBarato(arr) {
    let precios = arr.sort((a, b) => a.precio-b.precio);
    return arr.filter(element => element.precio==precios[0].precio);
}

function devolverPrestados(arr) {
    let prestados= arr.filter(element => element.prestado==true);
    prestados.forEach(element => {
        element.prestado=false;
    });
    return arr;
}

function totalPaginas(arr) {
    return arr.reduce((acc, element)=>acc+element.paginas,0)
}

function masPaginas(arr) {
    let mp=arr.sort((a,b)=>b.paginas-a.paginas);
    return arr.filter(element=>element.paginas==mp[0].paginas);
}

(function () {
    //Facturas
    let f1 = new Facturas("Ángel", 200, new Date("2025-10-22"));
    let f2 = new Facturas("Pepito", 100, new Date("2024-08-02"));
    let f3 = new Facturas("Manuel", 250, new Date("2016-12-29"));
    let arF = [f1,f2,f3];

    console.log(f1.esReciente());

    console.log(importeTotal(arF))

    console.log(facturasRecientes(arF))

    //Empleados
    let e1= new Empleados("Ángel", 2500, "Desarrollo");
    let e2 = new Empleados("Pepe", 2400, "Infraestructuras");
    let e3 = new Empleados("Mariano", 2000, "Seguridad");
    let arE = [e1,e2,e3];

    console.log(salarioMedio(arE));

    console.log(filtradoDep(arE, "Seguridad"));
    
    console.log(salarioMasAlto(arE));

    //Cursos online
    let python= ["Ángel", "Pepe", "Manuel", "Francisco"];
    let javascript= ["Ángel", "Pepe", "Manuel"];
    let cmas= ["Ángel", "Pepe"];
    let c1 = new CursosOnline("Python", 150, python);
    let c2 = new CursosOnline("JavaScript", 200, javascript);
    let c3 = new CursosOnline("C++", 300, cmas);
    let arC = [c1,c2,c3];

    console.log(cursoMasPopular(arC));

    //Mascotas y Veterinario
    let vm1 = [new Date("2025-08-09"), new Date("2024-12-09")];
    let vm2 = [new Date("2025-08-09"), new Date("2024-12-09"), new Date("2023-12-09")];
    let vm3 = [new Date("2025-08-09"), new Date("2024-12-09"), new Date("2023-09-12"), new Date("2022-09-12")];
    let m1 = new Mascota("Chispas", "Perro", vm3);
    let m2 = new Mascota("Thor", "Gato", vm2);
    let m3 = new Mascota("Cotton", "Perro", vm3);
    let arM=[m1,m2,m3];

    console.log(masVisitas(arM))

    //Videojuegos
    let v1 = new Videojuego("FC26", "Deportes", 9, 70);
    let v2 = new Videojuego("F12025", "Depotes", 7,60);
    let v3 = new Videojuego("Call of Duty WW2", "Guerra", 8, 50);
    let arV= [v1,v2,v3];

    console.log(exitosos(arV));

    console.log(pMedio(arV));

    console.log(mBarato(arV));

    //Biblioteca
    let l1 = new Libro("Mañana", "Pepe Domingo Castaño", 257, false);
    let l2 = new Libro("Hoy", "Manolo Lama", 225, false);
    let l3 = new Libro("Ayer", "Julio Maldonado Maldini", 380, true);
    let arL = [l1,l2,l3];

    console.log(devolverPrestados(arL));

    console.log(totalPaginas(arL));

    console.log(masPaginas(arL));
})();