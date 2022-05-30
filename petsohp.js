//importar de outro arquivo 
var cadastro=require("./cadastro.js")
//console.log(cadastro)

// var catalogo=require("./database/catalogo.json")
// console.log(catalogo)

//   1- Cadastro de ração
//   No array de rações, adicione um objeto no final desse array 
// e liste as rações

var racoesresumida=cadastro
for (var i=0; i< racoesresumida.length;i++)
console.log(racoesresumida[i].marca)





// 2- filtra preco menor igual  que 51 

// var precosacimade50= racoes.filter((value)=>value.preco<51)
// console.log(precosacimade50)

// 2- filtra especie do animal 
// var especieDoAnimal=racoes.filter((value) => value.especie==="gato")
// console.log(especieDoAnimal)

