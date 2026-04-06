

## Otimização de LCP — Plano

### Análise atual

A página tem apenas **2 imagens**:
1. `/images/amigos-do-bem-icon.png` — seção 5 (Investimento), abaixo da dobra
2. `/images/final-equipe.png` — seção 7 (Fechamento), bem abaixo da dobra

O Hero é puro texto + CSS gradient — sem imagem. O LCP element provavelmente é o `<h1>` ou o maior bloco de texto do Hero, que depende do carregamento do JS bundle (React SPA).

Há também 8 imagens em `public/images/` que não são usadas na página atual (sobras de versões anteriores).

### Plano de otimização

**1. Adicionar `loading="lazy"` na imagem do Amigos do Bem** (linha 260)
- Já está abaixo da dobra, não precisa carregar eagerly

**2. Confirmar `loading="lazy"` na imagem final-equipe** (já tem, linha 300 — ok)

**3. Adicionar `fetchpriority="high"` e preload do CSS no `<head>`**
- O LCP nesta página é texto, então o gargalo é o tempo de parse do JS bundle
- Adicionar `<link rel="modulepreload">` para o entry point não é possível em dev, mas em produção o Vite já faz isso

**4. Adiar scripts de tracking para não competir com LCP**
- LinkedIn e Meta Pixel já estão com `setTimeout(..., 1500)` — bom
- Clarity está inline e síncrono no `<head>` mas carrega script async — aceitável

**5. Remover imagens não usadas de `public/images/`**
- `amigos-do-bem.png`, `foto_terno.jpeg`, `hero-terno-branco.png`, `og-preview-v2.png`, `og-preview.png`, `sobre-poltrona.png` — 6 arquivos que não são referenciados em nenhum lugar do código atual
- Reduz o deploy size (não afeta LCP diretamente, mas limpa assets desnecessários)

**6. Adicionar `decoding="async"` nas duas imagens**
- Evita bloquear a thread de renderização para decodificar imagens

**7. Injetar font-display: swap nas fontes customizadas** (se houver)
- Verificar se já está configurado no CSS

### Arquivos editados
- `src/pages/Index.tsx` — adicionar `loading="lazy"` e `decoding="async"` na imagem do Amigos do Bem
- Remover 6 imagens não usadas de `public/images/`

