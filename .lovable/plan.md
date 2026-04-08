

## Adicionar evento customizado do Microsoft Clarity nos cliques CTA

### Contexto

Todos os trackings de CTA (Meta Pixel, LinkedIn) já estão implementados. A única peça faltante é o disparo de `clarity('event', 'cta_click')` ao clicar nos CTAs.

### Mudança

Em `src/pages/Index.tsx`, dentro da função de clique do CTA (onde já disparam `fbq` e `lintrk`), adicionar:

```ts
try {
  if (typeof (window as any).clarity === 'function') {
    (window as any).clarity('event', 'cta_click');
  }
} catch (_) {}
```

Isso será adicionado em dois locais:
1. Na função `handleCtaClick` (tracking principal dos botões CTA)
2. Na função `fire` do scroll tracking (se aplicável)

### Arquivo modificado

| Arquivo | Mudança |
|---------|---------|
| `src/pages/Index.tsx` | Adicionar `clarity('event', 'cta_click')` nos handlers de clique CTA |

### O que NÃO muda

Meta Pixel, LinkedIn, lógica de redirect, demais seções.

