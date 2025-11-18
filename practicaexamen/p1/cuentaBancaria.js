export class cuentaBancaria {
    constructor(titular) {
        this.titular=titular;
        this.saldo=0;
    }

    depositar(cantidad){
        this.saldo+=cantidad;
    }

    retirar(cantidad){
        this.saldo-cantidad>=0?this.saldo-=cantidad:console.log("No se puede retirar esa cantidad, no hay dinero suficiente");    
    }

    mostrarSaldo(){
        return this.saldo;
    }
}