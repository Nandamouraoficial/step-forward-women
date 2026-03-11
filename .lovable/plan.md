

## Correção de sobreposição no tablet (768px)

**Problema identificado:** Em 768px, o selo circular "Edição Exclusiva para Mulheres" (com `md:w-36 md:h-36`) sobrepõe o texto inicial do hero.

**Arquivo:** `src/pages/Index.tsx`

**Solução:** Reduzir o tamanho do selo no breakpoint `md` e ajustar o padding-top da hero para garantir espaço suficiente. Alterações:

1. Reduzir o selo de `md:w-36 md:h-36` para `md:w-28 md:h-28`
2. Ajustar o `pt` da hero para `md:pt-28` garantindo que o texto não fique atrás do selo

