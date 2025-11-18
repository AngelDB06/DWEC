export class Lineas {
    //Función constructora
    constructor(codigo, descripcion, unidades, pvp) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.unidades = unidades;
        this.pvp = pvp;
    }

    //getTotal() devuelve el precio multiplicado por las unidades
    getTotal() {
        return this.unidades * this.pvp;
    }
}