

# Igualar tamanho do "R$" e "1.497"

## Mudanca
- Arquivo: `src/pages/Index.tsx`, linhas 270-271
- Colocar "R$" e "1.497" no mesmo tamanho: `text-xl md:text-2xl font-bold`
- Remover a separacao de tamanhos entre simbolo e valor

## Detalhe tecnico
Substituir os dois spans por um unico estilo uniforme:
```jsx
<span className="text-xl md:text-2xl font-semibold align-baseline">R$</span>
<span className="text-3xl md:text-4xl font-bold ml-2">1.497</span>
```
Por:
```jsx
<span className="text-xl md:text-2xl font-bold">R$</span>
<span className="text-xl md:text-2xl font-bold ml-1">1.497</span>
```

