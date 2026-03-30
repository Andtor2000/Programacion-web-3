const getUser = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, nombre: "Juan" }), 1000);
    });
};
const getPosts = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, titulo: "Post 1", userId },
            { id: 2, titulo: "Post 2", userId }
        ]), 1000);
    });
};
getUser()
    .then(user => {
        console.log("Usuario:", user);
        return getPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });