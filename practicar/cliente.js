class Cliente {
            constructor(nif, nombre, direccion, tlf, email) {
                this.nif=nif;
                this.nombre=nombre;
                this.direccion=direccion;
                this.tlf=tlf;
                this.email=email;
            }

            mostrarInfo(){
                return `Nombre: ${this.nombre}, NIF:${this.nif}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Email: ${this.email}`
            }
        }


export {Cliente};