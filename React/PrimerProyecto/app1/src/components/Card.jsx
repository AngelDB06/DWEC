import React from 'react'
import styles from './Card.module.css'

export default function Card({producto}) {

    return (
      <li>
        <h3>{producto.title}</h3>
        <p>Precio:
          {producto.price > 100 ? producto.price + ' oferta...' : producto.price}
          {producto.price > 100 && "✅"}
        </p>
        <p>Categoría: {producto.category}</p>
      </li>
  )
}
