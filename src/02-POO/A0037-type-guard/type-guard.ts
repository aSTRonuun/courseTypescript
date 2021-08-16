export type Pessoa = { tipo: 'pessoa'; nome: string };
export type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostrarNome(obj: PessoaOuAnimal): void {
  // Precisamos refinar, para ter certeza de que tipo é o objeto
  // if ('nome' in obj) console.log(obj.nome);          - Opção 1
  // if (obj instanceof Aluno) console.log(obj.nome);   - Opção 2
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

mostrarNome(new Aluno('João'));
