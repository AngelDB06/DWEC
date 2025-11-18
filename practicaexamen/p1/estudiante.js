export class Estudiante {
    constructor(nombre, n1, n2, n3) {
        this.nombre= nombre;
        this.n1=n1;
        this.n2=n2;
        this.n3=n3;
    }

    calcularMedia(){
        return (this.n1+this.n2+this.n3)/3;
    }
}