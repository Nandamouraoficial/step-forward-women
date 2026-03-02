

## Unificar o valor "R$ 1.497" em um unico elemento

### Problema
O numero "1" parece menor que "497" provavelmente por causa do `tracking-tight` (letter-spacing negativo) no elemento pai, ou pela separacao em spans distintos que causa renderizacao diferente.

### Solucao
Colocar todo o texto "R$ 1.497" em um unico span com estilo uniforme, removendo a separacao em dois spans. Isso garante que todos os caracteres tenham exatamente o mesmo tamanho e espacamento.

### Detalhe tecnico
**Arquivo:** `src/pages/Index.tsx`, linhas 270-273

Substituir:
```jsx
<p className="font-display text-primary tracking-tight">
  <span className="text-xl md:text-2xl font-bold">R$</span>
  <span className="text-xl md:text-2xl font-bold ml-1">1.497</span>
</p>
```

Por:
```jsx
<p className="font-display text-primary text-2xl md:text-3xl font-bold">
  R$ 1.497
</p>
```

Isso remove a separacao em spans e coloca tudo no mesmo tamanho (`text-2xl md:text-3xl`), garantindo uniformidade visual completa.

