export class Empresa {
  readonly nome: string; //public não necessario
  private readonly colaboradores: Colaborador[] = []; //encapsulando dados senciveis
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  // Redudante
  // getName(): string {
  //   return this.nome;
  // }
}

export class Colaborador {
  // Atalho para simplificar
  constructor(
    public readonly nome: string, //Precisa infomrar o modificador de acesso na forma simplificada
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Empresa('Nubank', '11.111.111/0001-11');
const colaborador = new Colaborador('Vitor', 'Alves');
const colaborador1 = new Colaborador('Adriele', 'Lima');
const colaborador2 = new Colaborador('Diego', 'Magalhães');

empresa.adicionaColaborador(colaborador);
empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);

// Reduntante
// console.log(empresa.getName(), empresa.nome);

console.log(empresa);
