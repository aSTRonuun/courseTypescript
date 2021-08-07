// POO - Agregação é quando uma classe podem existir separadamente, porém, elas são agregadas para tornar mais eficiente.

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(private _nome: string, private _preco: number) {}

  get nome(): string {
    return this._nome;
  }

  get preco(): number {
    return this._preco;
  }
}

const produto = new Produto('Livro', 22.5);
const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Perfume', 70.0);

const carrinho = new CarrinhoDeCompras();
carrinho.inserirProdutos(produto, produto1, produto2);
console.log(carrinho.valorTotal());
console.log(carrinho.quantidadeProdutos());
