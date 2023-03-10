const { imoveis } = require("../dados/imoveis");

const imprimirListaImoveis = (req, res) => {
    res.send(imoveis)
}

const filtrarImovel = (req, res) => {
    const imovelEncontrado = imoveis.find(imovel => imovel.id === Number(req.params.id))

    res.send(imovelEncontrado)
}

module.exports = {
    imprimirListaImoveis,
    filtrarImovel,
}