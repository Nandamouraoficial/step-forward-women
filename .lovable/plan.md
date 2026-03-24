

## Ajustar selo para não sobrepor conteúdo no mobile

### Problema
O `SealBadge` usa `fixed bottom-6 left-4` com `w-20 h-20` no mobile, ficando sobre o texto durante o scroll.

### Solução
Reduzir o tamanho no mobile e reposicionar para o canto inferior direito, onde há menos conflito com o conteúdo textual (alinhado à esquerda).

### Alteração em `src/components/SealBadge.tsx`
- Mudar posição de `left-4` para `right-3 sm:right-4` (canto inferior direito)
- Reduzir tamanho mobile de `w-20 h-20` para `w-16 h-16`
- Manter tamanhos `sm` e `md` iguais

