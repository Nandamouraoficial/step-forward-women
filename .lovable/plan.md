

# Reduzir tamanho dos numeros do valor R$ 1.497

## Contexto
O valor "1.497" na secao de investimento esta com tamanho `text-6xl md:text-7xl`, que ficou grande demais. O usuario quer diminuir.

## Mudanca
- Arquivo: `src/pages/Index.tsx`, linha 271
- Reduzir o tamanho do valor numerico de `text-6xl md:text-7xl` para `text-5xl md:text-6xl`

## Detalhe tecnico
Substituir:
```jsx
<span className="text-6xl md:text-7xl font-bold ml-2">1.497</span>
```
Por:
```jsx
<span className="text-5xl md:text-6xl font-bold ml-2">1.497</span>
```

