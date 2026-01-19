import React from 'react'
import Grid from '../components/Grid'
import Contador from '../components/Contador'
import Carrusel from '../components/Carrusel'
import ContadorClase from '../components/ContadorClase'
import IngredienteReceta from '../components/IngredienteReceta'
import Receta from '../components/Receta'
import { Navegacion } from '../components/Navegacion'

export default function Pruebas() {
  const arProductos = ["Producto 1", "Producto 2", "Producto3"]
  return (
    
    <div>
      <Navegacion />
      Página de pruebas
      <br />
        <Carrusel />
    </div>
  )
}
