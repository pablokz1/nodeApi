function get(req, res) {
    res.status(200).send({
        mensagem: `Usando GET dentro da rota de usuários`
    })
}

function getById(req, res) {
    const { id } = req.body;

    res.status(200).send({
        mensagem: `OK, deu certo id = ${id}`
    });
}

function post(req, res) {

}

function put(req, res) {

}

function delet(req, res) {

}
module.exports = {
    get,
    getById,
    post,
    put,
    delet
};