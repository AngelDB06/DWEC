export class Mascota {
    constructor(nombre, tipo, visitas) {
        this.nombre=nombre;
        this.tipo=tipo;
        this.visitas=visitas;
    }

    agregarVisita(fecha){
        this.visitas.push(fecha);
    }

    ultimaVisita(){
        return this.visitas.sort((a, b) => b-a)[0];
    }

    numeroVisitas(){
        return this.visitas.length;
    }
}