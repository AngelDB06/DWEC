import React, { useState } from 'react'

export default function ContadorClase() {
    const [clase, setClase] = useState({
            name: "2DAW",
            nalumnos: 0
        })
    
        function handleAdd() {
            setClase({...clase, nalumnos: clase.nalumnos + 1})
        }

        function handlePrev() {
            setClase({...clase, nalumnos: clase.nalumnos - 1})
        }
  return (
    <>
    <p>Número de alumnos: {clase.nalumnos}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handlePrev}>Remove</button>
    </>
  )
}
