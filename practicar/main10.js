import { Articulo } from "./articulo.js";
import { Articulos } from "./articulos.js";

let dbDatosArticulos=[];
let dbArt;

let fInit=() => {
    let art1 = new Articulo(1, "Pelota", 29);
    let art2 = new Articulo(2, "Guantes", 40);
    let art3 = new Articulo(3, "Botas", 50);
    dbDatosArticulos.push(art1,art2,art3);
    console.log("Datos de artiuclo inicializados")
    dbArt= new Articulos([art1, art2, art3]);
}

(function () {
    console.log("main10.js loaded")
    fInit();
    console.log("dbArticulos: ", dbDatosArticulos)
    //filtrar los articulos
    let articulosFiltrados = dbDatosArticulos.filter(art => art.precio>30)
    console.log(articulosFiltrados)
    dbArt.existeArticulo(2)?console.log("El artículo con código 2 existe"):console.log("El artículo 2 no existe");

    console.log(dbArt.filtrarPorPrecio(39));

    console.log(dbArt.filtra(art=>art.cod===3))

    let art4 = new Articulo(4, "Conos", 5);
    console.log(dbArt)
    dbArt.addArticulo(art4);
    console.log(dbArt);
    dbArt.removeArticulo(4);
    console.log(dbArt);
})();