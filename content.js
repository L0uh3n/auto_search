// Função que gera as palavras aleatórias.
function gerarPalavraAleatoria(tamanho) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz';
    let palavra = '';

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        palavra += caracteres[indice];
    }

    return palavra;
}

const tamanhoPalavra = 8;
const palavraAleatoria = gerarPalavraAleatoria(tamanhoPalavra);
console.log(palavraAleatoria);

// Função que insere as palavras geradas na caixa de texto e pesquisa automaticamente.
function autoSearch() {
    const searchBar = document.getElementsByTagName("textarea");
    const searchEnter = document.getElementsByTagName("input");

    for (let i = 0; i < searchBar.length; i++) {
        console.log(searchBar[i].id);
        if (searchBar[i].id.toLowerCase().includes("sb_form_q")) {
            searchBar[i].value = palavraAleatoria;

            for (let j = 0; j < searchEnter.length; j++) {
                console.log(searchEnter[j].id);
                if (searchEnter[j].id.toLowerCase().includes("sb_form_go")) {
                    searchEnter[j].click();
                }
            }
        } 
    }
}

setTimeout(autoSearch, 3000);