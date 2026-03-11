

## Correção do layout mobile — Carimbo sobrepondo o título

### Problema identificado
No mobile (375px), o carimbo redondo posicionado com `absolute top-6 left-6` sobrepõe o título "IMERSÃO O PRÓXIMO PASSO", prejudicando a leitura.

O restante da página (seções de conteúdo, investimento, bloco final e footer) está bem posicionado e responsivo.

### Solução

**Arquivo:** `src/pages/Index.tsx`

- Adicionar `pt-36` (padding-top) no container interno do hero para mobile, empurrando o conteúdo para baixo do carimbo
- Em desktop (`lg:pt-0`) manter o padding original pois o layout side-by-side tem espaço suficiente
- Reduzir levemente o carimbo no mobile: `w-24 h-24` em vez de `w-28 h-28`

Isso garante que o carimbo fique visível sem sobrepor o texto.

