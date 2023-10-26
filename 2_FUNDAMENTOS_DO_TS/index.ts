// // 1 - Numbers
// let x: number = 10;

// x = 15;

// console.log(typeof x);

// const y: number = 3.14329492349;

// console.log(y.toPrecision(3));

// // 2 - string
// const firstName: string = "Marcos";

// console.log(firstName.toUpperCase());

// const lastName: string = "Correa";

// let fullName: string;

// fullName = firstName + " " + lastName;

// console.log(fullName);

// // 3 - boolean
// let a: boolean = true;

// console.log(typeof a);

// a = false;

// // 4 - inference e annotation
// const ann: string = "Teste";

// const inf = "Testando";

// // 5 - compile automatico
// let q = 10;

// console.log(q);

// q = 11;

// console.log(q);

// // 6 - desafio 2
// const n1: number = 10;

// const numberToString = n1.toString();

// const printMyNumber: string = `Eu quero imprimir o número ${numberToString}`;

// console.log(printMyNumber);




class User{
    name

    constructor(name: string){
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string){
        super(name)
    }
}

const marcos = new User('marcos')
const henrique = new SuperUser('Henrique')


console.log(marcos)
console.log(henrique)

function userGreeting(data: object){
    if(data instanceof SuperUser){
        console.log('olá super', data.name)

    }else if(data instanceof User){
        console.log('olá', data.name)

    }
}
userGreeting(marcos)
userGreeting(henrique)