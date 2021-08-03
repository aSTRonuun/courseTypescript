export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class Nubank extends Empresa {
  constructor() {
    super('Nubank', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  // Atalho para simplificar
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Nubank();
const colaborador = new Colaborador('Vitor', 'Alves');
const colaborador1 = new Colaborador('Adriele', 'Lima');
const colaborador2 = new Colaborador('Diego', 'Magalhães');

empresa.adicionaColaborador(colaborador);
empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);

const colaboradorRemovido = empresa.popColaborador();
console.log(colaboradorRemovido);

console.log(empresa);

empresa.popColaborador();
