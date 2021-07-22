/* eslint-disable */
// Tipos básicos ( aqui ocorre a inferência de tipos)

let nome: string = 'Luiz'; // Qualquer tipo de string: '' "" ``

let idade: number = 0b1010; // 10,  1.57, 3.14, -5.55, 0xf00d, 0b1010

let adulto: boolean = true;

let simbolo: symbol = Symbol('qualquer-symbol');

// let big: bigint = 10n; //bigint

// Arrays
let arrayOfNumbers : Array<number> = [2,4,6,8];
let arrayOfNumbers2 : number[] = [2,4,6,8];

let arrayOfStrings: Array<string> = ['aaa', 'axf', 'g'];
let arrayOfStrings2: string[] = ['aaa', 'axf', 'g'];

// Objetos
let person: {name: string, age: number, adult?: boolean} = {
  name: 'Vitor',
  age: 20
};


// Funções
function soma(x: number, y:number): number{
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y
