import React, { useState } from 'react'
import db from '../json/dbFakestoreapi.json'
import Card from './Card';

export default function Carrusel() {

    let arrayProductos = [];
    db.productos.map((producto) => arrayProductos.push(producto));


    const [nArray, setnArray] = useState(0);

    function moveArray(valor) {
        switch (valor) {
            case "+":
                if (nArray!=19) {
                    setnArray(nArray+1);
                }
                break;
            
            case "-":
                if (nArray!=0) {
                    setnArray(nArray-1);
                }
                break;
        
            default:
                break;
        }
    }



  return (
    <>
        <Card producto={arrayProductos[nArray]}/>
        {/* <button onClick={()=>setnArray(nArray-1)}>Izquierda</button>
        <button onClick={()=>setnArray(nArray+1)}>Derecha</button> */}
        <button onClick={()=>moveArray("-")}>Izquierda</button>
        <button onClick={()=>moveArray("+")}>Derecha</button>

    </>
  )
}
