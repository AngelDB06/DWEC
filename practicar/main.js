import { Cliente } from "./cliente.js";
import { Articulo } from "./articulo.js";
import { Albaran } from "./albaran.js";



function buscarAlbaran(arAlbaranes, cliente) {
    arAlbaranes.array.forEach(albaran => {
        if (albaran.cli == cliente) {
            console.log(albaran);
        }
    });
}

(function (){
    let art1 = new Articulo(1, "Pelota", 10);
    let art2 = new Articulo(2, "Auriculares", 8)
    let cl1 = new Cliente(11111111, "Pepe García", "Calle Nobleza, 4",788459354, "pepeg@gmail.com" )
    console.log(art1.mostrarInfo());
    console.log(cl1.mostrarInfo());
    let alb1 = new Albaran(cl1, 1, "20/10/2025", [art1, art2])
    let alb2 = new Albaran(cl1, 2, "21/10/2025", [art1, art2])
    let alb3 = new Albaran(cl1, 3, "19/10/2025", [art1, art2])
    console.log(alb1.show());
    const arAlbaranes = [alb1, alb2, alb3];
    buscarAlbaran(arAlbaranes, cl1);
})();

