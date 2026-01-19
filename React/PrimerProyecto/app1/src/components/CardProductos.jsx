import React from 'react'
import style from './CardProductos.module.css'


export default function CardProductos({producto}) {
  return (
    <li>
        <h3>{producto.title}</h3>
        <p>{producto.category}</p>
        <img src={producto.image} alt={producto.title} />
        <p>{producto.price} €</p>
    </li>
  )
}
