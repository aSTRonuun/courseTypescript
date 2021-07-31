let x: any;

let y: unknown;

const z = 500;

x = 100;
x = 'Luiz';
x = 900;
x = '100';

y = 100;
y = 'Luiz';
y = 900;

// Ts não reclama pois o type da var é any -> insegurança
console.log(x + z); // concatenação

// Ts reclama pois o type da var é unknown e precisa ser verificado qual typeof ele é antes de uma opreção -> segurança
if (typeof y === 'number') console.log(y + z);
