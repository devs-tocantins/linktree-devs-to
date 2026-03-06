# Linktree - Desenvolvedores Tocantins 🌳

Bem-vindo ao repositório oficial da página de links da comunidade **Desenvolvedores Tocantins**.
Este projeto utiliza uma arquitetura simples e extensível de temas baseados em Vanilla JS, CSS e HTML5.

## 🚀 Como Funciona

A estrutura do Linktree é guiada por uma fonte única de dados e um gerenciador de temas:

- **Data Layer:** Todos os links e dados do perfil ficam no arquivo `src/data/links.json`.
- **Core:** O arquivo raiz `index.html` carrega o `src/core/main.js`, que processa a URL e faz o requisitório dinâmico do tema selecionado.
- **Themes:** Cada tema vive dentro de `src/themes/<nome_do_tema>`.

Para alterar o tema carregado em tempo real, utilize o parâmetro `?theme=` na URL.
Exemplo: `http://localhost:XXXX/?theme=default`

O tema `default` é aplicado automaticamente caso não seja enviado nenhum parâmetro.

## 🛠️ Como Executar Localmente

Como usamos EcmaScript Modules (`import()` dinâmicos) locais e a Fetch API para ler o JSON, o navegador **bloqueará** a execução caso você tente abrir o arquivo `index.html` diretamente do disco via `file://`. Você precisa rodar através de um servidor HTTP local. Além disso, utilizamos um script construtor de temas no lado do servidor.

1. Instale as dependências do projeto (incluso linters e servidor locais):
    ```bash
    npm install
    ```
2. Inicie o projeto com o script padronizado, que vai compilar a lista de temas e abrir o servidor:
    ```bash
    npm start
    ```
    _(Caso não queira usar npm start, você pode rodar \`npm run build:themes\` seguido de \`npx serve .\`)_
3. Acesse `http://localhost:3000` (ou a porta informada pelo servidor).

## 🤝 Como Contribuir

Ficamos felizes com o seu interesse em contribuir para a nossa comunidade! Você pode enviar novos links, corrigir bugs ou até criar seu próprio layout/tema para o nosso Linktree.

Leia atentamente as diretrizes em nosso guia de contribuição antes de abrir um Pull Request:
👉 [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 Licença

Este projeto é de código aberto sob a licença [MIT](LICENSE).
