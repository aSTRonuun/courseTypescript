// Tuple
const dadosCliente1: [number, string] = [1, 'Vitor'];

// Uma tuple pode contar vários dados, não somente 2
const dadosCliente2: [number, string, string] = [1, 'Vitor', 'Manoel'];

// Tuple com dado opcional
const dadosCliente3: [number, string, string?] = [1, 'Vitor'];

// Tuple imutável
const dadosCliente4: readonly [number, string] = [1, 'Vitor'];
// dadosCliente4[0] = 100; -> Error
// dadosCliente4[1] = 'Manooel'; -> Error

// Tuple com arrays
const dadosCliente5: [number, string, ...string[]] = [1, 'Vitor', 'Manoel'];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
console.log(dadosCliente5);

// readonly array -> array imutável
const array1: readonly string[] = ['Vitor', 'Manoel'];

// readonly array declarado de forma generecs
const array2: ReadonlyArray<string> = ['Adriele', 'Lima'];

console.log(array1);
console.log(array2);
