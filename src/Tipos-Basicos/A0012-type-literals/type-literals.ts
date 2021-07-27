import { escolherCor } from '../A0009-type-enum/type-enum';

// Module mode
export default 1;

let x = 10; // eslint-disable-line
x = 0b1010;
// x = 'Vitor'; Ts reclama pois a variável começou como type number e do nada foi alterada para type string

// y só poderá ser igual a 10
const y = 10;

// z só poderá ser igual a 100 (método não aconselhado)
let z: 100 = 100 // eslint-disable-line
// z = 120; Ts não deixa pois já foi informado que z é do tipo 100, logo ela só poderá ser igual a 100

// a só poderá ser igual a 50 (método aconselhado usando 'as const')
let a = 50 as const // eslint-disable-line

const person = {
  nome: 'Vitor' as const, // asserção
  sobrenome: 'Manoel',
};

// Não poderá mudar pois nome é um atributo constante
// person.nome = 'Diego';

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));
