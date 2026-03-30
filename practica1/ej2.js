const miFuncion = x => {
    let y="";
    for(let i=x.length-1;i>=0;i--){
        y=y+x[i];
    }
    return y;
}



let obj = miFuncion("abcd");
console.log(obj) // dcba