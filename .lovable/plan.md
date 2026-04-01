

## Atualizar CTAs abaixo do hero para o novo padrão

Existem **4 blocos de CTA** que precisam ser invertidos para seguir o padrão do hero (botão principal = checkout, link secundário = WhatsApp):

### Alterações em `src/pages/Index.tsx`

1. **Seção 2 — "Para quem é"** (linhas 146-159): Trocar botão principal para `CHECKOUT_URL` com texto "GARANTIR MINHA VAGA", remover texto "Fernanda responde...", trocar link secundário para WhatsApp com texto "Prefiro conversar no WhatsApp"

2. **Seção 5 — "O que acontece em 6h"** (linhas 267-280): Mesmo padrão

3. **Seção 10 — "Investimento"** (linhas 467-479): Mesmo padrão

4. **Seção 12 — "CTA Final"** (linhas 544-557): Mesmo padrão

5. **Barra fixa mobile** (linhas 576-584): Trocar link para `CHECKOUT_URL` e texto para "GARANTIR MINHA VAGA"

### Padrão aplicado em cada bloco

```tsx
<a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick} className="cursor-pointer w-full sm:w-auto">
  <Button size="lg" className="...">GARANTIR MINHA VAGA</Button>
</a>
<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline underline-offset-4 hover:opacity-80 transition-opacity">
  Prefiro conversar no WhatsApp
</a>
```

Nenhuma outra alteração visual ou funcional.

