

## Carimbo redondo com destaque no canto superior esquerdo

### Alteracao

**Arquivo:** `src/pages/Index.tsx`

- Transformar o carimbo retangular atual em um carimbo circular
- Posicionar no canto superior esquerdo da secao hero com `absolute`
- Estilos do carimbo redondo:
  - Formato circular: `w-32 h-32 md:w-40 md:h-40 rounded-full`
  - Borda dupla: `border-[3px] border-accent` com um `ring` interno para efeito de borda dupla de carimbo
  - Rotacao: `-rotate-12` para parecer carimbo carimbado de verdade
  - Texto centralizado em circunferencia usando CSS (`flex items-center justify-center text-center`)
  - Texto em uppercase, bold, cor accent, tamanho pequeno (`text-xs font-bold tracking-wider`)
  - Sombra sutil ou glow dourado para destaque (`shadow-lg shadow-accent/20`)
- Remover o carimbo do fluxo do texto (tirar do `div` atual) e posicionar com `absolute top-6 left-6 md:top-10 md:left-10`
- Adicionar `relative` ao container pai se necessario

### Resultado visual

```text
  ┌──────────────────────────
  │  ╭───────────╮
  │  │  EDICAO   │
  │  │ EXCLUSIVA │
  │  │   PARA    │
  │  │ MULHERES  │
  │  ╰───────────╯
  │        (circular, inclinado, dourado)
  │
  │    IMERSAO O PROXIMO PASSO...
```

O carimbo fica flutuando no canto superior esquerdo do hero, com destaque visual forte.

