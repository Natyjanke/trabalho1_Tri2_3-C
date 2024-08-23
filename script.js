const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
     enunciado: "Você ganhou um ingresso para um show de música de um cantor que você não gosta",
        alternativas: [
            {
                texto: "chama os amigos para não pelo menos se divertir",
                afirmacao: "valoriza os amigos"
            },
            {
                texto: "chama sua irmã e sua prima",
                afirmacao: "valoriza momentos em familia"
            }
        ]
    },
    {
        enunciado: "nos fins de semana voce aproveia...",
        alternativas: [
            {
                texto: "ir a um park e se divertir",
                afirmacao: "gosta de sempre aproveitar seus tempos livres"
            },
            {
                texto: "ficando em casa e relachar",
                afirmacao: "Você gosta de aproveitar o tempo com sigo mesma"
            }
        ]
    },
    {
        enunciado: "Achei um jogo de cartas que procurava a um tempo. o que vai fazer?",
        alternativas: [
            {
                texto: "chamar minha irmã para jogar",
                afirmacao: "Você se diverte muito"
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
