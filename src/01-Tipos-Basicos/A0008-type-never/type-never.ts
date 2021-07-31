// type never é usado quando uma function nunca vai retornar nada
// exp: loops infinitos ou erros

export function criarErro(): never {
  throw new Error('Error qualquqer');
}

criarErro();
