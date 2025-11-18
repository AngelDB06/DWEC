import { Articulo } from "./articulo.js";
import { Cliente } from "./cliente.js";


class Albaran {
            constructor(cli, numero, fecha, lineas) {
                this.cli = cli;
                this.numero = numero;
                this.fecha = fecha;
                this.lineas = lineas;
            }

            show() {
                return "Cliente: " + this.cli.nombre +
                    " Nº albaran: " + this.numero +
                    " Fecha: " + this.fecha +
                    " Lineas: " + this.lineas.map(art => art.nombre).join(", ");
            }

            addArticulo(articulo) {
                this.lineas.push(articulo);
            }

            getTotal() {
                let total = 0;
                this.lineas.forEach(articulo => {
                    total += articulo.getPVP();
                });
                return total;
            }
        }

        
export {Albaran};