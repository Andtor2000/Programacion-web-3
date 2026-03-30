const getUsuario = () => Promise.resolve({ id: 1, nombre: "Juan" });
const getPosts = (x) => Promise.resolve([{ id: 1, titulo: "Post 1", userId: x }]);
getUsuario()
    .then(user => getPosts(user.id).then(posts => ({ user, posts })))
    .then(result => console.log(result))
    .catch(err => console.error(err));
const obtenerDatos = async () => {
    try {
        const user = await getUsuario();
        const posts = await getPosts(user.id);
        console.log({ user, posts });
    } catch (err) {
        console.error(err);
    }
};
obtenerDatos();