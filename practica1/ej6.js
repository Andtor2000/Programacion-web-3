const mifuncion = (x) => {
    const [prim, seg] = x;
    return { prim, seg };
};
const obj = mifuncion([10, 20, 30, 40, 50]);
console.log(obj); 