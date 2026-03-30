const sumaCallback = (a, b, callback) => {
    setTimeout(() => callback(null, a + b), 1000);
};
const sumaPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        sumaCallback(a, b, (error, resultado) => {
            if (error) reject(error);
            else resolve(resultado);
        });
    });
};
sumaPromesa(5, 3).then(console.log);