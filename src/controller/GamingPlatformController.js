function get(req, res) {
    res.status(200).send({
        mensagem: `Usando GET dentro da rota de plataforma de jogos`
    })
}

function getById(req, res) {

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