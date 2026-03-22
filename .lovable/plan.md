

## Substituir logo do Amigos do Bem pela imagem enviada

### Alteração

**1. `public/images/amigos-do-bem-icon.png`**
- Substituir pelo arquivo enviado (`user-uploads://Captura_de_Tela_2025-12-15_às_23.38.17.png`) — usar exatamente como está

**2. `src/pages/Index.tsx`**
- Remover `rounded-full` da classe da imagem (já que a logo deve aparecer exatamente como enviada, sem recorte circular forçado)

