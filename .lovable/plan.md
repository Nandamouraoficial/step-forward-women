

## Ajustes Finais — LP "O Próximo Passo"

### Mudanças pontuais em `src/pages/Index.tsx`

**1. HERO — Ajuste de texto (linhas 104-110)**
- Linha 105: trocar "Se você continua entregando bem, mas não está crescendo na mesma proporção, você já está em momento de decisão." por "Você continua entregando — mas não está crescendo na mesma proporção."
- Adicionar novo parágrafo logo abaixo: "O problema não é falta de capacidade. É uma decisão que ainda não foi estruturada."
- Manter o parágrafo do "O Próximo Passo" após esse novo bloco

**2. CTA — Padronizar todos os botões**
- Linha 65: mudar label default de `"QUERO DECIDIR MEU PRÓXIMO PASSO"` para `"GARANTIR MINHA VAGA"`
- Isso afeta automaticamente os CTAs das seções 6 (O Que É) e qualquer outro que use o default

**3. Transição antes do Case Juliana (linha 249-254)**
- Trocar a frase de fechamento do bloco Consequência/transição para Case: "E quando essa decisão é estruturada, o que muda não é só a clareza. É o que passa a acontecer na sua carreira."
- Inserir como novo bloco entre Consequência (seção 4) e Case Juliana (seção 5)

**4. Case Juliana — "Resultado:" → "A partir disso:" (linha 232)**
- Trocar `Resultado:` por `A partir disso:`

**5. Bloco Carla — Não existe na LP atual**
- A LP não tem um bloco/depoimento da Carla. Este item será ignorado (não adicionar blocos novos, conforme regra da estrutura).

**6. Investimento — Adicionar linha final (após linha 452)**
- Após "Menos que uma sessão — com impacto direto no seu próximo movimento.", adicionar: "Sem depender de timing externo ou validação do mercado."

**7. Limpeza — Verificar repetições do nome "Juliana" no case**
- No case (linhas 217-241), "Juliana" aparece na linha 219 ("Juliana já era diretora..."). Manter apenas a menção no bloco de assinatura (linha 243). Trocar linha 219 para remover o nome: "Já era diretora para América Latina, com mais de 20 anos..."

**8. Foto Juliana — Ajustar crop do busto pra cima**
- Na seção Prova Imediata (linha 123-130): aplicar container com aspect-ratio e `h-[140%] object-cover object-top` para cortar do busto pra cima
- Na seção Case Juliana (linha 204-211): mesmo tratamento

### O que NÃO muda
- Toda a lógica (scroll tracking, CTA click, barra fixa mobile, CountdownTimer, SealBadge)
- Ordem das seções (já está correta)
- Rodapé (já está "© O Próximo Passo")

