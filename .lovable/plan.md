

## Melhorar responsividade da headline do hero em mobile

### Alteração em `src/pages/Index.tsx` (linha 28)

**De:** `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`

**Para:** `text-xl sm:text-2xl md:text-3xl lg:text-4xl`

Tamanhos resultantes:
- Mobile (< 640px): 20px (era 24px)
- SM (≥ 640px): 24px (era 30px)
- MD (≥ 768px): 30px (era 36px)
- LG (≥ 1024px): 36px (era 48px)

A headline atual, por ser longa ("Você já construiu a carreira. Já decidiu que quer mudança. Agora precisa de direção."), ocupa muitas linhas em telas pequenas. Reduzir um nível melhora a legibilidade em mobile sem perder hierarquia visual em desktop.

