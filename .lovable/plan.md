

## Alterações no Hero e Segunda Dobra

### 1. Hero (seção 1, linhas 91-120) — Reescrever completamente

**Novo conteúdo:**
- Título curto (max 2 linhas): "Você já sabe que precisa mudar. Mas ainda não decidiu como."
- Corpo: 3 parágrafos curtos conforme briefing
- Info do evento: "11 de abril | 9h às 15h | Online ao vivo" + "Grupo reduzido — até 15 executivas"
- CTA: label "QUERO DECIDIR MEU PRÓXIMO PASSO" (full width mobile)

**Ajustes de layout mobile:**
- Reduzir padding vertical: `pt-6 md:pt-24 pb-6 md:pb-24`
- Título: `text-lg sm:text-3xl` para caber em 2 linhas mobile
- Parágrafos com `mb-2` em vez de `mb-4` para compactar
- CTA com `w-full` sempre no mobile (já é, confirmar)
- Microcopy removido, substituído pelas infos do evento

### 2. Segunda dobra (seção 3 — Diagnóstico, linhas 146-168) — Substituir conteúdo

Trocar o bloco "Se você:" por o novo texto:
- Título: "O problema não é decidir errado."
- Subtítulo: "É saber que precisa mudar — e continuar sem um plano concreto."
- Corpo com 3 linhas de consequência (oportunidades, desgaste, decisões adiadas)
- Fechamento: "Essa imersão existe para evitar esse ponto."

A seção 4 (Consequência) permanece — mas como o conteúdo da nova segunda dobra absorve parte do diagnóstico + consequência, pode haver sobreposição. Vou manter a seção 4 intacta conforme regra de estrutura.

### Arquivos editados
- `src/pages/Index.tsx` — Hero (linhas 91-120) e Diagnóstico (linhas 146-168)

