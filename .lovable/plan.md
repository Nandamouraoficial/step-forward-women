

## Reestruturação Completa da LP — 7 Seções

### Situação atual
A página tem 18 seções. O briefing pede apenas **7 blocos** com ordem específica, eliminando seções intermediárias (Case longo, Transformação, Contraponto, Para Quem É, Autoridade, Pré-Investimento, etc).

### Nova ordem da página

```text
1. Hero + CTA (manter atual, já alinhado)
2. Bloco de decisão (atual seção 3 — Diagnóstico, manter)
3. Prova social — 2 depoimentos CURTOS (novo bloco)
4. O que você leva — lista simplificada (novo conteúdo)
5. Investimento + CTA (conteúdo atualizado)
6. Garantia (conteúdo atualizado)
7. Fechamento + CTA (conteúdo atualizado)
   Rodapé + Barra fixa mobile (manter)
```

### O que será feito em `src/pages/Index.tsx`

**1. Remover seções 4 a 12 e 14-15** (Consequência, Transição, Case Juliana longo, Fechamento Case, Depoimento Carla longo, O Que É, Transformação, Contraponto, Para Quem É, Autoridade, Pré-Investimento) — linhas 188-476 e 480-488.

**2. Novo bloco "Prova Social"** (após Diagnóstico)
- Carla: "Saí da paralisia da executiva bem-sucedida à beira do burnout e abri minha consultoria." — Carla Negrão, Ex-executiva de multinacional | Fundadora, CN Food Consulting
- Juliana: "Ganhei estrutura, posicionamento e passei a atrair as oportunidades certas." — Juliana Zobaran, Diretora para América Latina
- Sem texto longo, sem foto. Apenas quote + nome + cargo.

**3. Novo bloco "O que você leva"**
- Título: "Ao final da imersão, você leva:"
- 5 itens: decisão clara, diagnóstico do que trava, caminhos com análise estratégica, plano de 30 dias, clareza sobre o que parar de fazer

**4. Investimento atualizado**
- Ancoragem: "Uma sessão individual com uma ex-diretora executiva pode custar entre R$ 3.000 e R$ 10.000."
- Corpo: "Aqui, você participa de um dia inteiro de decisão estratégica:"
- Preço: 12x R$ 139,90 / R$ 1.497 à vista
- Fechamento: "Menos que uma sessão — com impacto direto no seu próximo movimento."
- CTA logo abaixo

**5. Garantia atualizada**
- "Se você não sair com uma decisão clara e um plano estruturado, eu devolvo 100%."
- "Sem burocracia."

**6. Fechamento atualizado**
- "Se você já percebeu que continuar sem direção tem custo, essa é a sala para decidir com método."
- "Não para pensar. Para decidir."
- CTA: "QUERO DECIDIR MEU PRÓXIMO PASSO"

**7. Ajustes técnicos mobile**
- Espaçamento vertical compacto (reduzir py em seções)
- Fonte 16-18px no mobile (já em uso com text-base/text-lg)
- CTA visível sem scroll (já garantido no Hero)
- Imagem da Juliana removida (não há mais case longo)
- Remover import de `julianaPhoto` já que não será mais usado

### Arquivo editado
- `src/pages/Index.tsx` — reescrita completa do corpo da página

