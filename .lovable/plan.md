

## Harmonizar tipografia do preco e contador

### Alteracoes

**1. Preco "R$ 1.497" — `src/pages/Index.tsx`**

- Trocar `font-display` (Playfair Display) por `font-body` (Lato) para usar a mesma fonte da frase acima
- Manter tamanho `text-2xl md:text-3xl` e cor `text-primary`
- Remover `font-bold`, usar `font-semibold` para harmonizar com o texto ao redor

**2. Contador regressivo — `src/components/CountdownTimer.tsx`**

- Reduzir numeros e labels para `text-base md:text-lg` (um passo menor que o atual `text-lg md:text-2xl`)
- Reduzir padding dos blocos de `px-4 py-3 md:px-6 md:py-4` para `px-3 py-2 md:px-5 md:py-3`
- Reduzir `min-w` de `4rem/5rem` para `3.5rem/4.5rem`
- Resultado: blocos mais compactos e proporcionais ao preco

