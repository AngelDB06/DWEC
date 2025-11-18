export class Persona {
    constructor(nombre, edad) {
        this.nombre=nombre;
        this.edad=edad;
    }

    mayoriaEdad() {
        return this.edad>=18?"Es mayor de edad":"No es mayor de edad";
    }

    edadPromedio(arr){
        let suma = arr.reduce((acc, persona) => acc+persona.edad, 0);
        return suma / arr.length;
    }
}