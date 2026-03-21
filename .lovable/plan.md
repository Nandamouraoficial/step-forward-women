

## Remover tags Twitter e manter apenas OG (LinkedIn/Instagram)

### Contexto
O site tem tags `twitter:*` apontando para `@Lovable`, que não é relevante. Como você só usa Instagram e LinkedIn, as tags Twitter podem ser removidas. As tags Open Graph (`og:*`) já são usadas pelo LinkedIn, Instagram e WhatsApp.

### Alteração em `index.html`

**Remover linhas 32-39** — todas as tags `twitter:*`:
```html
<!-- REMOVER tudo isso -->
<meta name="twitter:card" ...>
<meta name="twitter:site" ...>
<meta name="twitter:url" ...>
<meta name="twitter:image" ...>
<meta name="twitter:image:alt" ...>
```

**Remover linhas 62-65** (no final do arquivo) — as tags duplicadas `twitter:title` e `twitter:description`.

As tags `og:*` já existentes cobrem perfeitamente LinkedIn, Instagram e WhatsApp. Nenhuma tag adicional é necessária.

