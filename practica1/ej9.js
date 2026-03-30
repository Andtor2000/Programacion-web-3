const promesa = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Éxito después de 3 segundos");
        }, 3000);
    });
};
promesa().then(mensaje => console.log(mensaje));