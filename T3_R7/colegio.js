import { Alumnos } from "./alumno.js";

export class Colegios {
    constructor(nombre, naulas, nalumnos, arral) {
        this.nombre=nombre;
        this.naulas=naulas;
        this.nalumnos=nalumnos;
        this.arral=[arral];
    }

    consultarNotaMedia(idalumno){
       let alumnos= this.arral.reduce((alumno) => alumno);
       let alumno = alumnos.filter((alumno) => alumno.id == idalumno)

       return alumno[0].nm
    }

    modificarNotaMedia(idalumno, nuevanm){
       let alumnos= this.arral.reduce((alumno) => alumno);
       let alumno = alumnos.filter((alumno) => alumno.id == idalumno);

        alumno[0].nm=nuevanm;
    }
}