const body = document.body
const titulo = document.createElement('h1');
const produto = document.createElement('h3');
const titulo_produto = document.createElement('p');
const preco = document.createElement('p');

titulo.innerText = "Shop";

produto.innerText = "Produto:";

titulo_produto.innerText = "Redmi Note 12 - 4GB - 128GB"

preco.innerText = "R$ 1.200,00"

body.appendChild(titulo)
body.appendChild(produto)
body.appendChild(titulo_produto)
body.appendChild(preco)