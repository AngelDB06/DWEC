class Articulo {
            constructor(cod, nombre, precio) {
                this.cod=cod;
                this.nombre=nombre;
                this.precio=precio;
            }

            mostrarInfo(){
                return `Artículo:  ${this.nombre}, Precio: ${this.precio}` 
            }
            getPVP(){
                this.precio+=this.precio*0.21;
                return this.precio;
            }
        }

export {Articulo};