const idStudent = (usuario, callback) => {
    fetch("http://localhost:3000/students")
    .then(res => res.json())
    .then(json => {
        const user = json.find(user => user.name == usuario);
        if (user) {
            callback(user.id);
        } else {
            alert("Usuario no encontrado")
        }
    })
    .catch(error => console.log("error: ", error))
}

const cargarEnrollments = () => {
    fetch("http://localhost:3000/enrollments")
    .then(res=> res.json())
    .then(json => matricular(json))
    .catch(error => console.log("error", error))
}

const cargarCursos = () => {
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(json => mostrarCursos(json))
    .catch ( error => console.log("error", error))
}

const idCurso = (course, callback) => {
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(json => {
        const coursename = json.find(c => c.title === course);
        if (coursename) {
            callback(coursename.id);
        } else {
            alert("No se ha podido encontrar el curso");
        }
    })
    .catch ( error => console.log("error", error))
}

const subirEnrollment = (objeto) => {
    fetch("http://localhost:3000/enrollments", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(objeto)
})
.then(res => res.json())
.then(data => console.log("Datos guardados:", data))
.catch(error => console.log("Error al guardar:", error));

}

const mostrarCursos = (json) => {     
    json.forEach(course => {
        crearOpcion(course);
    });
    botonPulsado();
}

const crearOpcion = (course) => {
    const option = document.createElement("option");
    option.value=course.title;
    option.textContent=course.title;
    document.getElementById("courses").appendChild(option);
}

const botonPulsado = () => {
    document.getElementById("matricularse").addEventListener("click", () => {
        cargarEnrollments();
    })
}

const matricular = (json) => {
    const usuario = localStorage.getItem("usuario");
    const course = document.getElementById("courses").value;
    console.log(course);
    idStudent(usuario, (ids)=>{
        if (!ids) {
            alert("Usuario no encontrado")
        } else {
            idCurso(course, (idc) => {
            if (idc) {
                const idEnrollment = json.length+1;
                const date = new Date();
                const año = date.getFullYear();
                const mes = date.getMonth()+1;
                const dia = date.getDate();
                const enrollmentDate = `${año}-${mes}-${dia}`;
                const enrollment = {"id": idEnrollment,"studentId": ids, "courseId": idc, "enrollmentDate": enrollmentDate, "progress": 0, "completed": false};
                subirEnrollment(enrollment);

            } else {
                alert("Curso no encontrado");
            }
        })
        }
    })
}

const main = () => {
    cargarCursos();
}
document.addEventListener("DOMContentLoaded", main);