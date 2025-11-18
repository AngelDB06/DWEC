export class propInmobiliarias {
    constructor(direccion, m2, precio) {
        this.direccion=direccion;
        this.m2=m2;
        this.precio=precio;
    }

    precioPorMetro(){
       return this.precio/this.m2; 
    }

    mostrarInfo(){
        return "Dirección: "+ this.direccion+ " Precio: "+ this.precio+ " Metros Cuadrados: "+ this.m2;
    }

}