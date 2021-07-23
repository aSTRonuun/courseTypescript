export { person };

// Função
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  nome: 'Vitor',
  sobrenome: 'Manoel',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Vitor', 'Manoel');
person.exibirNome();
