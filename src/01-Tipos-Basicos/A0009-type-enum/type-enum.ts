enum Cores {
  Vermelho = 10,
  Azul = 20,
  Amarelo = 30,
}

enum Cores {
  Roxo = 'Roxo',
  Verde = 40,
  Rosa = 50,
}

export function escolherCor(cor: Cores): void {
  console.log(Cores[cor]);
}

// Segurança de tipo
escolherCor(Cores.Vermelho);

// Insegurança de valor
escolherCor(12345);
