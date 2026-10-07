import {aleatorio} from ‘./aleatorio.js’;
import {perguntas} from ‘./perguntas.js;


const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        "enunciado": "Quando surge um grande desafio, qual atitude de uma princesa Disney você decide seguir?",
        "alternativas": [
            {
                "texto": "Demonstrar a coragem de Mulan e enfrentar os obstáculos para proteger quem você ama.",
                "afirmacao": [
                    "Você escolheu a bravura de Mulan, mostrando determinação para quebrar barreiras e superar qualquer limite.",
                    "Sua força interior provou que a verdadeira coragem é agir pelo bem dos outros, mesmo diante do incerto."
                ]
            },
            {
                "texto": "Inspirar-se na gentileza de Cinderela e manter a fé e a bondade, não importa a situação.",
                "afirmacao": [
                    "Assim como Cinderela, você acredita que a bondade e a esperança são capazes de transformar o destino.",
                    "Sua resiliência e empatia mostram que um coração generoso sempre encontra o seu próprio 'felizes para sempre'."
                ]
            }           
        ]
    },
    {
        "enunciado": "Qual é a sua forma favorita de buscar novos conhecimentos e realizar seus sonhos?",
        "alternativas": [
            {
                "texto": "Com o espírito trabalhador de Tiana, planejando e esforçando-se para conquistar seus objetivos.",
                "afirmacao": [
                    "Inspirado por Tiana, você entende que grandes conquistas exigem foco, dedicação e pé no chão.",
                    "Sua ética de trabalho e perseverança garantem que seus projetos saiam do papel e se tornem realidade."
                ]
            },
            {
                "texto": "Com a paixão de Bela pelos livros e pela curiosidade de explorar novas ideias.",
                "afirmacao": [
                    "Seguindo os passos de Bela, você valoriza a leitura, o conhecimento e a capacidade de enxergar além das aparências.",
                    "Sua mente aberta e sede de aprendizado abrem portas para novas perspectivas e grandes descobertas."
                ]
            }
        ]
    },
    {
        "enunciado": "Como você prefere explorar o mundo ao seu redor?",
        "alternativas": [
            {
                "texto": "Navegar pelos oceanos como Moana para descobrir o que há além do horizonte.",
                "afirmacao": [
                    "Com o espírito guiado pelo oceano igual ao de Moana, você lidera o próprio caminho com ousadia.",
                    "Sua conexão com suas raízes e seu desejo de explorar garantem um futuro de grandes aventuras e liderança."
                ]
            },
            {
                "texto": "Ver o mundo sob uma nova perspectiva como Jasmine, buscando liberdade e autonomia.",
                "afirmacao": [
                    "Assim como Jasmine, você não aceita ter seu destino traçado por outros e busca sempre a verdade.",
                    "Sua voz forte e busca por liberdade inspiram todos a buscarem sua própria independência."
                ]
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua Jornada Disney:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

mostraPergunta();