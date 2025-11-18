export class Empleados {
    constructor(nombre, salario, departamento) {
        this.nombre=nombre;
        this.salario=salario;
        this.departamento=departamento;
    }

    subirSueldo(pc){
        this.salario+=(this.salario*pc)/100;
    }

    mostrarDatos(){
        return "Nombre: "+ this.nombre + " Salario: "+ this.salario+ " Departamento: "+this.departamento;   
    }
}