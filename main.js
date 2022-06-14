// const alerta = "conhecimento ilimitado"

// alert(alerta +(10 * 100) + " e na rockseat" )

// const idade = 19
// const maiorDeDezoito = idade >= 18

// if(maiorDeDezoito) {
//   alert("Pode tirar carteira de motorista")
// } else {
//   alert("Não pode tirar")
// }
 
// const temperaturas = [23.3, 32.2, 1, 5]
// alert(temperaturas[2])

// gerar um numero aleatorio


const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta

function fazerPergunta(){

  if(inputPergunta.value == "") {
    alert("digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)
 
  const pergunta = "<div>" + inputPergunta.value +
  "</div>"
  

    // Gerar numero aleatorio

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas )

    elementoResposta.innerHTML = pergunta+ respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    setTimeout(function(){
      elementoResposta.style.opacity = 0;
      buttonPerguntar.removeAttribute('disabled')
    },4000)
   

}

