export class Rectangulo {
    constructor(base, altura) {
        this.base=base;
        this.altura=altura;
    }

    area(){
        return this.base*this.altura;
    }

    perimetro(){
        return (this.base*this.altura)*2;
    }
}