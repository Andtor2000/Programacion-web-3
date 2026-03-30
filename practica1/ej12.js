const operacion = () => {
    setTimeout(() => {
        console.log("Paso 1");
        setTimeout(() => {
            console.log("Paso 2");
            setTimeout(() => {
                console.log("Paso 3");
                setTimeout(() => {
                    console.log("Paso 4");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const operacionC = async () => {
    await delay(1000);
    console.log("Paso 1");
    await delay(1000);
    console.log("Paso 2");
    await delay(1000);
    console.log("Paso 3");
    await delay(1000);
    console.log("Paso 4");
};
operacionC();