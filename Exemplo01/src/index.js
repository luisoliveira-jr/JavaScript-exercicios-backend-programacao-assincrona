const express = require('express');
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground');

const app = express();

app.get('/teste1', async (req, res) => {
    const cidade = await getCityFromZipcode('41256250');

    res.send(`A cidade encontrada foi ${cidade}.`);
});

//Utilizando Promise.all() só funciona quando uma promise não depende da outra.
app.get('/teste2', async (req, res) => {
    const cidade = await getCityFromZipcode('41256250');
    const cidade2 = await getCityFromZipcode('41256250');

    const promise = await Promise.all([cidade, cidade2]);

    const [resposta1, resposta2] = promise

    res.send(`A cidade encontrada foi ${resposta1}, ${resposta2}.`);
});

//Exercicio01
app.get('/pacote/:nomePacote', async (req, res) => {
    const { nomePacote } = req.params;
    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);
    res.send(descricaoPacote);
});

app.listen(3000);