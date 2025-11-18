import db  from './db.json' with {type: 'json'};


function combinaEstudiantesYCursos(db) {
    return [...db.students, ...db.courses];
}


function devuelveCursosAlumno(db, idAlumno) {
    let arr=[];
    const curso = db.enrollments.filter(enrrolment => enrrolment.studentId==idAlumno);
    //curso.forEach(element => {
    //    arr.push({"curso":element.courseId, "fecha": element.enrollmentDate, "completado": element.completed})
    //});
    

    arr = curso.map(({courseId, enrollmentDate, completed}) => ({courseId, enrollmentDate, completed }))    

    return arr;
}

function ordenaFecha(db) {
    return db.enrollments.sort((a, b) => new Date(a.enrollmentDate) - new Date(b.enrollmentDate))
}

/**
 * maindb.js    
 */
(function (){
    console.log("Hola desde main12.js");
    console.log("Cargando datos desde JSON...");
    console.log(db);
    console.log("Estudiantes",db.students);
    console.log("Cursos",db.courses);
    console.log("Enrollments",db.enrollments);
    console.log(combinaEstudiantesYCursos(db));
    console.log(devuelveCursosAlumno(db, 4))
})();