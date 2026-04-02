

## Correção Definitiva: "sentinelRef is not defined"

### Diagnóstico

O código atual (linhas 12-57 de `Index.tsx`) está sintaticamente correto — `sentinelRef` é declarado com `useRef` e acessado com null checks. Porém, em in-app browsers (Instagram/Facebook), o bundle JS pode ser interrompido parcialmente ou o engine pode falhar ao inicializar o componente, resultando em um `ReferenceError` onde a variável `sentinelRef` simplesmente não existe no escopo.

O `try-catch` na linha 42 protege apenas o acesso a `.current`, mas se o próprio `useRef` falhar na inicialização (linha 12), o erro ocorre antes do try-catch.

### Solução

**Eliminar os refs de scroll tracking completamente.** Substituir por um único `scroll` event listener que calcula a posição baseada em `scrollY` e `document.body.scrollHeight`. Isso remove toda dependência de `useRef` e `IntersectionObserver` para tracking, mantendo a mesma funcionalidade analítica.

### Mudanças

**Arquivo: `src/pages/Index.tsx`**

1. Remover as 3 linhas de `useRef` (sentinelRef, midpointRef, bottomRef)
2. Remover os 3 `<div ref={...} aria-hidden="true" />` do JSX (linhas ~135, ~341, ~581)
3. Substituir o `useEffect` inteiro (linhas 16-57) por:

```tsx
useEffect(() => {
  const fired = { hero: false, mid: false, bottom: false };

  const onScroll = () => {
    try {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);

      const fireEvent = (key: keyof typeof fired, eventName: string) => {
        if (fired[key]) return;
        fired[key] = true;
        try {
          if (typeof (window as any).fbq === 'function') {
            (window as any).fbq('trackCustom', eventName);
          }
        } catch (_) {}
        try {
          if (typeof (window as any).lintrk === 'function') {
            (window as any).lintrk('track', { conversion_id: 26913521 });
          }
        } catch (_) {}
      };

      if (pct > 0.15) fireEvent('hero', 'ScrollPastHero');
      if (pct > 0.50) fireEvent('mid', 'ScrollMidpoint');
      if (pct > 0.85) fireEvent('bottom', 'ScrollBottom');

      if (fired.hero && fired.mid && fired.bottom) {
        window.removeEventListener('scroll', onScroll);
      }
    } catch (_) {}
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

### Por que funciona

- **Zero refs** → impossível ter "sentinelRef is not defined"
- **Zero IntersectionObserver** → API que pode não estar totalmente disponível em in-app browsers antigos
- **`{ passive: true }`** → sem impacto no scroll performance
- **Auto-cleanup** → listener se remove após os 3 eventos dispararem
- **try-catch completo** → qualquer falha é silenciada
- Os thresholds (15%, 50%, 85%) correspondem aproximadamente às posições dos sentinels originais no layout

### Nenhuma mudança visual
As divs sentinel eram invisíveis (`aria-hidden="true"`, sem conteúdo). Removê-las não altera nada visualmente.

