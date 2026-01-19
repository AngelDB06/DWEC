import React from 'react'

export default function IngredienteReceta({ingredientes}) {


    return (
    <>
        <ul>
        {ingredientes.map((ingrediente, index) => (
           <li key={index}>{ingrediente.cantidad} {ingrediente.unidades} {ingrediente.elemento}</li>  
        ))}
        </ul>
    </>
  )
}
