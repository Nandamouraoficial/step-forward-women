

# Reduzir mais o tamanho do valor R$ 1.497

## Contexto
O valor ainda esta grande. Vamos reduzir bastante para ficar mais discreto e elegante.

## Mudanca
- Arquivo: `src/pages/Index.tsx`, linhas 270-271
- Reduzir "R$" de `text-3xl md:text-4xl` para `text-xl md:text-2xl`
- Reduzir "1.497" de `text-5xl md:text-6xl` para `text-3xl md:text-4xl`

## Detalhe tecnico
Substituir:
```jsx
<span className="text-3xl md:text-4xl font-semibold align-baseline">R$</span>
<span className="text-5xl md:text-6xl font-bold ml-2">1.497</span>
```
Por:
```jsx
<span className="text-xl md:text-2xl font-semibold align-baseline">R$</span>
<span className="text-3xl md:text-4xl font-bold ml-2">1.497</span>
```

