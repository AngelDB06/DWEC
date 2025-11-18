import { Factura } from "./factura.js";
import { Lineas } from "./linea.js";


//incrementeFactura(Factura[], num, incremento): Factura[]
function incrementeFactura(facturas, num, incremento){
    let fnum = facturas.filter(element => element.numero==num);
    fnum.forEach(element => {
        element.lineas.forEach(element => {
            element.pvp+=incremento;
        });
    });
    return fnum;
}

//analizaFacturas(Factura[]):objAnalisis

function analizaFacturas(arr) {
    let totalLineas=0;
    arr.forEach(element => {
       totalLineas += element.lineas.length; 
    });

    let mediaImporte=0;
    let totalVentas=0;
    arr.forEach(element => {
        totalVentas+=element.subtotal;
    })
    mediaImporte=totalVentas/arr.length;

    let artMasVendido=0;
    let arArticulos = arr.map(element => element.lineas);
    let lineas= [...arArticulos];

    let precios=lineas.map(element => element.pvp)
    
    return precios;

}



//eliminaFactura(Factura[],num)Factura[]

function eliminaFactura(arr,num) {
    return arr.filter(element => element.numero!=num);
}

//encuentraxCodigo(Factura[],cod): Factura[]

function encuentraxCodigo(arr,cod){
    let lineas = arr.map(element => element.lineas);
    let lcorrecta;
    lineas.forEach(element=>{
        element.codigo==cod?lcorrecta=element:undefined;
    })
    return lcorrecta;
}

//filtraFacturas(Factura[],fechamin)Facturas[]
function filtraFacturas(arr, fechamin) {
    return arr.filter(element => element.fecha-fechamin>=0);
}

//modFacturas(Factura[]): Factura[]


//ordenaFacturas(Factura[],orden):Factura[]
function ordenaFacturas(arr, orden) {
    let ordenado;
    orden==1?  ordenado = arr.sort((a,b) => b.numero-a.numero):ordenado=arr.sort((a,b) => a.numero-b.numero);
    return ordenado;
}

//updateFacturas(Factura[],objFactura):Factura[]
function updateFacturas(arr, objFactura) {
    let final;
    let numeros=arr.map(element => element.numero);
    numeros.includes(objFactura.numero)?
    final = "La factura ya se encuentra en el array":
    final = "-1 Número factura: "+objFactura.numero, arr.push(objFactura);

    return final;
}


(function () {

    //Función demuestraUso() con array de facturas
    function demuestraUso() {
        let linea1 = new Lineas(1, "Teclado", 2, 5);
        let linea2 = new Lineas(2, "Ratón", 3, 3);
        let linea3 = new Lineas(3, "Auriculares", 1, 7);
        let arL = [linea1, linea2, linea3];

        let factura1 = new Factura(1, new Date("2025-10-28"), "Ángel Domínguez", 0, 21, arL);
        let factura2 = new Factura(2, new Date("2025-11-28"), "Manolo García", 0, 15, arL);
        let factura3 = new Factura(3, new Date("2025-12-28"), "Pedro Manzón", 0, 25, arL);
        let arF = [factura1, factura2, factura3];

        function mostrar(arF) {
            arF.forEach(element => {
                console.log(element.show());
            });
        };

        return mostrar(arF);

    }

    console.log("INFORMACIÓN SOBRE LAS FACTURAS: ", demuestraUso());

    let linea1 = new Lineas(1, "Teclado", 2, 5);
    let linea2 = new Lineas(2, "Ratón", 3, 3);
    let linea3 = new Lineas(3, "Auriculares", 1, 7);
    let arL = [linea1, linea2, linea3];

    let factura1 = new Factura(1, new Date("2025-10-28"), "Ángel Domínguez", 0, 21, arL);
    let factura2 = new Factura(2, new Date("2025-11-28"), "Manolo García", 0, 15, arL);
    let factura3 = new Factura(3, new Date("2025-12-28"), "Pedro Manzón", 0, 25, arL);
    let arF = [factura1, factura2, factura3];


    console.log(incrementeFactura(arF, 1, 2));

    console.log(analizaFacturas(arF));

    console.log(eliminaFactura(arF, 1));

    console.log(encuentraxCodigo(arF, 1));

    console.log(filtraFacturas(arF, new Date("2025-11-29")));

    console.log(ordenaFacturas(arF, 0));

    console.log(updateFacturas(arF, {"numero":1}))
    console.log(updateFacturas(arF, {"numero":4}));
}
)();