const { resolve } = require("path");
const express = require("express");
const server = express();

const ideas = [
  {
    img:
      "https://as2.ftcdn.net/jpg/00/44/17/11/500_F_44171108_7iRPSwptiKB34mSn1j5DiElTTyFAVHFS.jpg",
    title: "Leia para seus filhos nesta quarentena.",
    category: "Hora da Leitura Online",
    description:
      "Lendo para uma criança você contribui para ela desenvolver atenção, concentração, memória e raciocínio. Dessa forma, toda criança pode desenvolver seu potencial ao máximo. Quando você lê para uma criança, ela pode buscar o futuro que quiser.",
    url: "https://www.euleioparaumacrianca.com.br/",
  },
  {
    img: "https://image.flaticon.com/icons/svg/1810/1810085.svg",
    title: "Promova a festa do karaokê na sua casa",
    category: "karaokê com a família",
    description:
      "Pode parecer uma brincadeira de crianças, mas os adultos desfrutam ainda mais que os pequenos. É por isso, um entretenimento ideal para toda a família. As canções são um meio ideal para o aprendizado das crianças, já que as ajuda a ampliar o seu vocabulário. As canções desenvolvem a criatividade e imaginação das crianças. Ajuda as crianças com o aprendizado da leitura, ao ter que seguir a letra da canção que vai aparecendo na tela.",
    url: "http://www.thekaraokechannel.com/",
  },
  {
    img:
      "https://as2.ftcdn.net/jpg/02/86/03/53/500_F_286035381_LpuSovF4f2wa6BoLk2wKja9SufVYiZ7t.jpg",
    title: "Aprenda um novo idioma, que tal aprender Francês?",
    category: "Curso de Francês Online",
    description:
      "Aprender uma nova língua tem muitos benefícios que vão além de dizer frases e aprender vocabulário, por exemplo: Você passa a aprender qualquer outra coisa mais rápido, você se torna um ouvinte melhor, aprimora seu foco, levanta sua autoconfiança, previne doenças cerebrais, melhora o desempenho em seu próprio idioma e enriquecimento cultural.",
    url: "https://www.youtube.com/channel/UCQfqvixesxNDX_HswTDsx3w",
  },
  {
    img: "https://image.flaticon.com/icons/svg/201/201565.svg",
    title: "Curso Online de Programação",
    category: "Estudos Online",
    description:
      "Na RocketSeat tem a plataforma Started com cursos 100% online e gratuitos para você entrar com o pé direito nas tecnologias mais desejadas do mercado. Descubra o caminho para ,a stack NodeJs, React e React Native.",
    url: "https://rocketseat.com.br/starter",
  },
  {
    img: "https://www.flaticon.com/br/premium-icon/icons/svg/2410/2410407.svg",
    title: "Seja um dançarino nesta quarentena",
    category: "Dança de Salão Online",
    description:
      "A dança traz diversos benefícios para a saúde. Ela pode ser uma alternativa para movimentar o corpo e afastar o sedentarismo. Dançar aumenta a frequência cardíaca e estimula à circulação sanguínea, você também trabalha o corpo para ter mais equilíbrio, coordenação motora, alongamento e postura. Se você for um dançarino assíduo nesta quarentena e começar a dançar todos os dias em casa pelo menos 1h, você conseguirá até perder algumas calorias. Em ligue o som e chame todos em casa para dançar com você.",
    url: "https://www.youtube.com/channel/UC7ajZA36S9C5a-DfqaBxEBg",
  },
];

const nunjucks = require("nunjucks");
nunjucks.configure(resolve(__dirname, "..", "FrontEnd"), {
  express: server,
  noCache: true,
});

server.use(express.static(resolve(__dirname, "..", "FrontEnd")));

server.get("/", function (req, res) {
  const reversedIdeas = [...ideas].reverse();

  let lastIdeas = [];
  for (let idea of reversedIdeas) {
    if (lastIdeas.length < 4) {
      lastIdeas.push(idea);
    }
  }

  return res.render("main.html", { ideas: lastIdeas });
});

server.get("/ideas", function (req, res) {
  const reversedIdeas = [...ideas].reverse();

  return res.render("ideas.html", { ideas: reversedIdeas });
});

server.listen(3000);
