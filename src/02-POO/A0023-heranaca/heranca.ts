export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('Vitor', 'Manoel', 20, '132.456.897-45');
const cliente = new Cliente('Adriele', 'Lima', 19, '147.159.753-22');
const pessoa = new Pessoa('Adriele', 'Lima', 19, '147.159.753-22');

console.log(aluno);
console.log(cliente);
console.log(pessoa);
