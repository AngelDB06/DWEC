import { Lineas } from "./linea.js";

export class Factura {
    //Constructor
    constructor(numero, fecha, nombre_cliente, subtotal, iva, lineas) {
        this.numero = numero;
        this.fecha = fecha;
        this.nombre_cliente = nombre_cliente;
        this.subtotal = subtotal;
        this.iva = iva;
        this.lineas = lineas;
    }

    //Métodos get y set para número y fecha
    getNumero() {
        return this.numero;
    }

    getFecha() {
        return this.fecha;
    }

    setNumero(n) {
        this.numero = n;
    }

    setFecha(f) {
        this.fecha = f;
    }

    //Método sumaLineas, devolverá el importe de las lineas de la factura
    sumaLineas() {
        let suma = 0;
        this.lineas.forEach(element => {
            suma += element.unidades * element.pvp;
        });
        return suma;
    }

    //getTotal() Total de la factura aplicando IVA
    getTotal() {
        let suma = this.sumaLineas();
        this.subtotal = suma += (suma * this.iva) / 100;
    }

    //show() Muestra toda la información de la factura
    show() {
        return " Número: " + this.numero + " Fecha: " + this.fecha + " Nombre Cliente: " + this.nombre_cliente + " Subtotal: " + this.subtotal + " IVA: " + this.iva + " Líneas: " + this.lineas.forEach(element => { console.log(element) });
    }
}