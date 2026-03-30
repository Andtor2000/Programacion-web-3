const esPalindromo = (x) => {
    let y="";
    for(let i=x.length-1;i>=0;i--){
        y=y+x[i];
    }  
    return x === y;
};
let band1 = esPalindromo("oruro");
console.log(band1); // true;
let band2 = esPalindromo("hola");
console.log(band2); // false;