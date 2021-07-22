//Utilizar any apenas em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3, 4]));
console.log(showMessage('Ola'));
console.log(showMessage(3.14));
