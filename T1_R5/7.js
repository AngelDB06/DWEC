function squareAndSum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) { 
        sum += args[i] * args[i]; 
    }
    return sum;
}