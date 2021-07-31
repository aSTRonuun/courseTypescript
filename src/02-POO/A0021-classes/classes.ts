export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
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
}

export class Colaborador {
  // Atalho para simplificar
  constructor(
    public readonly nome: string,
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

empresa.mostrarColaboradores();

console.log(empresa);
