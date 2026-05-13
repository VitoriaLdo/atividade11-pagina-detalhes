const livros = [
   {
      id: 1,
      nome: "Dom Casmurro",
      preco: 48.46,
      categoria: "Romance",
      destaque: true,
      imagem: "img/dom-casmurgo.webp",
      descricao: "Em Dom Casmurro, Bento Santiago relembra sua infância na Rua de Matacavalos e o relacionamento com Capitu, uma das personagens mais marcantes da literatura brasileira. Consumido pelo ciúme, ele narra sua versão dos fatos e levanta dúvidas sobre uma possível traição da esposa, criando uma história cheia de ambiguidades e questionamentos que até hoje dividem os leitores.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "1984",
      preco: 34.90,
      categoria: "Ficção",
      destaque: true,
      imagem: "img/1984.jpg",
      descricao: "Em 1984, Winston Smith vive em uma sociedade controlada pelo Partido e pelo Grande Irmão, onde até o passado é manipulado para manter o poder. Trabalhando na alteração de registros históricos, ele começa a questionar o sistema opressor e sonha em se rebelar contra o governo, em uma trama marcada pela vigilância, censura e controle da verdade.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Harry Potter",
      preco: 38.11,
      categoria: "Ficção",
      destaque: true,
      imagem: "img/harry-potter.jpg",
      descricao: "Em Harry Potter e a Pedra Filosofal, Harry Potter descobre aos 11 anos que é um bruxo e passa a fazer parte de um mundo mágico escondido dos humanos. Após crescer sendo maltratado pelos tios, ele aprende a verdade sobre a morte de seus pais e entende que possui uma ligação com o bruxo das trevas que tentou matá-lo quando ainda era bebê. Entre amizades, criaturas mágicas e desafios, Harry inicia sua jornada como um dos feiticeiros mais importantes de seu mundo.",
      emEstoque: false
    },
    {
      id: 4,
      nome: "Novembro 9",
      preco: 64.90,
      categoria: "Romance",
      destaque: false,
      imagem: "img/novembro-9.jpg",
      descricao: "Aos 18 anos, Fallon tenta recomeçar a vida em Nova York após um incêndio destruir sua carreira de atriz e deixá-la marcada por cicatrizes. Antes da mudança, ela conhece Ben, um jovem escritor, e os dois criam uma forte conexão. Mesmo separados pela distância, prometem se reencontrar todos os anos na mesma data. Com o tempo, o romance cresce, até que Fallon descobre um segredo que coloca em dúvida tudo o que viveu com Ben.",
      emEstoque: true
    },
    {
      id: 5,
      nome: "O Hobbit",
      preco: 74.90,
      categoria: "Ficção",
      destaque: false,
      imagem: "img/o-hobbit.jpg",
      descricao: "Em O Hobbit, Bilbo Bolseiro abandona sua vida tranquila ao lado do mago Gandalf e de treze anãos liderados por Thorin Escudo-de-Carvalho. Juntos, eles atravessam a Terra-média em uma perigosa missão para recuperar um tesouro guardado pelo dragão Smaug. Repleta de criaturas fantásticas, desafios e magia, a história se tornou um dos maiores clássicos da fantasia mundial.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "O Morro dos Ventos Uivantes",
      preco: 19.00,
      categoria: "Romance",
      destaque: false,
      imagem: "img/o-morro-dos-ventos-uivantes.jpg",
      descricao: "Em O Morro dos Ventos Uivantes, Catherine Earnshaw e Heathcliff vivem uma relação intensa marcada por amor, obsessão e vingança. Rejeitado e humilhado ao longo da vida, Heathcliff alimenta um profundo rancor, enquanto seu vínculo com Catherine se torna o centro de uma história trágica e emocionalmente complexa.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "Os Miseráveis",
      preco: 189.90,
      categoria: "Romance",
      destaque: false,
      imagem: "img/os-miseraveis.jpg",
      descricao: "Em Os Miseráveis, Jean Valjean é condenado a anos de prisão por roubar um pão e passa a enfrentar as injustiças e desigualdades da sociedade. A obra acompanha sua busca por redenção em uma narrativa emocionante que mistura drama, crítica social, política e questões humanas profundas.",
      emEstoque: true
    },
    {
      id: 8,
      nome: "O Alquimista",
      preco: 44.49,
      categoria: "Ficção",
      destaque: false,
      imagem: "img/o-alquimista.jpg",
      descricao: "Em O Alquimista, Santiago, um jovem pastor espanhol, parte em busca de um tesouro escondido nas Pirâmides do Egito. Durante a jornada, ele conhece pessoas que o ajudam a compreender que os verdadeiros tesouros estão no autoconhecimento, nos sonhos e nas lições aprendidas ao longo do caminho.",
      emEstoque: false
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
                <p>R$ ${livro.preco.toFixed(2)}</p>

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
            <p><strong>Preço:</strong> R$ ${livro.preco.toFixed(2)}</p>
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