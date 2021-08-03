export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }

  /* Maneira antiga para trabalhar com getters e setters */
  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  // getIdade(): number {
  //   return this.idade;
  // }

  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }
}

const pessoa = new Pessoa('Vitor', 'Manoel', 20, '132.456.897-45');
pessoa.cpf = '132.456.897-77';
console.log(pessoa.cpf);
