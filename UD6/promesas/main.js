async function getFetch() {
    let response = await fetch("https://fakestoreapi.com/products");
    console.log('response', response);
    // console.log('response.json()', response.json());
    console.log('response.json() await', await response.json());
}

function getFetchV2() {
    fetch("https://fakestoreapi.com/products/55")
        .then(res=>res.json())
        .then(json => console.log(json))
        .catch ( error => console.log("error", error))
}

const main = () => {
    getFetchV2();
}

document.addEventListener("DOMContentLoaded", main);