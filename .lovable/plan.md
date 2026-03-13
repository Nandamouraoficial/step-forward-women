

## Implementar alterações do plano: Carimbo redondo com posicionamento absoluto no hero

### Alteração única em `src/pages/Index.tsx`

**O que muda:**
- Mover o selo circular de `fixed` (flutuando na tela toda) para `absolute` dentro da seção hero
- Remover o `<div>` do selo da posição atual (linha 18-22, fora de qualquer seção)
- Inserir o selo dentro do `<section>` do hero, como filho direto, com posicionamento `absolute`
- A seção hero já tem `relative`, então basta inserir o selo lá dentro
- Ajustar classes: trocar `fixed` por `absolute`, remover `z-50`, remover `backdrop-blur-sm`, manter o resto dos estilos circulares
- Remover o `pt-32 sm:pt-36` extra do container interno do hero (que existia para compensar o selo fixo) e voltar para padding normal

**Classes do selo (dentro do hero):**
```
absolute top-6 left-4 sm:top-8 sm:left-6 md:top-10 md:left-10 z-10
w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
rounded-full border-[3px] border-accent ring-2 ring-accent/40 ring-offset-2 ring-offset-transparent
flex items-center justify-center text-center -rotate-12
shadow-lg shadow-accent/20 bg-background/90
```

