

## Reescrita da Primeira Dobra — Foco em Retenção

### O que muda

Reescrever **apenas a seção Hero** (linhas 90-130 de `src/pages/Index.tsx`). Nenhuma outra seção é alterada.

### Novo conteúdo do Hero

Estrutura em 3 blocos curtos (max 2 linhas cada), com hierarquia visual clara:

1. **Tensão** (fonte maior, destaque): "Se você sente que está pronta para o próximo nível, mas não está avançando — o problema não é esforço."
2. **Diagnóstico** (fonte média): "É uma decisão que ainda não foi estruturada."
3. **Promessa** (destaque secundário): "Em 6 horas, você sai com clareza total sobre o seu próximo movimento — e um plano de 30 dias para executar."
4. Info do evento + CTA

### Ajustes técnicos para above-the-fold

- Reduzir padding top mobile: `pt-4` (era `pt-6`)
- Reduzir `mb` entre parágrafos para `mb-1`
- Aumentar fonte da primeira frase: `text-xl sm:text-3xl` (destaque principal)
- Segunda frase com `text-lg sm:text-2xl` e cor accent
- Terceira frase com `text-base sm:text-xl`
- Remover os 4 parágrafos longos atuais (linhas 103-118) — substituir pelos 3 blocos curtos
- Manter espaçamento generoso antes do botão para destaque

### Hierarquia visual

```text
[Frase 1 - grande, bold]          ← tensão
[Frase 2 - média, accent]         ← diagnóstico
[Frase 3 - normal]                ← promessa
[info evento - small, muted]
[===== BOTÃO VERDE =====]         ← above the fold
```

### Performance

As imagens já têm lazy-load e o Hero é texto puro — sem mudanças de performance necessárias. O LCP já está otimizado (Hero é texto + CSS gradient).

### Arquivo editado
- `src/pages/Index.tsx` — apenas a seção Hero (linhas 90-130)

