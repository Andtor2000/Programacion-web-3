const mifuncion = x =>{
    x=x.toLowerCase();
    let voc ={
        a:0,
        e:0,
        i:0,
        o:0,
        u:0
    }
    
    for(let i=0;i<x.length;i++){
        if(x[i]=='a' || x[i]=='e' || x[i]=='i' || x[i]=='o' || x[i]=='u'){
            voc[x[i]]++;
        }
    }
    return voc;
}
let obj = mifuncion("euforia");
console.log(obj);
