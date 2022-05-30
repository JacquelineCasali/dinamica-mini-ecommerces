var clientes = [
    {
      id: 1,
      nome: "Rogério Lucas",
      sobrenome: "Silva",
      idade: 30,
      contato: "4002-8922",
    },
    {
      id: 2,
      nome: "Roberto Carlos",
      sobrenome: "Braga",
      idade: 70,
      contato: "(11) 9 1111-1111",
    },
    {
      id: 3,
      nome: "Sylvester",
      sobrenome: "Stallone",
      idade: 80,
      contato: "(22) 9 2222-2222",
    },
  ];
//   3- Buscar por um cliente
// Pegar id do cliente e retorna o mesmo e caso não exista retorne a mensagem "Cliente não encontrado"

var idfiltrado=clientes.filter((letra)=> {
  var idfora=""
    if(letra.id>=5 && letra.idade<=10){
       idfora="Cliente não encontrado"
    }
    }    )
    console.log(idfiltrado)


//     var idxcliente= clientes.findIndex((cliente)=>{// findIndex retorna a posição do elemento
//         if(cliente.id===id) {
//             return true
//         }   else {
//             return "Cliente não encontrado"
//         }
//         })
// console.log(idxcliente)

//var identificador=clientes.filter(identificador)
// if(clientes.id==id){
//     console.log(clientes)
// }

//function listarclientes(identificador,cliente)
// var te=clientes.filter((index,value)=>{
//     if(index.id>=3){
//                    return index.nome
//     }
// })
// console.log(te)

// 4- Cadastro de cliente
// No array de clientes, adicione um objeto no final desse array e liste os clientes

// clientes.map((value,idx) => {
// console.log(`${idx+1} - ${value.nome}`)
// })

// 5- Listar clientes entre duas idades
// Crie uma função que ao receber a idade inicial e final e em seguida retorne todos os clientes que estão nesse intervalo

// var arrayfiltrado=clientes.filter((letra)=> {
//     if(letra.idade>=35 && letra.idade<=80){
//         return true
//     }
//         return false
//     }    )
//     console.log(arrayfiltrado)

// 3 contato do cliente No array de clientes,  liste os clientes
// clientes.map((value)=>{
//     console.log("Contato:",value.contato)
// })


// 6- Listar clientes que começam com uma determinada letra
// Crie uma função que receba uma letra e retorne todos os clientes que começam com a mesma letra

// var arrayfiltrado=clientes.filter((letra)=> {
// if(letra.nome[0]==="R"){
//     return true
// }else{
//     return false
// }
// })
// console.log(arrayfiltrado)