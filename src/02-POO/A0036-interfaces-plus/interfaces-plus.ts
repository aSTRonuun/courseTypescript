// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string;
}

interface Pessoa {
  readonly endercos: readonly string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Vitor',
  sobrenome: 'Manoel',
  endercos: ['Av. Brasil'],
  idade: 20,
};

// pessoa.endercos.push('Ceará');
console.log(pessoa);
