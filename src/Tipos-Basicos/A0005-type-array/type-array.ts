export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(2, 4, 6);
const concatenacao = concatenaString('A', 'n', 'a');
const upper = toUpperCase('A', 'n', 'a');

console.log(result);
console.log(concatenacao);
console.log(upper);
