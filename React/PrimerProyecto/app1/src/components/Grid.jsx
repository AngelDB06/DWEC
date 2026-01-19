import React from 'react'
import Card from './Card'
import db from "../json/dbFakestoreapi.json"
import CardProductos from './CardProductos';
import sytles from './Grid.module.css'

export default function Grid() {
  const arProductos = ["Producto 1", "Producto 2", "Producto3"]
  console.log(db.productos);
  return (
      <>
        <h2>Lista de productos</h2>
      <ul>
        {db.productos.map((producto) => (
          <CardProductos producto= {producto} />
        ))}
      </ul>
      </>
        
  )
}
