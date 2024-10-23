const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixaAltermativas = document.querySelector(".caixa-Alternativas");
const caixaResultados = document.querySelector(".caixa-Resultados");
const textoResultados = document.querySelector(".texto-Resultados");

const perguntas = [
    {
        enunciado: "Qual foi o inventor da honda?",
        alternativas: [
            {
                texto: "Torakusu yamaha",
                afirmacao: "afirmação"
            }
            ,
            {
                texto: "soichiro honda",
                afirmacao: "afirmação"
            },

        ]

    },
    {
        enunciado: "A motocicleta titan 150 é de qual fabricante",
        alternativas: [
            {
                texto: "Honda",
                afirmacao: "afirmação"
            }
            ,
            {
                texto: "Yamaha",
                afirmacao: "afirmação"
            },


        ]

    },
    {
        enunciado: "A motocicleta ybr 125 é de qual fabricante",
        alternativas: [
            {
                texto: "Honda",
                afirmacao: "afirmação"
            }
            ,
            {
                texto: "Yamaha",
                afirmacao: "afirmação"
            },

        ]


    },
    {
        enunciado: "A motocicleta xtz 125 é de qual fabricante",
        alternativas: [
            {
                texto: "Honda",
                afirmacao: "afirmação"
            }
            ,
            {
                texto: "Yamaha",
                afirmacao: "afirmação"
            },

        ]

    }

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntaAtual.length){
        motraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = "";
    mostraAltrnativas();
}

function mostraAlternativa() {
    for (
        const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() =>repostaSelecionada(altrnativa));
        caixaAltermativas.appendChild(botaolternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    atual++;
    mostraPergunta();
    const afirmacoes = opcaoSelecionada.afirmaco
}
function mostraResultado(){
    caixapeerguntas.textContent = "Desde 1971 presente no Brasil, a Honda atua com produção de motocicletas, automóveis e motores e máquinas, sempre com foco na qualidade, além de compromisso ambiental e social. Saiba mais sobre as nossas operações brasileiras a seguir.";
    textoResultados.textContent = historiaFinal += afirmacoes + " ";
    caixaAltermativas.textContent = "";
}
mostraPergunta();
