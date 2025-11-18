const expresionRegular= () => {
    const texto = '43434'

    const regexNumero= /^\d+$/;

    const regexNumeroDecimal = /^\d+(\.\d+)?$/;

    const regexNumeroObj=new RegExp('^\d+$');

    if (regexNumero.test(texto)) {
        console.log(`${texto} es un número válido`);
    } else {
        console.log(`${texto} no es un número válido`);
    }
}

const buscar = () => {
    const regex = /o+/g;
    const str = "marinado de oro";
    let array;

    while ((array = regex.exec(str)) !==null) {
        console.log(`Found ${array[0]}. Next starts at ${regex.lastIndex}.`);
    }
}

const CP = () => {
    const regex = /\d{5}/g;
    const str = "CP 18220 CP 22300 CP 04300";
    let array;

    while ((array = regex.exec(str)) !==null) {
        console.log(`Found ${array[0]}. Next starts at ${regex.lastIndex}.`);
    }
}


const main = () =>{
    expresionRegular();
    buscar();
    CP();
}
document.addEventListener("DOMContentLoaded", main);