const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const buscarProdutos = async (req, res) => {
    return res.json(produtos);
};

const detalharProduto = async (req, res) => {
    const { idProduto } = req.params;

    const produto = produtos.find(produto => produto.id === Number(idProduto));

    if (!produto) {
        return res.status(404).json({ mensagem: "O produto não foi encontrado." });
    };

    return res.json(produto);
}

const calcularFrete = async (req, res) => {
    const { idProduto, cep } = req.params;

    const produto = produtos.find(produto => produto.id === Number(idProduto));

    if (!produto) {
        return res.status(404).json({ mensagem: "O produto não foi encontrado." });
    };

    const estado = await getStateFromZipcode(cep);

    let valorFrete = 0;

    if (estado === 'SP' || estado === 'RJ') {
        valorFrete = produto.valor * 0.15;
        return res.json({
            produto,
            estado,
            frete: valorFrete
        });
    };

    if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
        valorFrete = produto.valor * 0.1;
        return res.json({
            produto,
            estado,
            frete: valorFrete
        });
    };

    valorFrete = produto.valor * 0.12;

    return res.json({
        produto,
        estado,
        frete: valorFrete
    });
}

module.exports = {
    buscarProdutos,
    detalharProduto,
    calcularFrete
};