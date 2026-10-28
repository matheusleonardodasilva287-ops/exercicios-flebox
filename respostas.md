# Respostas: Flexbox, parte 2

Minhas respostas dos exercícios, com os cálculos feitos passo a passo.

## 1. Revisão da parte 1

**1.** O contêiner é o elemento pai, aquele que organiza os filhos. Os itens são esses filhos diretos. O `display: flex` vai no contêiner, nunca nos itens.

**2.** Se o CSS não diz nada, o eixo principal é o horizontal e corre da esquerda para a direita. Isso porque o padrão do `flex-direction` é `row`.

## 2. Crescer: flex-grow

**3.** A sobra é o espaço que fica livre na faixa depois de somar o tamanho de todos os itens. Quando todo mundo tem `flex-grow: 0`, ninguém reparte essa sobra, então ela simplesmente fica vazia, geralmente no fim da linha (a não ser que o `justify-content` mande outra coisa).

**4.** O valor padrão de `flex-grow` é 0, ou seja, o item não cresce além do tamanho de partida dele.

**5.** Pensando na pizza:
- a mesa é a faixa, o contêiner;
- o prato de cada pessoa é o tamanho de partida de cada item;
- a sobra é a pizza que ficou no meio da mesa;
- o peso do `flex-grow` é quantas fatias cada pessoa pega.

**6.** Eu coloco `flex-grow: 1` na marca:

```css
.marca { flex-grow: 1; }
```

Assim ela puxa toda a sobra para ela e os links ficam só do tamanho do texto.

**7.** Primeiro somo os pesos: 2 + 3 + 1 = 6. Depois divido a faixa: 600 ÷ 6 = 100px, que é o valor de uma parte. Agora é só multiplicar: 2 × 100 = 200px, 3 × 100 = 300px e 1 × 100 = 100px. Os três somam 600px, então confere.

**8.** Os três itens juntos ocupam 3 × 100 = 300px, então sobram 600 − 300 = 300px. Os pesos são 0, 1 e 2, que somam 3, e cada parte vale 300 ÷ 3 = 100px. Fica assim:
- item 1 (peso 0): fica com 100px;
- item 2 (peso 1): 100 + 100 = 200px;
- item 3 (peso 2): 100 + 200 = 300px.

Total: 600px.

## 3. Encolher: flex-shrink

**9.** O `flex-shrink` age quando falta espaço, não quando sobra. O valor padrão é 1, por isso os itens já encolhem sozinhos se precisar.

**10.** Os dois somam 800px numa faixa de 600px, então faltam 200px. Como são iguais e os dois têm `flex-shrink: 1`, cada um perde 100px e fica com 300px.

**11.** Com `flex-shrink: 0` no primeiro, ele não cede nada e continua com 400px. Aí o segundo precisa absorver a perda toda e fica com 200px. O conjunto cabe direitinho, porque 400 + 200 = 600px.

**12.** Um logotipo é um bom exemplo, ou um ícone, ou um botão ao lado de um texto comprido. Se ele encolhesse junto com o texto, ficaria esmagado ou deformado. Com `flex-shrink: 0`, só o texto cede.

## 4. Tamanho de partida e atalho flex

**13.** O `flex-basis` é o tamanho de partida do item no eixo principal, antes de ele crescer ou encolher. Se o item tem `width: 200px` e `flex-basis: 10rem`, vale o `flex-basis`, porque ele passa na frente do `width`.

**14.** Com base 0 o item começa sem tamanho nenhum, então a faixa inteira conta como sobra. Por isso o `flex-grow` reparte tudo, e não só o que sobraria depois do conteúdo.

**15.**

- `flex: initial`: grow 0, shrink 1, basis auto.
- `flex: 1`: grow 1, shrink 1, basis 0.
- `flex: auto`: grow 1, shrink 1, basis auto.
- `flex: none`: grow 0, shrink 0, basis auto.

**16.** Com `flex: 1`, a base é 0, então a faixa toda é dividida igualmente: 300px e 300px.

Com `flex: auto`, a base é o conteúdo. Os itens ocupam 100 + 300 = 400px, sobram 200px, e cada um recebe 100px a mais: 200px e 400px.

