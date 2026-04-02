

## Otimizar INP (Interaction to Next Paint) da página

### Diagnóstico

Três fontes principais de latência nas interações:

1. **CountdownTimer re-renderiza a cada 1 segundo** com `setInterval` -- embora não bloqueie diretamente o INP, consome tempo de JS no main thread que pode coincidir com cliques
2. **SealBadge usa framer-motion com animação infinita** (`scale: [1, 1.06, 1]` em loop) -- força recalcs de layout/paint contínuos
3. **`handleCTAClick` dispara chamadas síncronas a `fbq` e `lintrk`** no main thread durante o clique, adicionando latência antes do browser processar o next paint
4. **`hover:scale-105` com `transition-all`** nos botões CTA transiciona TODAS as propriedades (incluindo layout) em vez de apenas `transform`

### Alterações em `src/pages/Index.tsx`

1. **Tornar `handleCTAClick` assíncrono** -- mover os disparos de pixel para um `setTimeout(fn, 0)` ou `requestIdleCallback`, liberando o main thread para pintar primeiro:

```tsx
const handleCTAClick = () => {
  // Defer tracking to next idle frame so click paint is not blocked
  const fire = () => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead');
      (window as any).fbq('track', 'InitiateCheckout');
    }
    if ((window as any).lintrk) {
      (window as any).lintrk('track', { conversion_id: 26913521 });
    }
  };
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(fire);
  } else {
    setTimeout(fire, 0);
  }
};
```

2. **Substituir `transition-all` por `transition-transform`** em todos os botões CTA (6 ocorrências) para evitar transicionar propriedades de layout:
   - Trocar `transition-all duration-300` por `transition-transform duration-300`

### Alterações em `src/components/SealBadge.tsx`

3. **Eliminar a animação infinita de framer-motion** -- substituir o `motion.div` interno por CSS `will-change: transform` e uma animação CSS pura via keyframes no Tailwind (ou simplesmente remover o pulse, mantendo apenas a animação de entrada):

```tsx
const SealBadge = () => (
  <motion.div
    initial={{ scale: 0, rotate: 0, opacity: 0 }}
    animate={{ scale: 1, rotate: -12, opacity: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
    className="fixed bottom-6 right-3 sm:right-4 z-50 ... bg-background/90"
  >
    <div className="animate-pulse-subtle">
      <p className="...">Edição<br/>Exclusiva<br/>para<br/>Mulheres</p>
    </div>
  </motion.div>
);
```

Adicionar em `tailwind.config.ts` um keyframe CSS-only `pulse-subtle` que usa apenas `transform: scale()` (compositor-only, sem layout):

```js
keyframes: {
  'pulse-subtle': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.06)' },
  }
},
animation: {
  'pulse-subtle': 'pulse-subtle 2.5s ease-in-out infinite',
}
```

### Alterações em `src/components/CountdownTimer.tsx`

4. **Nenhuma alteração funcional** -- o timer a cada 1s é necessário para o countdown. Porém, adicionar `will-change: contents` nos blocos numéricos não ajuda. A abordagem mais eficaz é garantir que o re-render seja o mais leve possível, o que já é o caso (componente simples).

### Alterações em `index.html`

5. **Deferir scripts de tracking** -- adicionar `defer` ou mover para o final do `<body>` os scripts do LinkedIn Insight e Meta Pixel que atualmente carregam no `<head>` de forma síncrona, competindo por main thread durante a interação:
   - Envolver os scripts fbq e lintrk em `requestIdleCallback` ou simplesmente garantir que já estejam `async` (o LinkedIn já é async; o Meta Pixel já é async -- confirmar)

### Resumo das mudanças

| Arquivo | Mudança |
|---------|---------|
| `src/pages/Index.tsx` | Deferir tracking no `handleCTAClick`; trocar `transition-all` por `transition-transform` nos 6 botões |
| `src/components/SealBadge.tsx` | Trocar animação infinita framer-motion por CSS keyframe puro |
| `tailwind.config.ts` | Adicionar keyframe `pulse-subtle` |

Nenhuma mudança visual perceptível.

