# Links da Comunidade

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum id arcu faucibus iaculis. Sed vitae ligula sit amet nisl interdum dictum. Vivamus molestie tortor non mauris egestas pharetra. Vestibulum rutrum varius elit, et consectetur libero ornare ut. Integer gravida vitae lacus quis ultricies. Nunc a ante quam. Nullam tempus magna dui, id elementum augue fringilla ut. Maecenas nec feugiat risus, congue tempor libero. Nam malesuada volutpat ligula quis bibendum. Donec nec quam eleifend est pellentesque luctus in non metus. Nulla ultrices orci quis libero posuere gravida. Nunc sollicitudin mi vulputate faucibus malesuada. Cras viverra mollis pulvinar. Proin porta orci orci, sed vulputate risus suscipit vel. Mauris non nisi placerat, condimentum quam a, ullamcorper libero.

## Adicionando novos links

Para adicionar um novo link ao site, edite o arquivo [`links.json`](src/data/links.json) e insira um novo objeto dentro da lista, seguindo o formato abaixo:

```json
[
  {
    "title": "Repositório GitHub",
    "url": "https://github.com/devs-tocantins"
  },
    ...
  {
    "title": "Título do Novo Link",
    "url": "https://example.com"
  }
]
```

## ▶️ Rodando o projeto localmente

Este projeto carrega os links a partir do arquivo [`links.json`](src/data/links.json) usando a função:

```javascript
const response = await fetch('../data/links.json');
``` 

Por causa dessa chamada com fetch, o navegador bloqueia o acesso ao arquivo quando você abre o index.html diretamente (via file://).
👉 Para funcionar corretamente, é necessário rodar em um servidor local.

Com Python 3:

```bash
python3 -m http.server 3000
```
Depois acesse: http://localhost:3000


Com Node.js (http-server):

```bash
npx http-server .
```
Depois acesse: http://localhost:8080

#### Se usa VSCode, de preferência a Extensão Live Serve


