# Contribuindo para o Linktree

Este repositório visa criar a melhor página de entrada para os desenvolvedores e entusiastas da tecnologia do estado do Tocantins. Entenda aqui algumas regras simples para não haver re-trabalho na hora do Pull Request.

## 🧭 Código de Conduta

Ao participar deste projeto, você concorda em seguir o código de conduta básico da comunidade: Respeito não é um luxo, é OBRIGAÇÃO. Toda discussão técnica deve ser livre de ataques pessoais ou atitudes tóxicas.

## 🛠️ Como Contribuir

A arquitetura do projeto separa a **camada de dados** (`src/data/links.json`) do **core** e da **camada de temas** (`src/themes/`). Sendo assim:

### 1. Atualizar ou Adicionar Links

Modifique o arquivo `src/data/links.json`.
Não altere a extensão nem apague o nome ou propriedades obrigatórias (ex: `title` ou `url`). Esta alteração tem impacto para TODOS os temas simultaneamente!

### 2. Criar ou Melhorar um Tema

Os temas ficam restritos à sua respectiva pasta em `src/themes/<nome-do-tema>/`.

- O tema deve possuir obrigatoriamente um CSS e um script principal (ex: `style.css` e `render.js`).
- O script do seu tema deve exportar no seu module a função principal capaz de receber o payload `.json` (enviado pelo `Core`) para renderizar os dados em um container de ID pré definido pelo Core.
- Não altere a lógica de parser de URL ou "casco base" dentro do diretório `src/core`. O Core cuida do esqueleto da aplicação, o tema cuida da "pele" e da sua própria montagem de exibição.

### 🚫 Regras Obrigatórias para Novas Funcionalidades / Refatorações

Acreditamos e praticamos **Clean Code**. Por conta disso, exigimos em nossa base de código duas regras vitais:

1. **Zero Comentários no Código-Fonte:** Use a expressividade e bons nomes em variáveis, funções e arquivos em vez de usar `//`. O PR será recusado se contiver comentários supérfluos, temporários ou blocos comentados "para o futuro". O Git cuida da história, e o nome e tipagem das variáveis cuidam do contexto.
2. **Semântica e Acessibilidade (a11y):** Novas criações de tema sempre devem garantir o uso apropriado das tags HTML de marcação (`nav`, `ul`, `li`, `main`, focos de Outline interativos - `:focus-visible`).

### 🤖 Integração Contínua (CI) e Code Quality

Este projeto contém um ecossistema rigoroso de qualidade. Ao rodar `npm install`, você instalará localmente:

- **Husky & lint-staged:** Antes de cada `git commit`, o código modificado será validadado e auto-formatado pelo Prettier.
- **ESLint & Stylelint:** Impedem código JS problemático ou CSS aninhado indevidamente.
- **Lighthouse CI & SonarCloud:** Todo Pull Request passa pelo Action no GitHub que exige Notas 90+ de Performance, Acessibilidade e SEO. NUNCA suba imagens pesadas ou scripts não-otimizados em seu tema.

#### 💡 Como Rodar e Corrigir as Validações Localmente

Para evitar que seu Pull Request seja bloqueado pelo CI no GitHub, recomendamos testar tudo localmente antes do push:

**1. Formatadores e Linters (Prettier, ESLint, Stylelint, HTMLHint):**

- **Rodar a verificação:** `npm run lint` (ou os scripts individuais se definidos).
- **Resolver problemas comuns:** Se o Prettier acusar falha de formatação, rode `npx prettier --write .`. Para corrigir automaticamente problemas de CSS, rode `npx stylelint "src/**/*.css" --fix`. Avisos no console de `build-themes.js` devem ser silenciados com `// eslint-disable-next-line no-console` se intencionais.

**2. Lighthouse CI (Performance, SEO, Acessibilidade):**

- **Como rodar:** Inicie o build de temas (`npm run build:themes`), deixe um servidor estático rodando em background (ex: `npx serve -p 3000 &`) e então execute `npx lhci autorun`.
- **Problemas comuns:**
    - _`image-delivery-insight` / `uses-responsive-images`:_ Assegure que as imagens inseridas (como logos e avatares) sejam leves (formato WebP ao invés de PNG/JPG) e tenham `width` e `height` definidos no HTML/JS para evitar _Layout Shifts_.
    - _`network-dependency-tree-insight` / `render-blocking-resources`:_ Faça preload no `<head>` das fontes, scripts e arquivos vitais (ex: `<link rel="preload" href="..." as="image" fetchpriority="high">`). Não injete `<link rel="stylesheet">` de temas globalmente que bloqueiem a primeira renderização (carregue o CSS do tema de forma otimizada).

**3. SonarCloud (Qualidade e Segurança de Código):**
Para testar o scan local do Sonar, você precisa do [SonarScanner CLI](https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/).

- O arquivo de configuração `sonar-project.properties` já exite na raiz definindo propriedades-chave obrigatórias (como `sonar.projectKey` e `sonar.organization`).
- Se houver alertas sobre código assíncrono mal tipado ou condicionais vazias no JS, procure corrigir as lógicas sujas indicadas no dashboard ou verifique a formatação do arquivo `properties` da branch.

Exigimos **Mensagens de Commits em Português** orientadas pelo [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
Não aceite que "um commit diário" basta. Goste de fatiar o seu problema e commitá-lo à medida em que ele é resolvido. O Histórico linear é seu amigo.

- `feat:` Novas capacidades, novos temas;
- `fix:` Resolução de falhas em algum script ou estilos (css);
- `refactor:` Ajustes de arquitetura interna, melhoria de nome sem adicionar funcionalidade;
- `style:` Formatação ou padronização de nomenclatura;
- `docs:` Alterações neste ou no `README.md`.
