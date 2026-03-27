

## Adicionar evento `fbq('track', 'Lead')` ao clique do CTA

### Alteração em `src/pages/Index.tsx`

Na função `handleCTAClick` (linha 9-14), adicionar o disparo do evento Meta Pixel antes do `window.open`:

```ts
const handleCTAClick = () => {
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: 26913521 });
  }
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
  window.open(CTA_URL, '_blank');
};
```

Isso dispara o evento `Lead` no Meta Ads sempre que qualquer um dos 4 botões "GARANTIR MINHA VAGA" for clicado.

