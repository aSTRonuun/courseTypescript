function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}
// Soma
console.log(addOrConcat(10, 20));

// Concatena
console.log(addOrConcat('10', '20'));

// Concatena
console.log(addOrConcat(10, '20'));
