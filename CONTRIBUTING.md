# Contribuindo para a Linktree Devs Tocantins

Bem-vindo(a)! 🎉 Estamos muito felizes pelo seu interesse em contribuir com este projeto.  
Este guia vai te ajudar a começar, principalmente se esta for a sua primeira contribuição em um projeto open source.

## Primeiros Passos

### Pré-requisitos

- Uma conta no GitHub
- Git instalado no seu computador
- Um editor de texto ou IDE (VS Code, Sublime Text, etc.)
- Conhecimentos básicos em HTML, CSS e JavaScript

### Configuração Inicial

1. **Faça um fork do repositório**

   - Clique no botão **"Fork"** no canto superior direito deste repositório
   - Isso vai criar uma cópia do projeto na sua conta do GitHub

2. **Clone o fork no seu computador**
   ```bash
   git clone https://github.com/SEU-USUARIO/linktree-devstocantins.git
   cd linktree-devstocantins
   ```

3. **Adicione o repositório original como upstream**

   ```bash
   git remote add upstream https://github.com/devs-tocantins/linktree-devstocantins.git
   ```

4. **Abra o projeto**

   - Abra o arquivo `index.html` no navegador para visualizar o projeto
   - Use seu editor preferido para fazer alterações

## Como Contribuir

### Encontrando algo para trabalhar

- Confira a aba [Issues](../../issues) para ver tarefas abertas
- Procure issues que combinem com suas habilidades
- Se tiver dúvidas, pergunte nos comentários da issue

### Fazendo alterações

1. **Crie uma branch nova**

   ```bash
   git checkout -b nome-da-sua-feature
   ```

   Use nomes descritivos como `ajuste-layout-mobile` ou `adicionar-botao-dark-mode`

2. **Faça suas alterações**

   - Edite os arquivos HTML, CSS ou JavaScript necessários
   - Teste suas alterações abrindo `index.html` no navegador
   - Certifique-se de que o projeto continua funcionando corretamente

3. **Teste suas alterações**

   - Abra o `index.html` em diferentes navegadores (Chrome, Firefox, Edge)
   - Teste em diferentes tamanhos de tela
   - Valide seu HTML no [W3C Validator](https://validator.w3.org/)

4. **Faça o commit**

   ```bash
   git add .
   git commit -m "Descrição breve do que você alterou"
   ```

   **Exemplos de boas mensagens de commit:**

   - `Corrige sobreposição do menu de navegação no mobile`
   - `Adiciona efeito de hover nos botões`
   - `Atualiza estilo do formulário de contato`

5. **Envie para o GitHub**

   ```bash
   git push origin nome-da-sua-feature
   ```

6. **Abra um Pull Request**

   - Vá até o seu fork no GitHub
   - Clique em **"New Pull Request"**
   - Descreva de forma clara as alterações e o motivo delas

## Padrões de Código

### HTML

- Tags e atributos em minúsculas
- Aspas duplas para atributos
- Indente com 2 espaços
- Use comentários em trechos complexos

```html
<!-- Exemplo -->
<div class="menu-navegacao">
  <ul class="lista">
    <li><a href="#inicio">Início</a></li>
  </ul>
</div>
```

### CSS

- Classes em _kebab-case_ (ex: `.menu-navegacao`)
- Indente com 2 espaços
- Agrupe propriedades relacionadas
- Use comentários quando necessário

```css
/* Exemplo */
.menu-navegacao {
  /* Layout */
  display: flex;
  justify-content: space-between;

  /* Estilo */
  background-color: #333;
  padding: 1rem;
}
```

### JavaScript

- Use `camelCase` para variáveis e funções
- Prefira nomes de variáveis descritivos
- Use comentários para lógicas complexas
- Sempre finalize linhas com ponto e vírgula

```javascript
// Exemplo
function calcularPrecoTotal(itens) {
  let total = 0;
  for (const item of itens) {
    total += item.preco;
  }
  return total;
}
```

## Diretrizes para Pull Request

### Antes de enviar

- [ ] Teste suas alterações em múltiplos navegadores
- [ ] Siga os padrões de código
- [ ] Verifique se não quebrou nada existente
- [ ] Atualize a documentação se necessário

### Estrutura da descrição do PR

Inclua:

- O que você mudou
- Por que mudou
- Prints (se for alteração visual)
- Número da issue relacionada (ex: Fixes #12)

**Exemplo:**

```
## O que foi alterado
Adicionado botão de modo escuro no cabeçalho

## Motivo
Atende à issue #45, onde usuários solicitaram opção de tema escuro

## Screenshots
[Inclua prints de antes/depois]

## Testes
- [x] Testado no Chrome, Firefox e Edge
- [x] Verificado que o botão funciona corretamente
- [x] Garantido que todos os textos continuam legíveis no modo escuro

Fixes #45
```

## Precisa de ajuda?

Se ficar travado, você pode:

- Perguntar nos comentários da issue
- Conferir issues existentes
- Tirar dúvidas no seu PR
- Entrar na nossa comunidade: [WhatsApp](https://chat.whatsapp.com/LUNtUMM7pNqJrVhcLmFo85)

### Perguntas comuns

**Q: Errei meu histórico no git, e agora?**
A: Sem pânico! Você pode excluir sua branch e começar de novo. Acontece com todo mundo.

**Q: Meu site aparece diferente do deploy.**
A: Teste no mesmo navegador e limpe o cache (Ctrl+F5 ou Cmd+Shift+R).

**Q: Posso trabalhar em várias issues ao mesmo tempo?**
A: Não é o ideal, principalmente no começo. Foque em uma por vez para facilitar revisões.

## Código de Conduta

Queremos um ambiente acolhedor e inclusivo.
Por favor:

- Seja respeitoso(a) em todas as interações
- Dê feedbacks construtivos
- Ajude novos(as) contribuidores a se sentirem bem-vindos(as)
- Tenha paciência – todos já foram iniciantes um dia

## Reconhecimento

Todos os(as) contribuidores serão reconhecidos(as)!
Seu nome aparecerá na lista de contribuidores e seu trabalho ficará registrado para sempre no histórico do projeto. 🚀

## Dúvidas?

Não hesite em perguntar! O melhor jeito de aprender é praticando.
Você pode:

- Comentar em qualquer issue
- Abrir uma discussão no repositório
- Perguntar no chat da comunidade

Obrigado por contribuir! 💙
