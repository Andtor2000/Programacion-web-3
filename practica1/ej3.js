const mifuncion = (arreglo) => {
    const pares = []
    const impares = []
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]%2==0){
            pares.push(arreglo[i]);
        }else{
            impares.push(arreglo[i]);
        }
    }
    return { pares, impares };
};

let obj = mifuncion([1, 2, 3, 4, 5]);
console.log(obj); // { pares: [2, 4], impares: [1, 3, 5] }