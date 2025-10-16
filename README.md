# Links da Comunidade

Este repositório contém o código da nossa página de links centralizados, que serve como um ponto de acesso rápido para todos os canais importantes da comunidade Devs Tocantins. O projeto foi construído com HTML, CSS e JavaScript puros.

O objetivo é manter uma página simples, rápida e fácil de manter. Sinta-se à vontade para contribuir!

## 🚀 Deploy

Você pode acessar o projeto em produção através do seguinte link:

- **[https://linktree-devs-to.vercel.app/](https://linktree-devs-to.vercel.app/)**

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


