import { Vehiculo } from "./vehiculos.js";
import { cuentaBancaria } from "./cuentaBancaria.js";
import { Rectangulo } from "./rectangulo.js";
import { propInmobiliarias } from "./propInmobiliarias.js";
import { Estudiante } from "./estudiante.js";

    function mayorArea(arr) {
        let ma = arr.map(element => element.area());
        let rec = ma.sort((a, b) => b-a)[0];
        return arr.find(element => element.area()==rec);
    }

    function ppm2(arr) {
        let precios = [];
        arr.forEach(element => {
            precios.push(element.precio/element.m2);
        });
        return precios;
    }

    function mejorEstudiante(arr){
        let medias = [];
        medias = arr.map((element) => element.calcularMedia());
        let me = medias.sort((a,b) => b-a)[0];
        return arr.find(element => element.calcularMedia()== me)
    }

(function () {
    //Vehículo
        let vehiculo= {"marca": "Mercedes-Benz", "modelo": "AMG", "año":2020};
        let v1 = new Vehiculo("Audi", "R8", 2015);
        let v2 = new Vehiculo("Nissan", "Pulsar", 2018);
        let v3 = new Vehiculo("Hyundai", "i30", 2019);
        let arV = [v1,v2,v3];
        console.log(vehiculo)
        console.log(arV)

        console.log(v1.diezAñosAntiguedad());

    //Cuenta Bancaria
        let cuenta1 = new cuentaBancaria("Angel");
        console.log(cuenta1);

        console.log("Depositando 1000 euros");
        cuenta1.depositar(1000);
        console.log(cuenta1.mostrarSaldo());
        
        console.log("Retirando 500 euros");
        cuenta1.retirar(500);
        console.log(cuenta1.mostrarSaldo());

        console.log("Retirando 501 euros más");
        cuenta1.retirar(501);
        console.log(cuenta1.mostrarSaldo());

    //Rectángulo
        let rec1 = new Rectangulo(8, 4);
        let rec2 = new Rectangulo(10, 5);
        let rec3 = new Rectangulo(4, 2);
        let arR = [rec1, rec2, rec3];
        console.log(rec1.perimetro());

        console.log(mayorArea(arR));

    //Propiedades inmobiliarias
        let prop1 = new propInmobiliarias("Calle Perico 4", 200, 525000);
        let prop2 = new propInmobiliarias("Calle Perico 4", 150, 320000);
        let prop3 = new propInmobiliarias("Calle Perico 4", 100, 200000);
        let arP = [prop1, prop2, prop3];
        console.log(prop1.mostrarInfo());
        console.log(ppm2(arP));

    //Estudiantes y asignaturas
        let e1= new Estudiante("Ángel", 5, 6, 7);
        let e2 = new Estudiante("Pepe", 7, 8, 4);
        let e3 = new Estudiante("Alejandro", 6, 6, 5);
        let arrE = [e1,e2,e3];
        
        console.log(mejorEstudiante(arrE));
})();