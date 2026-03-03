

## Corrigir texto escuro na secao Formato

### Problema
A div container da secao "Formato" (linha 237) ainda usa `text-primary-foreground` (azul marinho escuro), que e herdado pelos icones, labels e paragrafo. Apenas o h2 foi corrigido com `text-foreground` explicito, mas o resto do conteudo continua escuro e ilegivel.

### Solucao
Alterar `text-primary-foreground` para `text-foreground` na div container (linha 237). Isso faz todos os elementos filhos (icones, labels, paragrafo) herdarem a cor dourada clara.

### Alteracao

**Arquivo:** `src/pages/Index.tsx`, linha 237

- De: `text-center text-primary-foreground`
- Para: `text-center text-foreground`

Com isso, o `text-foreground` explicito no h2 tambem se torna redundante, mas nao causa problema manter.

### Resultado
Todos os textos e icones da secao Formato ficam em dourado claro, legiveis sobre o fundo azul marinho.

