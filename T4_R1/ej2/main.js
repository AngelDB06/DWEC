const movRaton = ()=>{
    document.addEventListener("mousemove", (event) => {
        document.body.textContent= `(${event.pageX}, ${event.pageY})`
    })
}

(()=>{
    movRaton();
})();