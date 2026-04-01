

## Corrigir referência ao sentinelRef no scroll tracking

### Diagnóstico

O código atual captura `sentinelRef.current` e `midpointRef.current` no topo do `useEffect` (linhas 16-17), mas `bottomRef.current` é capturado separadamente na linha 40. Todos têm guard clauses (`if (el)`), então o erro reportado pelo Clarity provavelmente ocorre em cenários de montagem parcial — quando o DOM ainda não renderizou os sentinel divs antes do efeito rodar (navegação rápida, hidratação lenta, etc.).

### Alteração em `src/pages/Index.tsx` (linhas 15-46)

Unificar a captura dos três refs e adicionar uma verificação defensiva extra com `requestAnimationFrame` para garantir que os elementos existam no DOM antes de criar os observers:

```tsx
useEffect(() => {
  let cancelled = false;

  const createObserver = (el: HTMLElement, eventName: string) => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(`[ScrollTracking] ${eventName} disparado`, new Date().toISOString());
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('trackCustom', eventName);
          }
          if (typeof window !== 'undefined' && (window as any).lintrk) {
            (window as any).lintrk('track', { conversion_id: 26913521 });
          }
          obs.disconnect();
        }
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return obs;
  };

  const rafId = requestAnimationFrame(() => {
    if (cancelled) return;
    const observers: IntersectionObserver[] = [];
    const sentinelEl = sentinelRef.current;
    const midpointEl = midpointRef.current;
    const bottomEl = bottomRef.current;

    if (sentinelEl) observers.push(createObserver(sentinelEl, 'ScrollPastHero'));
    if (midpointEl) observers.push(createObserver(midpointEl, 'ScrollMidpoint'));
    if (bottomEl) observers.push(createObserver(bottomEl, 'ScrollBottom'));

    // Store for cleanup
    (window as any).__scrollObservers = observers;
  });

  return () => {
    cancelled = true;
    cancelAnimationFrame(rafId);
    const obs = (window as any).__scrollObservers;
    if (obs) obs.forEach((o: IntersectionObserver) => o.disconnect());
  };
}, []);
```

A mudança-chave: mover a leitura de `.current` para dentro de um `requestAnimationFrame`, garantindo que o browser já fez layout e os refs estão populados. A flag `cancelled` evita race conditions no unmount.

### Nenhuma outra alteração

