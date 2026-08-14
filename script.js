const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        "enunciado": "O que caracteriza o racismo estrutural na sociedade?",
        "alternativas": [
            {
                "texto": "Desigualdades raciais enraizadas nas instituições",
                "afirmacao": [
                    "São perpetuadas por instituições, políticas e normas sociais.",
                    "O racismo estrutural se manifesta na dificuldade de acesso a oportunidades de trabalho, educação e posições de liderança."
                ]
            },
            {
                "texto": "Ações isoladas de discriminação individual",
                "afirmacao": [
                    "Apenas focar em atitudes individuais ignora como as leis e a história moldaram as desigualdades.",
                    "Superar o racismo exige transformar não só comportamentos pessoais, mas também estruturas sociais e jurídicas."
                ]
            }           
        ]
    },
    {
        "enunciado": "Qual é o principal dano causado pelo racismo?",
        "alternativas": [
            {
                "texto": "Impactos profundos na saúde mental e na autoimagem das vítimas",
                "afirmacao": [
                    "O racismo enfraquece a autoestima, perpetuando sentimentos de inferioridade e gerando traumas psicológicos.",
                    "A discriminação constante afeta o bem-estar emocional e limita o desenvolvimento pleno de crianças e adultos."
                ]
            },
            {
                "texto": "Perpetuação da exclusão social e marginalização de grupos minoritários",
                "afirmacao": [
                    "Reforça a desigualdade econômica e estimula estereótipos discriminatórios na sociedade.",
                    "Priva a sociedade da diversidade cultural e do potencial de milhões de pessoas que têm seus direitos negados."
                ]
            }
        ]
    },
    {
        "enunciado": "Como a sociedade deve se posicionar em relação ao racismo?",
        "alternativas": [
            {
                "texto": "Apoiar a conscientização e o combate ativo ao racismo (Antirracismo)",
                "afirmacao": [
                    "Ser antirracista exige reconhecer os privilégios e agir ativamente contra qualquer forma de discriminação.",
                    "A história mostra que a luta contra o racismo é essencial para garantir direitos humanos e igualdade para todos."
                ]
            },
            {
                "texto": "Adotar uma postura contrária a qualquer manifestação racista",
                "afirmacao": [
                    "Concordamos que o racismo é uma violação dos direitos humanos que precisa ser erradicada.",
                    "Promover a empatia, o respeito e a equidade é fundamental para construir uma sociedade justa e inclusiva."
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
    const afirmacoes = opcaoSelecionada.afirmacao.join(" ");
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Conclusão:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();