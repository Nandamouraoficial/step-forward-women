

## Scroll Suave — Análise e Plano

### Situação atual
Todos os CTAs da página ("GARANTIR MINHA VAGA") apontam para o link externo do Kiwify (`target="_blank"`). **Não existem links internos** (âncoras `#seção`) na LP — portanto, não há navegação interna que se beneficie de scroll suave.

### O que posso implementar

**Opção A — CSS `scroll-behavior: smooth` global**
Adicionar `scroll-behavior: smooth` ao `<html>` em `src/index.css`. Isso garante que qualquer scroll programático (ex.: `window.scrollTo`, âncoras futuras) seja animado. Mudança de 1 linha.

**Opção B — Além do CSS, criar navegação interna com âncoras**
Adicionar `id`s nas seções principais (hero, diagnóstico, investimento, etc.) e criar links internos (ex.: no topo ou como menu) que fazem scroll suave até cada seção. Isso é uma mudança maior e altera a estrutura visual.

### Plano recomendado (Opção A — mínimo e funcional)

1. **`src/index.css`** — Adicionar `scroll-behavior: smooth` no seletor `html` existente
2. Pronto. Qualquer scroll programático ou âncora futura terá animação suave automaticamente

### Arquivo editado
- `src/index.css` (1 linha)

