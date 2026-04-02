

## Atualizar valor do evento Purchase no Meta Pixel

Alterar `value: 0` para `value: 1497` no disparo do evento `Purchase` em `src/pages/Obrigado.tsx`.

### Alteração

**`src/pages/Obrigado.tsx`** — linha 15:
```diff
- window.fbq('track', 'Purchase', { currency: 'BRL', value: 0 });
+ window.fbq('track', 'Purchase', { currency: 'BRL', value: 1497 });
```

