export class Facturas {
    constructor(cliente, importe, fecha) {
        this.cliente=cliente;
        this.importe=importe;
        this.fecha=fecha;
    }

    esReciente(){
        let ac = new Date();
        let dif=ac- this.fecha;
        const dias = dif / (1000*60*60*24);
        return dias<=30?true:false;
    }

    mostrarInfo(){
        return " Cliente: " + this.cliente + " Importe: " + this.importe + " Fecha: " + this.fecha;
    }
}