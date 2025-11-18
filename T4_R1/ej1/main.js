const capturaClick=()=>{
    document.addEventListener("click", ()=>{
        alert("Has hecho click");
    });
};

(function (){
    capturaClick();
})();