

## Revisão Técnica Completa da Landing Page

### Problemas Encontrados

**1. index.html — Tags duplicadas e scripts problemáticos**
- Duas tags `<meta name="author">` (linhas 11-12)
- Duas tags `<link rel="canonical">` (linhas 20, 22)
- Duas tags `<meta property="og:image">` com URLs diferentes (uma GCS longa, uma local)
- Duas tags `<meta property="og:image:url">` / `og:image:secure_url` extras
- Microsoft Clarity carrega sincronamente no `<head>` — pode travar in-app browsers
- Meta Pixel e LinkedIn estão num `setTimeout(1500ms)` que pode causar "Script error" quando o in-app browser do Instagram/Facebook fecha a página antes do timer disparar

**2. SealBadge — framer-motion pesado para in-app browsers**
- `framer-motion` adiciona ~30KB de JS; in-app browsers do Instagram/Facebook têm engines mais lentas
- A animação pode travar o primeiro render em mobile

**3. Página /obrigado — Data inconsistente**
- Obrigado.tsx mostra "10 de maio" e "Presencial em SP", mas Index.tsx diz "11 de abril" e "Online e ao vivo"

### Plano de Correções

**Arquivo: `index.html`**
1. Remover tags `<meta name="author">` duplicada (manter apenas uma)
2. Remover `<link rel="canonical">` duplicada
3. Consolidar tags `og:image` — manter apenas a URL local (`/images/og-preview-v2.png`) e remover a URL GCS longa que pode expirar
4. Remover `og:image:url` e `og:image:secure_url` redundantes (o `og:image` já cobre)
5. Mover Microsoft Clarity para carregar de forma assíncrona com `defer` ou dentro do `setTimeout` existente
6. Tornar o carregamento de LinkedIn/Meta Pixel mais robusto: verificar se `window.fbq` já existe antes de re-inicializar, e usar `try-catch` ao redor dos scripts para evitar "Script error" em in-app browsers

**Arquivo: `src/components/SealBadge.tsx`**
7. Substituir `framer-motion` por CSS animation pura — mesmo efeito visual (scale + rotate) usando `@keyframes` e classes Tailwind, eliminando o bundle de framer-motion e melhorando performance em in-app browsers

**Arquivo: `src/pages/Index.tsx`**
8. Adicionar `try-catch` defensivo ao redor de todas as chamadas `fbq` e `lintrk` no `handleCTAClick` — in-app browsers podem bloquear esses scripts, causando erros
9. Verificar que `typeof window.fbq === 'function'` (não apenas truthy) antes de chamar — evita "is not a function" errors

**Arquivo: `src/pages/Obrigado.tsx`**
10. Corrigir data de "10 de maio" para "11 de abril" e formato de "Presencial em SP" para "Online e ao vivo" — alinhar com a landing page principal

### Detalhes Técnicos

**SealBadge sem framer-motion:**
```css
@keyframes seal-enter {
  from { transform: scale(0) rotate(0deg); opacity: 0; }
  to { transform: scale(1) rotate(-12deg); opacity: 1; }
}
```
Aplicar via classe Tailwind custom no `tailwind.config.ts`.

**Scripts defensivos no index.html:**
```js
setTimeout(function() {
  try {
    // LinkedIn + Meta Pixel init
  } catch(e) {}
}, 1500);
```

**handleCTAClick defensivo:**
```tsx
const fire = () => {
  try {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead');
      (window as any).fbq('track', 'InitiateCheckout');
    }
  } catch (_) {}
};
```

### Resultado Esperado
- Zero erros de JS no console (inclusive em in-app browsers)
- Todos os CTAs funcionando em qualquer browser (Instagram, Facebook, Safari, Chrome)
- Página mais leve sem framer-motion (~30KB a menos)
- Scroll fluido sem travamentos
- Dados consistentes entre páginas
- Todos os links apontando para `https://step-forward-women.lovable.app`

