export class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
    }

    diezAñosAntiguedad(){
        return new Date().getFullYear()-this.año>=10?"Tiene más de diez años":"No tiene más de diez años";
    }
}