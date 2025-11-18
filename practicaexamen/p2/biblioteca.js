export class Libro {
    constructor(titulo, autor, paginas, prestado) {
        this.titulo=titulo;
        this.autor=autor;
        this.paginas=paginas;
        this.prestado=prestado;
    }

    prestar(){
        this.prestado=true;
    }

    devolver(){
        this.prestado=false;
    }

    mostrarInfo(){
        return "Título: "+ this.titulo+ " Autor: "+this.autor+" Páginas: "+this.paginas+" Prestado: "+this.prestado;
    }
}