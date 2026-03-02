

# Melhorar tipografia do valor R$ 1.497

## Contexto
O preco "R$ 1.497" na secao de investimento precisa de uma apresentacao tipografica mais elegante e harmonica com a identidade visual premium da pagina.

## Mudanca
- Arquivo: `src/pages/Index.tsx`, secao de investimento (linha ~275)
- Trocar `font-black` por `font-bold` para um peso mais refinado
- Adicionar `tracking-tight` para um espacamento entre letras mais coeso
- Separar "R$" do valor numerico com tamanhos diferentes para criar hierarquia visual (R$ menor, 1.497 maior)
- Usar `text-primary/90` para suavizar levemente a cor

## Detalhe tecnico
Substituir:
```jsx
<p className="font-display text-5xl md:text-6xl font-black text-primary">
  R$ 1.497
</p>
```
Por:
```jsx
<p className="font-display text-primary tracking-tight">
  <span className="text-3xl md:text-4xl font-semibold align-baseline">R$</span>
  <span className="text-6xl md:text-7xl font-bold ml-2">1.497</span>
</p>
```

Isso cria uma hierarquia visual onde o simbolo monetario fica menor e o valor numerico ganha destaque, resultando em uma composicao mais sofisticada e alinhada com a estetica executiva premium da pagina.

