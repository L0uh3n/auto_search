function autoSearch() {
    const palavrasAleatorias = [
        "abacaxi", "bicicleta", "cachorro", "diamante", "elefante", "foguete", "girassol",
        "hipopótamo", "igreja", "jacaré", "kiwi", "limonada", "macarrão", "nariz", "ombrelone",
        "panda", "quadro", "raposa", "sapato", "tigre", "uva", "violão", "xadrez", "yoga",
        "zebra", "abóbora", "borboleta", "carambola", "dado", "escada", "foca", "gato",
        "hamburguer", "índio", "jardim", "ketchup", "leão", "mochila", "navio", "óculos",
        "pente", "queijo", "roda", "sol", "tatuagem", "urso", "viagem", "waffle", "xícara",
        "yogurte", "zoológico", "anel", "baleia", "camisa", "dente", "escova", "fogueira",
        "globo", "hamster", "ilha", "janela", "karaokê", "lua", "meia", "navalha", "orelha",
        "pipoca", "queimadura", "rosto", "sol", "tesoura", "urso", "ventilador", "xícara",
        "yo-yo", "zíper", "banheira", "cacto", "dromedário", "estrela", "flauta", "golfinho",
        "hortelã", "iglu", "jabuticaba", "karatê", "lobo", "manteiga", "nuvem", "orquestra",
        "pinguim", "quintal", "relógio", "sorvete", "tartaruga", "unicórnio"
    ];

    /*
    Para que as palavras presentes no array palavrasAleatorias não repetissem, era necessário uma verificação.
    A solução encontrada foi usar a API do Chrome para armazenar o array contendo as palavras que já haviam sido usadas, 
    o que não seria possível se eu tentasse de forma convencional, uma vez que, ao atualizar a página, a extensão/algoritmo "reiniciaria".
    */

    // Recupera palavrasUtilizadas do armazenamento local do navegador
    chrome.storage.local.get('palavrasUtilizadas', function (data) {
        console.log(data);
        console.log(palavrasUtilizadas);

        var palavrasUtilizadas = data.palavrasUtilizadas || [];

        if (palavrasUtilizadas.length >= 90) {
            palavrasUtilizadas = [];
        }

        let palavra;
        do {
            palavra = Math.floor(Math.random() * palavrasAleatorias.length);
        } while (palavrasUtilizadas.includes(palavrasAleatorias[palavra]));

        palavrasUtilizadas.push(palavrasAleatorias[palavra]);

        // salva palavrasUtilizadas no armazenamento local do navegador
        chrome.storage.local.set({ 'palavrasUtilizadas': palavrasUtilizadas }, function () {
            const searchBar = document.getElementById("sb_form_q");
            const searchEnter = document.getElementById("sb_form_go");

            // intervalo para realizar a pesquisa
            setTimeout(() => {
                // insere a palavra no campo de pesquisa
                searchBar.value = palavrasAleatorias[palavra];

                setTimeout(() => {
                    searchEnter.click();
                }, 1000);
            }, 5000);
        });
    });
}

autoSearch();