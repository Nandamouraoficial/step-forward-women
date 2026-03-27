

## Corrigir Meta Pixel — manter apenas o ID correto

O pixel com ID `106120919099612` está incorreto e precisa ser removido. Apenas o pixel `4320288374856933` deve permanecer.

### Alterações

**`index.html`** (linha 61): Remover `fbq('init', '106120919099612');` e manter apenas `fbq('init', '4320288374856933');`. Também remover o `<noscript>` referente ao pixel incorreto (ID `106120919099612`) no `<body>`.

**`src/pages/Index.tsx`**: Nenhuma alteração necessária — os eventos `Lead` e `InitiateCheckout` no `handleCTAClick` serão automaticamente enviados apenas para o pixel correto.

