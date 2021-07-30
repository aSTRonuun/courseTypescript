/* Recomendado */
// Condicional -> Quando não sabe-se qual tipo é o elemento
const body = document.querySelector('body');
if (body) body.style.background = 'blue';

// Type Assertion -> Quando tem-se certeza do tipo do elemento
const body1 = document.querySelector('body') as HTMLBodyElement;
body1.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendado */
// Tyoe assertion
const body2 = document.querySelector('body') as unknown as number;

// Non - null assertion (!)
const body3 = document.querySelector('body')!;
body3.style.background = 'red';
