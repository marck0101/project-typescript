"use strict";
// // 1 - Numbers
// let x: number = 10;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var marcos = new User('marcos');
var henrique = new SuperUser('Henrique');
console.log(marcos);
console.log(henrique);
function userGreeting(data) {
    if (data instanceof SuperUser) {
        console.log('olá super', data.name);
    }
    else if (data instanceof User) {
        console.log('olá', data.name);
    }
}
userGreeting(marcos);
userGreeting(henrique);
