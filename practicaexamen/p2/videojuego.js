export class Videojuego {
    constructor(titulo, genero, puntuacion, precio) {
        this.titulo=titulo;
        this.genero=genero;
        this.puntuacion=puntuacion;
        this.precio=precio;
    }

    esExitoso(){
        return this.puntuacion>=8?true:false;
    }

    aplicarDescuento(pc){
        this.precio -= (this.precio*pc)/100;
    }

    mostrarInfo(){
        return "Titulo: "+ this.titulo+" Genero: "+ this.genero+" Puntuacion: "+this.puntuacion+" Precio: "+this.precio;
    }
}