import { Articulo } from "./articulo.js";

export class Articulos{
    constructor(arArticulos){
        this.listaArticulos=arArticulos;
    }

    existeArticulo(codigo){
        if (this.listaArticulos.find(art=>art.cod=codigo)===undefined)
            return false;
        return true;
    }

    filtrarPorPrecio(precioMinimo){
        return this.listaArticulos.filter(({precio})=> precio>precioMinimo)
    }

    /**
     * Filra los artículos según la función de callback proporcionada
     * @param {*} callback funcion de filtro
     */
    filtra(callback){
        return this.listaArticulos.filter(art => callback(art))
    }

    addArticulo(articulo){
        this.listaArticulos.push(articulo);
    }

    removeArticulo(codigo){
        let cod= this.listaArticulos.findIndex(({cod}) => cod==codigo)
        this.listaArticulos.splice(cod,1)
    }
}