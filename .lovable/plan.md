

## Atualizar copy completa da landing page

### Resumo
Reescrever os textos de todas as 12 seções do `src/pages/Index.tsx` para alinhar com o novo briefing, mantendo a estrutura HTML/CSS, lógica de botões e eventos de pixel intactos.

### Alterações detalhadas em `src/pages/Index.tsx`

**HERO (seção 1)**
- Headline: "Sabe o que quer." / "Mas ainda não estruturou como chegar lá."
- Subheadline: "Essa imersão existe para transformar intenção em decisão — com método."
- Frase de posicionamento: "Não é uma imersão para refletir." / "É para decidir."
- Manter badge, CTA, frase abaixo do CTA e metadados (data/hora) como estão

**PARA QUEM É (seção 2)**
- Atualizar último item da lista de "Não quer mais desperdiçar tempo..." para "Não quer mais desperdiçar tempo e dinheiro em cursos e movimentos sem direção"
- Callout: manter "Você não precisa estar em transição." e ajustar segunda frase para "Mas se já sabe que quer mudança, o melhor momento para estruturar o próximo passo é antes que algo dê errado."

**CUSTO DE NÃO DECIDIR (seção 3)**
- Simplificar corpo: remover "De adoecimento silencioso", "Quando a empresa muda / chefe muda / avaliação vem ruim / mercado pedir outra leitura"
- Novo corpo conforme briefing: desgaste, oportunidades perdidas, decisões adiadas, investimento que não muda o que importa
- Fechar com "Muita gente só para quando algo dá errado. Essa imersão existe para evitar esse ponto."

**DEPOIMENTO CARLA (seção 4) — prova social**
- Trocar título para "Executivas que estavam paradas há meses tomaram decisões em uma única sessão."
- Encurtar depoimento para: "Saí da paralisia da executiva bem-sucedida à beira do burnout e abri minha consultoria."
- Manter nome e cargo

**O QUE ACONTECE EM 6H (seção 5)**
- Ajustar título para "Você sai com clareza sobre o que está travando sua carreira hoje."
- Atualizar os 4 cards conforme briefing
- Manter bloco "Você não sai com mais conteúdo. Sai com uma decisão tomada." e CTA

**O QUE VOCÊ LEVA (seção 6)**
- Atualizar lista para os 5 itens do briefing (decisão clara, diagnóstico, mapa, plano 30 dias, clareza sobre o que parar)

**PROVA DE CONSEQUÊNCIA / REENQUADRAMENTO (seção 7)**
- Simplificar corpo: remover "Pode fazer mais um curso" e "Nem posicionamento / Nem movimento"
- Novo texto conforme briefing: "Você pode continuar estudando. Pode esperar a próxima oportunidade. Mas isso não garante direção."
- Fechar com "O que muda uma carreira sênior não é consumir mais. É decidir melhor."

**SOBRE A FERNANDA (seção 8)**
- Simplificar bio conforme briefing: 26 anos, empresas, liderança/diretoria/C-level, 15 países, 23 transições
- Fechar com "Não fala de carreira de fora. Tomou essas decisões de dentro."

**DEPOIMENTO JULIANA (seção 9)**
- Mesmo padrão da seção 4: título de prova social
- Encurtar depoimento para: "Ganhei estrutura, posicionamento e passei a atrair as oportunidades certas."
- Manter nome: "Juliana Zobaran — Diretora para América Latina"

**INVESTIMENTO (seção 10)**
- Ajustar texto de contexto: "Uma sessão individual... pode custar entre R$ 3.000 e R$ 10.000."
- Subtexto: "Aqui, você participa de um dia inteiro de decisão estratégica, com aplicação direta no seu contexto"
- Adicionar "Menos que uma sessão — com impacto direto no seu próximo movimento."
- Manter valores, countdown e CTA

**GARANTIA (seção 11)**
- Simplificar: "Se você não sair com uma decisão clara e um plano estruturado, eu devolvo 100%." + "Sem burocracia."

**CTA FINAL (seção 12)**
- Texto: "Se você já percebeu que continuar sem direção tem custo, essa é a sala para decidir com método."
- Substituir bullets por: "Não para pensar. Para decidir."
- Manter CTA e badge de escassez

### O que NÃO muda
- `handleCTAClick` e eventos Lead/InitiateCheckout
- Texto dos botões ("Quero estruturar meu próximo passo")
- Estrutura HTML, classes CSS, componentes
- Pixel tracking, countdown, seal badge

