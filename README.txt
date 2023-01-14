Código síncrono
Um código síncrono é executado sequencialmente, de forma que, antes de executar a próxima linha, a execução da linha anterior precisa ser finalizada.

Código assíncrono
Um código assíncrono é executado de maneira não linear. Vai deixando tarefas para serem tratadas depois, conforme for necessário.

Promises
A programação assíncrona é trabalhada com "promessas" (promises), significa que em algum momento a "solicitação" será aceita ou rejeitada.
A promise tem três estados: pendente, resolvida e rejeitada.

Execução do Nodejs - ciclo de eventos (event loop)

// then / catch

then() -> é utilizado na programação assíncrona, retorna uma função callback depois que a promise é resolvida.
getCityFromZipcode('41256250').then(cidade => {
    console.log(cidade)
});

catch() -> é utilizado quando a promise retorna erro (é rejeitada)
getCityFromZipcode('41256250').then(cidade => {
    console.log(cidade)
}).catch((erro) => {
    console.log(erro)
});

---> As funções assícronas podem ser usadas descombinadas da função principal:

const cidade = getCityFromZipcode();

cidade.then(cidade => {
    console.log(cidade);
});

cidade.catch(erro => {
    console.log(erro);
});

// async (assincrono) / await (aguarde)
Toda função assícrona pode usar await

(async fuction () {
    const cidade = await getCityFromZipcode('41256250');
    console.log(cidade);
    const estado = await getStateFromZipcode('41256250');
    console.log(estado);
})();