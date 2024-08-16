const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você ganhou um ingresso para um grande festival de música. Como você aproveita",
        alternativas: [
            {
                texto: "Vou com meus amigos e aproveito cada momento!",
                afirmacao: "Você valoriza a companhia dos amigos e sabe como se divertir em grupo."
            },
            {
                texto: "Aproveito para conhecer novas bandas e fazer novas amizades.",
                afirmacao: "Você é curioso e adora expandir seu círculo social."
            }
        ]
    },
    {
        enunciado: "Nas férias de verão, você decide:",
        alternativas: [
            {
                texto: "Viajar para a praia e relaxar ao máximo.",
                afirmacao: "Você sabe a importância de descansar e recarregar as energias."
            },
            {
                texto: "Fazer um curso rápido para aprender algo novo.",
                afirmacao: "Você gosta de aproveitar o tempo para se desenvolver e adquirir novas habilidades."
            }
        ]
    },
    {
        enunciado: "Você encontrou um livro que estava procurando há muito tempo. O que você faz?",
        alternativas: [
            {
                texto: "Leio tudo de uma vez, não consigo esperar!",
                afirmacao: "Você é apaixonado por leitura e se dedica completamente ao que gosta."
            },
            {
                texto: "Leio aos poucos, aproveitando cada página.",
                afirmacao: "Você aprecia o processo e gosta de aproveitar cada momento de forma plena."
            }
        ]
    },
    {
        enunciado: "Você tem a chance de aprender a tocar um instrumento musical. Qual você escolhe?",
        alternativas: [
            {
                texto: "Guitarra, adoro o som e o estilo!",
                afirmacao: "Você tem um espírito aventureiro e gosta de se destacar."
            },
            {
                texto: "Piano, aprecio a versatilidade e a beleza do som.",
                afirmacao: "Você valoriza a arte e busca a excelência em tudo o que faz."
            }
        ]
    },
    {
        enunciado: "Você está navegando nas redes sociais e vê um post inspirador. O que você faz?",
        alternativas: [
            {
                texto: "Compartilho com meus amigos para inspirá-los também.",
                afirmacao: "Você gosta de espalhar boas vibrações e inspirar os outros."
            },
            {
                texto: "Uso como motivação para iniciar um novo projeto.",
                afirmacao: "Você é proativo e usa a inspiração para criar e realizar."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre Você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
