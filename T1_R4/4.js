function combineTwoArrays(arr1, arr2){
    let narr = new Array()
    for (let i = 0; i < arr1.length; i++) {
        narr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        narr.push(arr2[i])
        
    }
    return narr;
}