import React from 'react'

export default function FormIngrediente({ingredientes, setIngredientes}) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const cantidad = document.getElementById("cantidad").value;
        const unidades = document.getElementById("unidades").value;
        const elemento = document.getElementById("elemento").value;
        console.log(`Ingrediente añadido: ${cantidad} ${unidades} ${elemento}`);

        setIngredientes([
        ...ingredientes,
        { cantidad: cantidad, unidades: unidades, elemento: elemento },
        ]);
    };

    return (
    <>
        <form>
            <label htmlFor="cantidad">Cantidad</label>
            <input type="text" id='cantidad' name='cantidad' />
            <br /><br />
            <label htmlFor="unidades">Unidades</label>
            <input type="text" id='unidades' name='unidades'/>
            <br /><br />
            <label htmlFor="elemento">Elemento</label>
            <input type="text" id='elemento' name='elemento' />
            <br /><br />
            <button onClick={handleSubmit}>Enviar</button>
        </form>
    </>
  )
}
