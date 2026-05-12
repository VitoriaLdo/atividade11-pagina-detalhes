const livros = [
    {
        id: 1,
        nome: "Dom Casmurro",
        categoria: "Romance",
        preco: 48.90,
        descricao: "Livro clássico da literatura brasileira escrito por Machado de Assis.",
        imagem: "img/dom-casmurgo.webp"
    },
    {
        id: 2,
        nome: "1984",
        categoria: "Ficção",
        preco: 39.90,
        descricao: "Livro de George Orwell sobre uma sociedade controlada.",
        imagem: "img/1984.jpg"
    },
    {
        id: 3,
        nome: "O Hobbit",
        categoria: "Fantasia",
        preco: 59.90,
        descricao: "Aventura de Bilbo Bolseiro na Terra Média.",
        imagem: "img/o-hobbit.jpg"
    }
];

const listaLivros = document.getElementById("lista-livros");
if(listaLivros){

    livros.forEach(livro => {

        listaLivros.innerHTML += `
            <div class="card">
                <img src="${livro.imagem}" alt="${livro.nome}">
                <h2>${livro.nome}</h2>
                <p>Categoria: ${livro.categoria}</p>
                <p>R$ ${livro.preco}</p>

                <a href="detalhes.html?id=${livro.id}">
                    Ver detalhes
                </a>
            </div>
        `;
    });
}


const detalhes = document.getElementById("detalhes");
if (detalhes) {
    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));
    const livro = livros.find(item => item.id === id);

    if (livro) {
        detalhes.innerHTML = `
            <img src="${livro.imagem}" alt="${livro.nome}">
            <h2>${livro.nome}</h2>
            <p><strong>Categoria:</strong> ${livro.categoria}</p>
            <p><strong>Preço:</strong> R$ ${livro.preco}</p>
            <p>${livro.descricao}</p>
            <a href="index.html" class="botao">
                Voltar
            </a>
        `;

    } else {
        detalhes.innerHTML = `
            <h2>Livro não encontrado</h2>
        `;
    }
}