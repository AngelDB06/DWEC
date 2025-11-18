function precioFinal(precio, descuento) {
    descontar = precio * descuento / 100;
    precio = precio - descontar;
    return precio;  
}