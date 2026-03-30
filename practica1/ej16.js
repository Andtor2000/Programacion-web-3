const obtenerUsuario = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, nombre: "Juan" });
        }, 1000);
    });
};
const obtenerPosts = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, titulo: "Post 1", userId },
                { id: 2, titulo: "Post 2", userId }
            ]);
        }, 1000);
    });
};
const obtenerDatosConPromesas = () => {
    return obtenerUsuario()
        .then(usuario => {
            return obtenerPosts(usuario.id).then(posts => {
                return { usuario, posts };
            });
        });
};
const obtenerDatosConAsyncAwait = async () => {
    const usuario = await obtenerUsuario();
    const posts = await obtenerPosts(usuario.id);
    return { usuario, posts };
};
obtenerDatosConAsyncAwait().then(resultado => {
    console.log(resultado);
});