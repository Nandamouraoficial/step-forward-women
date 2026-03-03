

## Transformar "Edicao Exclusiva para Mulheres" em carimbo/stamp

### O que sera feito
Transformar o texto "Edicao Exclusiva para Mulheres" no hero em um visual de carimbo (stamp), com borda arredondada, rotacao leve e efeito de tinta/textura.

### Alteracao

**Arquivo:** `src/pages/Index.tsx`

- Substituir o `<p>` atual (linha 24-26) por um elemento estilizado como carimbo
- Estilos:
  - Borda dupla (`border-2` ou `border-double`) em cor accent/primary
  - Cantos arredondados (`rounded-md`)
  - Rotacao sutil negativa (`-rotate-3` ou `-rotate-6`) para parecer carimbo real
  - Padding interno (`px-4 py-1`)
  - Texto uppercase com tracking largo (ja existente)
  - Cor accent para borda e texto
  - `inline-block` e `w-auto` para o carimbo envolver apenas o texto
  - Opacidade leve (`opacity-90`) para simular tinta de carimbo

### Resultado visual

```text
  ╔══════════════════════════════════╗
  ║  EDICAO EXCLUSIVA PARA MULHERES ║
  ╚══════════════════════════════════╝
        (levemente inclinado)
```

O efeito e puramente CSS, sem imagens externas.

