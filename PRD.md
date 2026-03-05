# 📄 Product Requirements Document (PRD)

**Projeto:** Refatoração Arquitetural e Implementação de Temas - Linktree Devs Tocantins
**Atribuição:** Desenvolvedor Sênior

## 📌 Contexto e Objetivo

O projeto atual da Linktree da comunidade precisa evoluir de uma página estática única para uma **arquitetura de temas plugáveis**. O objetivo é permitir que diferentes layouts sejam renderizados consumindo uma mesma fonte de dados (`links.json`), controlados por um parâmetro na URL (ex: `/?theme=default`).

Sua missão é criar essa arquitetura base (Core + Data Layer) e implementar o primeiro tema (`default`), utilizando como inspiração os padrões visuais e de acessibilidade do **shadcn/ui**.

---

## ⚠️ Regras de Ouro para o Desenvolvimento (LEIA ANTES DE COMEÇAR)

Para mantermos a consistência e a qualidade do repositório, você deve seguir **estritamente** as seguintes regras:

1. **Zero Comentários no Código:** É terminantemente proibido adicionar comentários de qualquer tipo no código-fonte (arquivos `.js`, `.css`, `.html`, etc). O código deve ser limpo, semântico e autoexplicativo. Se precisar explicar algo, refatore extraindo para funções com nomes descritivos.
2. **Commits Atômicos e Frequentes:** Não faça um commit único no final do dia ou da task. A cada conjunto de modificações importantes ou bloco lógico finalizado, faça o commit imediatamente.
3. **Commits em Português:** Todas as mensagens de commit devem ser escritas em **Português**, seguindo o padrão convencional (ex: `feat: adiciona roteamento de temas na url`, `refactor: separa camada de dados do core`).

---

## 🏗️ Escopo Técnico: Arquitetura

A estrutura do repositório deve ser refatorada para a seguinte divisão lógica:

### 1. Data Layer (`src/data/links.json`)

* Manter a estrutura do JSON como a única fonte da verdade para os dados.
* Pode adicionar novos campos caso o tema exija (ex: `icon`, `description`), mas deve manter a imutabilidade dos dados essenciais (nome e URL).

### 2. Core / Gerenciador (`src/core/`)

* Criar o script principal que será carregado pelo `index.html`.
* **Responsabilidades:**
* Ler o parâmetro `?theme=` da URL.
* Se não houver parâmetro ou o tema não existir, aplicar fallback automático para o tema `default`.
* Fazer o `fetch` dos dados de `links.json`.
* Injetar dinamicamente o arquivo `.css` e o script `.js` do tema correspondente no DOM.



### 3. Themes Layer (`src/themes/`)

* Cada tema deve viver em sua própria pasta (ex: `src/themes/default/`).
* Cada pasta deve conter seu estilo isolado (`style.css`) e sua lógica de renderização (`render.js`).
* O script do tema deve receber os dados do Core e ser responsável apenas por montar e injetar o HTML na tela.

---

## 🎨 Escopo Visual: Tema `default` (shadcn/ui)

O tema padrão da comunidade deve ser implementado do zero utilizando os conceitos de design system do **shadcn/ui**.

* **Design Tokens:** Utilize variáveis CSS no escopo do tema para controlar cores (`--background`, `--foreground`, `--primary`, `--muted`), border-radius (`--radius`) e espaçamentos.
* **Tipografia e Cores:** Fundo limpo (branco/cinza muito claro para light mode, ou adaptável para dark mode via `@media (prefers-color-scheme: dark)`).
* **Cards de Link:** Devem ter o visual limpo, bordas sutis (`border 1px solid`), cantos levemente arredondados, transições suaves de `hover` e foco (`outline: 2px solid`).
* **Estrutura do DOM do Tema:** Semântica impecável, com suporte a navegação por teclado (foco visível) e atributos ARIA corretos.

---

## 📋 Passo a Passo da Implementação

Para garantir as entregas contínuas e os commits frequentes, siga a seguinte ordem de execução:

1. **Setup Inicial:** Clone o repositório, crie sua branch e isole a estrutura de pastas (`src/data`, `src/core`, `src/themes`). *(Commit esperado)*
2. **Refatoração do HTML/JS Antigo:** Limpe o `index.html` atual para ser apenas um "casco" e remova lógicas antigas acopladas. *(Commit esperado)*
3. **Criação do Core:** Implemente a lógica de leitura da URL e requisição do JSON. Implemente o carregador dinâmico de assets (CSS/JS) baseando-se no tema. *(Commit esperado)*
4. **Criação do Tema Default (Estrutura):** Crie a pasta do tema default, o `render.js` e faça-o injetar dados brutos na tela para validar o Core. *(Commit esperado)*
5. **Estilização Shadcn (Tokens):** Crie o `style.css` do tema default e configure todas as variáveis CSS baseadas no shadcn. *(Commit esperado)*
6. **Estilização Final e Polimento:** Aplique o CSS nos botões, hero, tipografia e garanta a responsividade mobile-first. *(Commit esperado)*
7. **Revisão de Qualidade:** Certifique-se de que não existe NENHUM comentário no código e que todos os assets estão carregando corretamente via local server. *(Commit final)*

