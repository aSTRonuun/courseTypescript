// POO - Composicao é quando duas ou mais classes precisam necessariamente uma da outra para existir.

export class Carro {
  private readonly _motor = new Motor();

  get motor(): Motor {
    return this._motor;
  }

  ligar(): void {
    this._motor.ligar();
  }

  acelear(): void {
    this._motor.acelerar();
  }

  parar(): void {
    this._motor.parar();
  }

  desligar(): void {
    this._motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('O motor ligou...');
  }

  acelerar(): void {
    console.log('O motor está acelerando...');
  }

  parar(): void {
    console.log('O motor parou...');
  }

  desligar(): void {
    console.log('O motor desligou...');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelear();
carro.parar();
carro.desligar();
