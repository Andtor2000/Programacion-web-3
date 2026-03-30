const mifuncion = (arreglo) => {
    let may = 0;
    let min = -1;
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]>may){
            may=arreglo[i];
        }
        if(arreglo[i]<min || min==-1){
            min=arreglo[i];
        }
    }
    return { may, min };
};

let obj2 = mifuncion([3, 1, 5, 4, 2]);
console.log(obj2); // { mayor: 5, menor: 1 }