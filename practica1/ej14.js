const sumaPromesa = (a, b) => Promise.resolve(a + b);
const sumaCallback = (a, b, callback) => {
    sumaPromesa(a, b)
        .then(resultado => callback(null, resultado))
        .catch(error => callback(error, null));
};
sumaCallback(5, 3, (error, resultado) => {
    if (error){
        console.error(error);
    } 
    else console.log(resultado);
});