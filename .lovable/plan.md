

## Substituir logo do Amigos do Bem pela imagem enviada pelo usuário

### Problema
A logo atual em `public/images/amigos-do-bem-icon.png` foi baixada da internet. O usuário quer que seja usada exatamente a imagem que ele enviou agora (`user-uploads://logo.png`).

### Alteração

**1. Substituir o asset**
- Copiar `user-uploads://logo.png` para `public/images/amigos-do-bem-icon.png`, sobrescrevendo o arquivo atual

Nenhuma alteração de código é necessária — o `src/pages/Index.tsx` já referencia `/images/amigos-do-bem-icon.png`.

