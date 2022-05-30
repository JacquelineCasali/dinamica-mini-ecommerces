//https://github.com/SerraZ3/dinamica-mini-ecommerces/blob/main/README.md

var racoes = [
    {
      marca: "Biofresh",
      preco: 50.5,
      porte: "grande",
      especie: "cachorro",
    },
    {
      marca: "Golden",
      preco: 120,
      porte: "pequeno",
      especie: "cachorro",
    },
    {
        marca:"Whiskas",
        preco:120,
        porte:"pequeno",
        especie: "gato"
    }
     ];

//   1- Cadastro de ração
//   No array de rações, adicione um objeto no final desse array 
// e liste as rações

 var racoesresumida=racoes
for (var i=0; i< racoesresumida.length;i++)
console.log(racoesresumida[i].marca)

// 2- filtra preco menor igual  que 51 
var precosacimade50= racoes.filter((value)=>value.preco<51)
    console.log(precosacimade50)

// 2- filtra especie do animal 

var especiedoanimal= racoes.filter((value)=>value.especie==="gato")
console.log(especiedoanimal)


modulo.export=racoes