Os resultados mudam porque o `flex: 1` ignora o tamanho do conteúdo (parte do zero), enquanto o `flex: auto` começa do conteúdo e divide só a sobra.

**17.** Falso. Só dão o mesmo resultado quando o tamanho de partida dos itens coincide. Se tiver `width`, padding ou conteúdo diferente, o `auto` leva isso em conta e o `1` não. Dizer "sempre" é exagero.

## 5. O mínimo que trava o encolhimento

**18.** Quem segura o item é o `min-width: auto`, que é o padrão dos itens flex e impede que eles fiquem menores que o próprio conteúdo. Para soltar, uso `min-width: 0`. Dependendo do caso, `overflow: hidden` ou `overflow-wrap: anywhere` no texto também resolvem.

**19.** Eu esperaria isso num miolo com menu e texto, quando o texto tem uma palavra ou URL muito longa, um bloco de código ou uma tabela larga. Em vez de encolher, o `<main>` estoura a página.

## 6. order e align-self

**20.**
- (a) Na tela fica C, A, B, porque o `order: -1` joga o C para a frente.
- (b) Com Tab, o foco passa por A, B, C, porque segue a ordem do HTML.
- (c) Leitor de tela e teclado seguem a ordem do código, não a visual. Se as duas forem diferentes, a pessoa navega numa sequência que não bate com o que está vendo, e isso confunde. Por isso a ordem do HTML precisa fazer sentido sozinha.

**21.** O padrão do `order` é 0. Entre `-1` e `2`, o `-1` aparece primeiro, porque o menor valor vem antes.

**22.** Com `align-self: flex-end`, o filho vai para o fim do eixo cruzado (embaixo, numa linha) e deixa de esticar. Com `align-self: auto`, ele obedece ao `align-items` do pai, então continua esticando.

**23.** Uso `align-items` no contêiner quando quero alinhar todos os itens do mesmo jeito, e `align-self` no item quando só ele precisa ser uma exceção.

## 7. A página com miolo

**24.** São itens de `.pagina`: o `<header>`, o `.miolo` e o `<footer>`. São itens de `.miolo`: o `<aside>` e o `<main>`.

**25.** Porque o `display: flex` só vale para os filhos diretos. Ser item de `.pagina` não faz `aside` e `main` virarem itens. Para eles ficarem lado a lado, o `.miolo` também precisa ser um contêiner flex.

**26.** Declaração por declaração:
- `.pagina { display: flex; flex-direction: column; min-height: 100vh; }` empilha topo, miolo e rodapé na vertical e garante que a página tenha pelo menos a altura da tela.
- `.miolo { display: flex; flex: 1; }` faz o miolo crescer e ocupar a sobra de altura, o que empurra o rodapé para baixo. Como também é flex, ele coloca menu e texto lado a lado.
- `aside { flex: 0 0 10rem; }` deixa o menu com 10rem de largura fixa: não cresce e não encolhe.
- `main { flex: 1; min-width: 0; }` faz o texto ocupar todo o resto da largura, e o `min-width: 0` deixa ele encolher em vez de estourar com conteúdo largo.

## 8. Erros comuns e síntese

**27.** O erro é escrever `flex-grow` no contêiner. Essa propriedade é dos itens. Para consertar, deixo o `display: flex` no contêiner e coloco `flex-grow: 1` (ou `flex: 1`) nos itens que devem crescer.

**28.** Duas formas:
1. `min-width: 0` (junto com `overflow`, se precisar): serve quando o item tem `flex-shrink: 1` mas está travado pelo mínimo automático, como um texto longo ou um código dentro do `<main>`.
2. `flex-wrap: wrap` no contêiner: serve quando os itens não devem ser espremidos e tudo bem se uma parte passar para a linha de baixo, como em cartões, galerias e menus.

**29.** Uma frase para cada propriedade:
- `flex-basis`: o tamanho de partida do item no eixo principal, antes de crescer ou encolher.
- `flex-grow`: quanto da sobra o item recebe, de acordo com o peso dele em relação aos irmãos.
- `flex-shrink`: quanto o item aceita ceder quando falta espaço.
- `order`: muda a posição visual do item sem mexer no HTML, e o menor valor vem primeiro.
- `align-self`: abre uma exceção ao `align-items` do pai para alinhar um único item no eixo cruzado.
