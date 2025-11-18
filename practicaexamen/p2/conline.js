export class CursosOnline {
    constructor(nombre, duracion, alumnos) {
        this.nombre=nombre;
        this.duracion=duracion;
        this.alumnos=alumnos;
    }

    agregarAlumno(nombre){
        this.alumnos.push(nombre);
    }

    numeroAlumnos(){
        return this.alumnos.length;
    }

    buscarAlumno(nombre){
        return this.alumnos.find(element => element==nombre)==true?true:false; 
    }
}