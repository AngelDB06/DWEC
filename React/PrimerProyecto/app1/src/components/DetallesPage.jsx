import React from 'react'
import { useParams } from 'react-router'

export default function DetallesPage() {
    const {id} = useParams();
  
    return <div> Detalles {id}</div>
}
