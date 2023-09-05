const get = (req, res) => {

    res.status(200).send({
        mensagem: 'Usango o GET dentro da rota de produtos'
})};

module.exports = {
    get
}