# 📄 PRD - Adendo: Qualidade, Performance e CI

**Projeto:** Linktree Devs Tocantins
**Atribuição:** Desenvolvedor Sênior

## 📌 Contexto e Objetivo

Como a plataforma receberá contribuições de múltiplos membros da comunidade (temas visuais com HTML/CSS/JS variados), precisamos garantir que nenhuma atualização suba para produção com assets muito pesados, imagens gigantescas ou código fora do padrão.

Sua missão nesta etapa é configurar um fluxo de Continuous Integration (CI) rigoroso no GitHub Actions para automatizar essas validações, além de configurar as ferramentas de análise estática locais.

---

## ⚠️ Lembrete das Regras de Ouro (MANDATÓRIAS)

1. **Zero Comentários:** Continua sendo terminantemente proibido deixar comentários no código, inclusive nos arquivos de configuração do CI/CD, linters ou scripts de build. O código e os nomes dos *jobs* devem ser perfeitamente autoexplicativos.
2. **Commits Atômicos e Frequentes:** Faça o commit a cada ferramenta configurada e testada. Não agrupe o CI inteiro em um único commit.
3. **Commits em Português:** Siga o padrão (ex: `ci: configura lighthouse para barrar pr com performance baixa`, `chore: adiciona eslint e stylelint`).

---

## 🛠️ Escopo Técnico: Ferramentas e CI

Você deve implementar o seguinte ecossistema de validação estruturado em **GitHub Actions**:

### 1. Garantia de Performance e Acessibilidade (Lighthouse CI)

* Implemente o **Lighthouse CI (LHCI)** no workflow do GitHub Actions.
* **Orçamento de Performance (Budgets):** Configure o arquivo `lighthouserc.json` (ou equivalente) com assertivas estritas:
* Performance: Mínimo de `90`.
* Acessibilidade: Mínimo de `95`.
* SEO e Best Practices: Mínimo de `90`.


* O CI deve falhar e bloquear o Pull Request caso as métricas fiquem abaixo do estipulado, garantindo que temas pesados (com imagens gigantes ou scripts que bloqueiam a renderização) não sejam mesclados.

### 2. Análise Estática de Código (Linters e Sonar)

Mesmo sendo HTML/CSS/JS puro, o código precisa ser padronizado:

* **ESLint e Stylelint:** Configure regras rígidas para padronizar o JavaScript e proibir más práticas no CSS (ex: seletores absurdamente aninhados, `!important` excessivo).
* **HTMLHint:** Para garantir que a semântica do HTML injetado pelos temas esteja correta e sem tags não fechadas.
* **SonarCloud / SonarQube:** Integre a análise do Sonar no workflow do GitHub Actions para mapear bugs, code smells e duplicação de código. O *Quality Gate* deve falhar caso haja inserção de vulnerabilidades ou código com baixa manutenibilidade.

### 3. Prevenção Local (Git Hooks)

* Configure o **Husky** com o **lint-staged**.
* Antes de qualquer `git commit`, o ambiente local deve rodar automaticamente o Prettier (para formatar tudo) e os Linters apenas nos arquivos modificados. Isso evita que commits sujos sequer cheguem ao GitHub.

---

## 📋 Passo a Passo da Implementação (Ordem Sugerida)

1. **Setup Local:** Adicione o `package.json` apenas para gerenciar as dependências de desenvolvimento (husky, eslint, stylelint, prettier). Configure os arquivos de regras. *(Commit esperado)*
2. **Husky e Lint-staged:** Configure os hooks de pre-commit para rodar formatação e linting. Teste a quebra de um commit propositalmente. *(Commit esperado)*
3. **Setup Lighthouse CI:** Instale o LHCI, crie o arquivo de configuração e defina os *budgets* de performance baseados na arquitetura de temas. *(Commit esperado)*
4. **Workflow do GitHub Actions:** Crie o arquivo `.github/workflows/ci.yml`. Adicione os jobs separados para o Linting, para o Sonar e para o Lighthouse CI. *(Commit esperado)*
5. **Revisão Final:** Verifique se não deixou **nenhum** comentário nos arquivos `.yml`, `.json` ou de configuração, garantindo a entrega limpa. *(Commit final)*