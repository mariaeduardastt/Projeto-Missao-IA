const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que caracteriza o racismo estrutural na sociedade?",
        alternativas: [
            {
                texto: "Desigualdades raciais",
                afirmacao: [
                    "São perpetuadas por instituições, políticas e normas sociais.",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "Discriminação individual",
                afirmacao: [
                    "Apenas a discriminações individual e direta afeta a sociedade",
                    "afirmacao 2"
                    ]
            }           
            
        ]
    },
    {
        enunciado: "principal dano causado pelo racismo",
        alternativas: [
            {
                texto:"fortalece a autoestima das vitimas",
                afirmacao: [
                    "racismo enfraquece a autoestima, perpetuando sentimentos de inferioridade",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "contribui para a exclusão social e marginalização de grupos minoritarios ",
                afirmacao: [
                    "reforça a desigualdade e estereótipos discriminatórios",
                    "afirmacao 2"
                    ]
            }
        ]
    },
    {
        enunciado: "você apoia racismo?",
        alternativas: [
            {
                texto:"sim, eu apoio o movimento racista",
                afirmacao: [
                    "você realmente já ouviu  falar o que é o racismo?  A sua história e quantas milhares de pessoa foram prejudicadas e mortas? ",
                    "afirmacao 2"
                    ]
            },
            {
                texto:"Não, sou contra o movimento racista",
                afirmacao: [
                    "que legal! concordamos que o racismo não é uma coisa boa ",
                    "afirmacao 2"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
