const get = (req, res) => {
    const {id} = req.body;

    res.status(200).send({
        mensagem: `OK, deu certo id = ${id}`
})};

module.exports = {
    get
}
