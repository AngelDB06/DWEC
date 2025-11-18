export class Vivienda {
    constructor(c, n, cp) {
        this.c=c ? c :"s/n";
        this.n=n ? n :"s/n";
        this.cp=cp ? cp :"s/n";
        console.log("Nueva casa en calle: ",this.c, ", nº: ", this.n,", CP: ",this.cp);
    }

    setNumero(n){
        this.n=n;
    }

    setCalle(c) {
        this.c=c;
    }

    setCodigoPostal(cp){
        this.cp=cp;
    }

    imprimeCalle(){
        return this.c;
    }

    imprimeNumero(){
        return this.n;    }

    imprimeCodigoPostal(){
        return this.cp;    }
}