var pets = [
    {
      raca: "Buldogue",
      especie: "cachorro",
      dono: "Henrique",
      idade: 8,
    },
    {
      raca: "Pastor Alemão",
      especie: "cachorro",
      dono: "Paula",
      idade: 4,
    },
    {
      raca: "Sphynx",
      especie: "gato",
      dono: "José",
      idade: 1,
    },
  ];
  
//   2- Cadastro de pet
//   liste os pets
var racaDosPets= pets
for (var i=0; i< racaDosPets.length;i++)
console.log(racaDosPets[i].raca)
// console.log(racaDosPets[i].dono)
// console.log(racaDosPets[i].idade)

// // 2- filtra idade 

var idaadeacima= pets.filter((value)=>value.idade>=8)
console.log(idaadeacima)