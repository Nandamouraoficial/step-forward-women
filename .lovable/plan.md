

## Adicionar scroll tracking na primeira dobra

### O que será feito
Adicionar um `useEffect` em `src/pages/Index.tsx` que usa `IntersectionObserver` para detectar quando o usuário passa da primeira dobra (hero). Ao cruzar esse ponto, dispara eventos nos pixels Meta (`fbq('trackCustom', 'ScrollPastHero')`) e LinkedIn (`lintrk('track', ...)`), garantindo que o evento só dispare uma vez por sessão.

### Alterações em `src/pages/Index.tsx`

1. **Adicionar `import`**: `useEffect, useRef` do React
2. **Adicionar ref**: `useRef` no elemento sentinela (um `<div>` invisível logo após a seção Hero)
3. **Adicionar `useEffect`** com `IntersectionObserver`:
   - Observa o `<div>` sentinela posicionado entre o Hero e a seção 2
   - Quando `isIntersecting` é `true`, dispara:
     - `fbq('trackCustom', 'ScrollPastHero')` (Meta)
     - `lintrk('track', { conversion_id: 26913521 })` — ou um ID separado se preferir não misturar com o CTA
   - Desconecta o observer após o primeiro disparo (fire once)
4. **Inserir `<div ref={sentinelRef} />`** entre o fechamento da seção Hero e a abertura da seção 2

### Nenhuma outra alteração
- Sem mudanças visuais
- Sem mudanças em outras seções

