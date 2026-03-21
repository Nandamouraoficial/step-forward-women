

## Corrigir conflito nas tags OG para LinkedIn

### Problema
O `index.html` tem tags OG conflitantes — a tag principal `og:image` (linha 17) e `twitter:image` (linha 35) apontam para uma URL do Google Storage (`.webp`), enquanto `og:image:url` e `og:image:secure_url` apontam para `og-preview-v2.png`. O LinkedIn usa a primeira `og:image` encontrada, ignorando as demais.

### Plano

**Alteração única em `index.html`:**

1. **Linha 17** — Trocar o `og:image` do Google Storage para:
   `https://step-forward-women.lovable.app/images/og-preview-v2.png`

2. **Linha 35** — Trocar o `twitter:image` do Google Storage para:
   `https://step-forward-women.lovable.app/images/og-preview-v2.png`

3. **Linha 30** — Atualizar `og:updated_time` para `2026-03-21T12:00:00Z` (data atual, força refresh de cache).

Todas as 4 referências de imagem (og:image, og:image:url, og:image:secure_url, twitter:image) passarão a apontar para o mesmo arquivo `og-preview-v2.png`.

### Após publicar
Testar manualmente no LinkedIn Post Inspector em janela anônima para confirmar que o card aparece com a imagem correta.

