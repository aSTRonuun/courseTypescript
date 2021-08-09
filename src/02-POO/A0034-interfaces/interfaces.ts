interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// Union Types - intersection
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Vitor', 'Manoel');
console.log(pessoa.nomeCompleto());
console.log(pessoa.sobrenome);

const pessoaObj: TipoPessoa2 = {
  nome: 'Adriele',
  sobrenome: 'Lima',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};
console.log(pessoaObj);
