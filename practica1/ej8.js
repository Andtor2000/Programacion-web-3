const ejecutarCallback = (callback) => {
    setTimeout(() => {
        callback("Mensaje después de 2 segundos");
    }, 2000);
};
ejecutarCallback((mensaje) => {
    console.log(mensaje); 
});