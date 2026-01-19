import React, { useState } from 'react'
import IngredienteReceta from './IngredienteReceta'
import FormIngrediente from './FormIngrediente'
import { Navegacion } from './Navegacion'

export default function Receta() {
    const aringredientes = [
        { cantidad: 1, unidades: "libra", elemento: "pollo"},
        { cantidad:2 , unidades: "cucharadas", elemento: "aceite"},
    ]

    const [ingredientes, setIngredientes] = useState(aringredientes)

    return (
    <>
        <Navegacion />
        <h1>Página de recetas</h1>
        <h2>Receta 1</h2>
        <IngredienteReceta ingredientes={ingredientes} />
        <FormIngrediente ingredientes={ingredientes} setIngredientes={setIngredientes} />
    </>
  )
}
