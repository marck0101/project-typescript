"use strict";
const produtos = {
    nome: "batata",
};
const teste = (mercadoria) => {
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
function person(data) {
    return data;
}
const p = person("Ique");
console.log(p);
function personI(data) {
    return data;
}
const pI = personI("Marck");
console.log(p);
