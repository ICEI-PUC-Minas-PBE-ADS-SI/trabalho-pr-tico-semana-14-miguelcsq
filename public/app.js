const receitas = [
  {
    id: 0,
    titulo: "MEXIDINHO",
    categoria: "Comida Brasileira",
    tempo: "35 min",
    imagem: "mexidinho.jpg",
    descricao: "Arroz, feijão e carne moída bem temperadinha.",
    ingredientes: 
    {
      ingrediente1: "2 colheres (sopa) de azeite",
      ingrediente2: "1 cebola",
      ingrediente3: "2 dentes de alho",
      ingrediente4: "2 xícaras de arroz cozido (pronto)",
      ingrediente5: "1/2 xícara de coentro picado",
      ingrediente6: "3 linguiças finas",
      ingrediente7: "1 pimentão vermelho",
      ingrediente8: "1 colher (chá) de cominho",
      ingrediente9: "2 xícaras de feijao vermelho (pronto)",
      ingrediente10: "2 ovos fritos",
    },
    preparo: 
    {
      preparo1: "1. Em uma panela adicione o azeite, as linguiças fatiadas e a cebola em tiras e refogue.",
      preparo2: "2. Adicione o pimentão em tiras, o alho e tempere com cominho em pó.",
      preparo3: "3. Em seguida adicione o arroz e o feijão cozidos, mexa delicadamente.",
      preparo4: "4. Finalize com o ovo frito e o coentro.",
    },
    link: "detalhes.html?id=0",
    destaque: true,
  },
  {
    id: 1,
    titulo: "MACARRÃO COM CALABRESA",
    categoria: "Massas",
    tempo: "10 min",
    imagem: "macarrao.jpg",
    descricao: "Macarrão rápido e delicioso feito na pressão.",
    ingredientes: {
      ingrediente1: "1 pacote de macarrão penne, parafuso, ou gravatinha",
      ingrediente2: "2 caixinha (a mesma medida da caixinha do molho) de água",
      ingrediente3: "1 cebola média picada",
      ingrediente4: "Sal a gosto",
      ingrediente5: "1 caixinha de extrato/polpa/molho de tomate",
      ingrediente6: "1 lata de creme de leite",
      ingrediente7: "3 gomos de calabresa picados em rodelas finas",
      ingrediente8: "Óleo ou azeite para refogar a cebola e a calabresa",
      ingrediente9: "",
      ingrediente10: "",
    },
    preparo: 
    {
      preparo1: "1. Em uma panela de pressão, doure a cebola e a calabresa.",
      preparo2: "2. Após dourar, adicione o sal, o molho, as 2 medidas de água, o macarrão e o creme de leite.",
      preparo3: "3. Se o macarrão não tiver completamente coberto, coloque mais água.",
      preparo4: "4. Misturar bem, adicionar o sal e fechar a panela.",
      preparo5: "5. Contar 5 minutos a partir do momento em que a panela fizer pressão.",
      preparo6: "6. Polvilhe queijo ralado e bom apetite.",
    },
    link: "detalhes.html?id=1",
    destaque: true,
  },
  {
    id: 2,
    titulo: "SOBREMESA 3 INGREDIENTES",
    categoria: "Sobremesas",
    tempo: "20 min",
    imagem: "sobremesa.jpg",
    descricao: "Doce rápido, fácil e delicioso.",
    ingredientes: {
      ingrediente1: "2 caixas de leite condensado",
      ingrediente2: "3 pacotes de biscoito cookie",
      ingrediente3: "100 ml de suco de limão",
      ingrediente4: "",
      ingrediente5: "",
      ingrediente6: "",
      ingrediente7: "",
      ingrediente8: "",
      ingrediente9: "",
      ingrediente10: "",
    },
    preparo: 
    {
      preparo1: "1. Junte o leite condensado com o suco de limão.",
      preparo2: "2. Misture bem e reserve.",
      preparo3: "3. Triture 1 pacote de biscoito tipo cookie e reserve.",
      preparo4: "4. Em uma forma, coloque o fundo com a misture de leite condensado e logo após uma camada de biscoito cookie.",
      preparo5: "5. Faça camadas alternadas até terminar com uma de massa doce.",
      preparo6: "6. Finalize com o biscoito triturado e leve à geladeira até gelar.",
    },
    link: "detalhes.html?id=2",
    destaque: true,
  },
];

function montarPagina() {
  montarCarrossel();
  montarCards();
}

function montarCarrossel() {
  const destaques = receitas.filter((r) => r.destaque);
  const carouselInner = document.getElementById("carousel-inner");
  const carouselIndicators = document.getElementById("carousel-indicators");

  destaques.forEach((receita, index) => {
    const activeClass = index === 0 ? "active" : "";

    carouselIndicators.innerHTML += `
      <button type="button" data-bs-target="#carouselReceitas" data-bs-slide-to="${index}" class="${activeClass}" aria-label="Slide ${
      index + 1
    }"></button>
    `;

    carouselInner.innerHTML += `
      <div class="carousel-item ${activeClass}">
        <img src="${receita.imagem}" class="d-block w-100" alt="${receita.titulo}">
        <div class="carousel-caption d-none d-md-block carousel-receita">
          <h5>${receita.titulo}</h5>
          <p>${receita.descricao}</p>
          <a href="${receita.link}" class="btn btn-light btn-sm">Ver receita</a>
        </div>
      </div>
    `;
  });
}

function montarCards() {
  const container = document.getElementById("receitasContainer");
  const outrasReceitas = receitas;

  outrasReceitas.forEach((receita) => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
          <div class="card-body">
            <h5 class="card-title">${receita.titulo}</h5>
            <p class="card-text">${receita.categoria}</p>
            <p class="card-text"><strong>Tempo:</strong> ${receita.tempo}</p>
            <a href="${receita.link}" class="btn btn-danger">Ver Receita</a>
          </div>
        </div>
      </div>
    `;
  });
}

window.onload = montarPagina;
