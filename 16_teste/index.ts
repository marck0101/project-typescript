interface Mercado {
  nome: string;
}
const produtos: Mercado = {
  nome: "batata",
};
const teste = (mercadoria: Mercado) => {
  console.log("alert", mercadoria.nome);
};
teste(produtos);
//---------------

// Generics
// interface Usuarios<T> {
//   nome: string;
//   data: T;
// }
// const alunos: Usuarios<string> = {
//   nome: "Marcão",
//   data: "Rob",
// };
// console.log(alunos);

//---------------

// Generics II
function person<T extends string | number>(data: T) {
  return data;
}
const p = person("Ique");
console.log(p);

//---------------

// Generics III
type numberOrStrin = string | number | string[];
function personI<T extends numberOrStrin = string>(data: T) {
  return data;
}
const pI = personI("Marck");
console.log(p);
