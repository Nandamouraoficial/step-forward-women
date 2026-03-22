

## Reestruturação completa da Landing Page

### Visão geral
Reescrever `src/pages/Index.tsx` seguindo a nova ordem e conteúdo do briefing. A página passará de ~500 linhas para uma estrutura mais enxuta com tom direto e estratégico.

### Estrutura nova vs atual

| # | Seção (briefing) | Status |
|---|---|---|
| 1 | Hero | **Reescrever** — novo headline, subheadline, texto de apoio |
| 2 | Para quem é | **Reescrever** — novos bullets, remover "precisar estar em transição", adicionar parágrafo "Você não precisa estar em transição" |
| 3 | Custo de não decidir | **Nova seção** |
| 4 | O que acontece em 6 horas | **Reescrever** — novos 4 passos, novo fechamento |
| 5 | O que você leva | **Reescrever** — novos 5 bullets simples (sem título/desc) |
| 6 | Prova de consequência | **Nova seção** |
| 7 | Sobre a Fernanda | **Ajustar** — tom menos institucional, mais autoridade prática |
| 8 | Depoimento | **Manter** (já está específico com resultado) |
| 9 | Investimento | **Reescrever** — sem desconto, adicionar texto sobre grupo reduzido e vagas limitadas |
| 10 | Garantia | **Reescrever** — novo texto + "Sem burocracia" |
| 11 | CTA final | **Reescrever** — novo copy estratégico |

### Seções removidas
- "A realidade que você já percebeu" (linhas 132-166) — substituída por "Custo de não decidir"
- "Para quem é" duplicada (linhas 168-200) — unificada com "Esta imersão é para você se"
- Bloco "Formato" (linhas 373-401) — informações de data/hora já estão no hero; removido para não poluir

### Alterações técnicas

**Arquivo: `src/pages/Index.tsx`**

1. **Hero** — Substituir headline por "Você já construiu a carreira. / O risco agora é continuar no automático." Subheadline e texto de apoio conforme briefing. Botão "GARANTIR MINHA VAGA". Manter foto, data/hora/local e meta do hero.

2. **Para quem é** — Unificar numa única seção com os 5 novos bullets do briefing + parágrafo "Você não precisa estar em transição..."

3. **Custo de não decidir** — Nova seção com título em 2 linhas e blocos de texto conforme briefing

4. **O que acontece em 6 horas** — 4 cards reescritos. Fechamento: "Você não sai com mais conteúdo. / Sai com uma decisão tomada."

5. **O que você leva** — 5 bullets simples (sem formato título/desc)

6. **Prova de consequência** — Nova seção com título e texto do briefing

7. **Sobre a Fernanda** — Ajustar tom: menos "institucional", mais direto. Reforçar experiência real de transições e decisões.

8. **Investimento** — Ancoragem R$3k-5k, preço R$1.497, parcelamento, texto "grupo reduzido" e "vagas limitadas". Sem desconto.

9. **Garantia** — Texto simplificado + "Sem burocracia." como frase separada

10. **CTA final** — Novo copy: "Se você já percebeu que deixar a carreira no automático pode custar caro..." + 3 bullets + botão

### Ajustes de linguagem (transversal)
- Trocar todos os botões "CONFIRMAR MINHA VAGA" por "GARANTIR MINHA VAGA"
- Reduzir palavras abstratas; priorizar: decisão, movimento, direção, critério
- Remover menções a "reflexão", "clareza" isolada, "estrutura" genérica

### O que NÃO muda
- `SealBadge` flutuante (já implementado)
- `CountdownTimer` na seção de investimento
- Rodapé
- Tracking do LinkedIn (`lintrk`)
- URL do CTA (`CTA_URL`)

