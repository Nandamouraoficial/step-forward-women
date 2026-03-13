

## Evento de conversão LinkedIn em todos os CTAs

### Abordagem

Criar uma função handler que dispara o pixel do LinkedIn antes de redirecionar, e substituir todos os `<a href={CTA_URL}>` por `<a>` com `onClick` que:

1. Chama `window.lintrk('track', { conversion_id: 26913521 })`
2. Redireciona com `window.open(CTA_URL, '_blank')` (ou `window.location.href`)

### Alterações

**Arquivo:** `src/pages/Index.tsx`

1. Adicionar declaração de tipo para `lintrk` no topo e criar handler:

```tsx
const handleCTAClick = () => {
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: 26913521 });
  }
  window.open(CTA_URL, '_blank');
};
```

2. Substituir as 5 instâncias de `<a href={CTA_URL}>` por:

```tsx
<a onClick={handleCTAClick} className="cursor-pointer">
```

Removendo o `href` para evitar redirecionamento antes do tracking.

