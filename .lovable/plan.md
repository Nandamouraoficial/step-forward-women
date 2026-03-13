
# Hard Refresh da imagem OG para LinkedIn

## Problema
O LinkedIn está cacheando/rejeitando a imagem OG atual (`og-preview.png?v=20260313`). Mesmo em janela anônima, o preview não gera corretamente.

## Plano

### 1. Copiar a imagem com novo nome
- Criar uma cópia de `public/images/og-preview.png` como `public/images/og-preview-v2.png` (novo caminho = cache zerado no LinkedIn).

### 2. Atualizar todas as referências em `index.html`
- Trocar todas as 4 ocorrências de `og-preview.png?v=20260313` por `og-preview-v2.png` (sem querystring).
- Atualizar `og:image:type` para `image/png` (já está).
- Atualizar `og:updated_time` para timestamp atual.

### 3. Adicionar dimensões explícitas
- Incluir `og:image:width` = `1200` e `og:image:height` = `630` (LinkedIn recomenda explicitamente essas tags).

### Detalhes técnicos
As tags afetadas no `index.html`:
- `og:image` → novo path
- `og:image:url` → novo path
- `og:image:secure_url` → novo path
- `twitter:image` → novo path
- `og:updated_time` → novo timestamp
- Adicionar `og:image:width` e `og:image:height`

Após publicar, o LinkedIn vai buscar a URL completamente nova, sem cache anterior.
