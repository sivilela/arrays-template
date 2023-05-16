


// Slide parte 1
// const itens = ["bala", "pirulito", "chiclete"]
// const numeros = [20,10,30]
// const variosTiposDeArray = ["gato", 55, false]
// const umValor = [22]
// const semValor = []

// console.log(itens) // informa os itens do array
// console.log(itens.length) // conta números de itens do arrays
// console.log(itens[3]) // retorna mensagem "undefined", pois o array vai é 0,1,2

// console.log(typeof itens[1]) // retorna object 

// console.log(typeof variosTiposDeArray[0,1,2])

// console.log(umValor);

// console.log(itens)
// itens.push("doce")
// console.log(itens)
// itens.pop()
// console.log(itens)
// console.log(itens.includes("bala"))
// console.log(itens.includes("bolo"))
// console.log(umValor.length)
// ************************************************************

// Slide parte 2
// const arrays = [5, 89, 0, 51, 2, 12]
// const copiaArray = arrays.slice(0,6)
// console.log(copiaArray)


// copiaArray.pop()// remove o ultimo elemento do array
// //console.log(copiaArray)

// copiaArray.push(6)// adiciona um elemento no final do array
// //console.log(copiaArray)

// copiaArray.splice(2,1)// remove o elemento do indice 2

// console.log(arrays)
// console.log(copiaArray)


// ************************************************************
// Exercício 1
// Parte 1

// Construa um programa, seguindo as instruções abaixo:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor a essa variável.

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor a essa variável.

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// ###### undefined, pois não foi atribuído valor as variáveis 

// e) Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, 
// atribuindo esses dois valores às variáveis que acabou de criar.

//     💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que 
// utilizou.

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um 
// comentário de código.

// g) Para finalizar, imprima na tela a mensagem: "Olá, nome, você tem idade anos". Lembre-se: 
//nome e idade são os valores inseridos pelo usuário.

//     💡 Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:

// console.log(valor1, valor2)

// const nome = prompt("Qual seu nome? ")
// const idade = Number(prompt("Qual sua idade: "))
// console.log(typeof nome)
// console.log(typeof idade)
// console.log(`Olá, ${nome}, você tem ${idade} anos`)

// ***********************************************************************************
// Exercício 2

// Agora vamos criar 3 perguntas com valores de Sim ou Não.

// Siga as instruções abaixo:

// a) Crie um programa que faça 3 perguntas para o usuário através do prompt. Armazene a resposta de cada pergunta em uma variável.

// b) Imprima no console todas as respostas.

// c) Altere seu programa para que os textos das perguntas sejam armazenados em 3 variáveis diferentes.

// d) Troque o texto do seu prompt pelas variáveis que contêm as perguntas.

// //mandando a pergunta como texto direto
// const respostaA = prompt("Você está usando uma roupa azul hoje?");

// //mandando a pergunta como variável
// const perguntaA = "Você está usando uma roupa azul hoje?";
// const respostaA = prompt(perguntaA);

// e) Altere o console para imprimir a pergunta e a resposta.

// Você está usando uma roupa azul hoje? - SIM

// ***********************************************************************************
// Exercício 3

// Você foi contratade para criar um programa de RH que realiza o cadastro de pessoas colaboradoras e armazena suas respostas.

//     Este programa deve perguntar à pessoa colaboradora:

//     a) Nome completo

//     b) Data de nascimento (utilize as / )

//     c) Endereço

//     d) CPF

//     e) Escolaridade

//     f) Possui CHN?

//     g) Quantos filhes possui?

//     h) Cargo atual

//     i) Salário

//     j) Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel

//     k) Informe o ano de admissão

//     Utilize o casting para a conversão de tipos das variáveis que recebem números.

//     Imprima no console o tipo de todas as variáveis.

//     Imprima no console um relatório da pessoa colaboradora.

