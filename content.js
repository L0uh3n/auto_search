// Função que gera as palavras aleatórias.
function gerarPalavraAleatoria() {
    const palavrasAleatorias = [
        "abacaxi",
        "bicicleta",
        "cachorro",
        "diamante",
        "elefante",
        "foguete",
        "girassol",
        "hipopótamo",
        "igreja",
        "jacaré",
        "kiwi",
        "limonada",
        "macarrão",
        "nariz",
        "ombrelone",
        "panda",
        "quadro",
        "raposa",
        "sapato",
        "tigre",
        "uva",
        "violão",
        "xadrez",
        "yoga",
        "zebra",
        "abóbora",
        "borboleta",
        "carambola",
        "dado",
        "escada",
        "foca",
        "gato",
        "hamburguer",
        "índio",
        "jardim",
        "ketchup",
        "leão",
        "mochila",
        "navio",
        "óculos",
        "pente",
        "queijo",
        "roda",
        "sol",
        "tatuagem",
        "urso",
        "viagem",
        "waffle",
        "xícara",
        "yogurte",
        "zoológico",
        "anel",
        "baleia",
        "camisa",
        "dente",
        "escova",
        "fogueira",
        "globo",
        "hamster",
        "ilha",
        "janela",
        "karaokê",
        "lua",
        "meia",
        "navalha",
        "orelha",
        "pipoca",
        "queimadura",
        "rosto",
        "sol",
        "tesoura",
        "urso",
        "ventilador",
        "xícara",
        "yo-yo",
        "zíper"
    ];

    for (let i = 0; i < palavrasAleatorias.length; i++) {
        var indice = Math.floor(Math.random() * palavrasAleatorias.length);
    }

    return palavrasAleatorias[indice];
}

var palavraAleatoria = gerarPalavraAleatoria();
console.log(palavraAleatoria);

// Função que insere as palavras geradas na caixa de texto e pesquisa automaticamente.
function inserePalavraAleatoria() {
    const searchBar = document.getElementById("sb_form_q");
    const searchEnter = document.getElementById("sb_form_go");
    console.log(searchBar);

    searchBar.value = palavraAleatoria;
    
    // Criei um intervalo para realizar a pesquisa.
    setInterval(() => {
        searchEnter.click();
    }, 1000);
}

setTimeout(inserePalavraAleatoria, 5000);