

## Corrigir headline cortada no mobile

### Problema
A headline "Mas ainda não estruturou como chegar lá." está ultrapassando a largura da tela em 375px. O `text-3xl` (30px) com Playfair Display `font-black` é muito largo para o espaço disponível (375px - 32px padding = 343px).

### Alteração em `src/pages/Index.tsx`

**Linha 32** — Reduzir o tamanho base da headline:

`text-3xl sm:text-4xl` → `text-2xl sm:text-3xl`

Manter o restante da escala (`md:text-5xl lg:text-[3.25rem]`) inalterado.

Classe final: `font-display text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.15] mb-5 text-balance`

### Impacto
- Corrige o overflow no mobile (375px)
- Mantém a escala progressiva em telas maiores
- Alinhado com a diretriz de tipografia do hero (`text-2xl sm:text-2xl md:text-3xl...`)

