// POO - Associação é quando duas classes podem existir separadamente, sem necessariamente uma depender da outra

export class Escritor {
  // Inversãoo de Dependência onde a classe escritor usar uma classe abstrata que é o contrato
  // É bem melhor, pois, geralmente o contrato (classe abstrata) é bem menos modificada do que é as subclasse da classe abstrata
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
    } else {
      this.ferramenta.escrever();
    }
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Machado de Assis');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquinaEscrever.nome);

escritor.ferramenta = caneta;
escritor.ferramenta = maquinaEscrever;
escritor.ferramenta = null;
escritor.escrever();
