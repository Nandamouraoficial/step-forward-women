

## Harmonizar quebras de linha na landing page

### Problema identificado
Em diversas seções, frases estão quebrando de forma desarmoniosa, deixando poucas palavras isoladas na segunda linha. Exemplos:

1. **"Quem já passou pela consultoria / estratégica"** — apenas "estratégica" na segunda linha (aparece 2x)
2. **"É saber que precisa mudar e continuar sem / um plano concreto."** — "um plano concreto." isolado
3. **"Ela tomou essas / decisões de dentro."** — "decisões de dentro." órfão
4. **"...custa entre R$ / 3.000 e R$ 10.000"** — "R$" quebrando do valor

### Solução

Aplicar `text-wrap: balance` via Tailwind (`text-balance`) nos títulos (h2) e parágrafos-chave que sofrem com esse problema. Essa propriedade CSS moderna distribui as palavras de forma mais equilibrada entre as linhas, evitando órfãos automaticamente — sem precisar adicionar `<br />` manuais que quebram em outros tamanhos de tela.

### Alterações em `src/pages/Index.tsx`

- Adicionar classe `text-balance` em todos os `<h2>` das seções (linhas 79, 117, 159, 188, 238, 268, 302, 357, 385, 457)
- Adicionar `text-balance` nos parágrafos com frases impactantes que sofrem com o problema:
  - Frase bold do bio da Fernanda (linha 335)
  - Parágrafo do investimento com "R$ 3.000 e R$ 10.000" (linha 391)
  - Frase do CTA final (linha 480-482)
  - Callout "Você não precisa estar em transição" (linha 97-98)
  - Texto de garantia (linha 460-461)

Isso resolve o problema de forma responsiva, sem quebras manuais, adaptando-se a qualquer tamanho de tela.

