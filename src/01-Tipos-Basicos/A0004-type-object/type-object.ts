const objectA: {
  //readonly -> só poderá ser visto e não trocado
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//Não pode, por causa do readonly
// objectA.chaveA = 'OutroValor';
objectA.chaveB = 'Outro valor';

console.log(objectA);
