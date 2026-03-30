const mifuncion = (x) => {
    const [prim, seg, ...resto] = x;
    return { resto };
};
const obj = mifuncion([10, 20, 30, 40, 50]);
console.log(obj); 