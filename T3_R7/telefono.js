export class Telefono {
    constructor(tlf) {
        this.tlf=tlf;
        this.llamadas=0;
    }

    llamar(){
        this.llamadas++;
        return "Llamadas totales a ", this.tlf,": ",this.llamadas;
    }
}