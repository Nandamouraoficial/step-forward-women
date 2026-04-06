

## Reestruturar Hero + Otimizações Técnicas de Performance

### Parte 1: Nova Hero (4 blocos enxutos + CTA único)

Reescrever a seção Hero (linhas 92-136) em `src/pages/Index.tsx` com estrutura mais limpa:

**Bloco 1 (hook)**
> Você não está travada.
> Você está atrasando uma decisão que já está custando crescimento.

**Bloco 2 (contexto)**
> Você continua entregando — mas não está avançando na mesma proporção.

**Bloco 3 (promessa)**
> Em 6 horas, você estrutura essa decisão com clareza e um plano executável.

**Bloco 4 (detalhes rápidos)** — linha compacta com ícones ou separadores:
> 11 de abril · 9h às 15h · Online · Até 15 executivas

**CTA único**: QUERO DECIDIR MEU PRÓXIMO PASSO (sem microcopy "Em 6 horas. Com método." pois a promessa já diz isso)

A foto da Fernanda permanece ao lado (desktop) / abaixo (mobile).

---

### Parte 2: Otimizações Técnicas

1. **Comprimir imagens da hero** — converter `fernanda-hero.png` (1.4MB) e `juliana-zobaran.png` (1.2MB) para WebP com qualidade 80, reduzindo ~70% do tamanho. Atualizar imports.

2. **Lazy load abaixo da dobra** — a foto da Juliana (seção 5) e a imagem `sobre-poltrona.png` já têm `loading="lazy"`. Garantir que `juliana-zobaran.png` do case também use a versão WebP comprimida.

3. **Priorizar render de texto** — adicionar `fetchpriority="high"` à imagem da hero para não bloquear o LCP textual. Garantir que as fontes (Lato, Playfair Display) usem `font-display: swap` (já configurado via Google Fonts URL).

4. **Remover scripts não críticos** — o defer de 1500ms para LinkedIn/Meta já está implementado. Mover o Microsoft Clarity para carregamento com `setTimeout` similar (1500ms) em vez de carregar imediatamente no `<head>`.

---

### Arquivos modificados

| Arquivo | Mudança |
|---------|---------|
| `src/pages/Index.tsx` | Reestruturar Hero (linhas 92-136) |
| `src/assets/` | Adicionar versões WebP das imagens |
| `index.html` | Defer do Clarity para 1500ms |

### O que NÃO muda
Demais seções, CTAs, lógica de tracking, layout geral.

