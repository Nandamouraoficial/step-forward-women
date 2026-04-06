

## 6 CTAs com frases diferentes distribuídos pela página

### Distribuição

| Local | Frase |
|-------|-------|
| **1. Hero** (linha 120) | QUERO DECIDIR MEU PRÓXIMO PASSO |
| **2. Após "O que você leva"** (linha 292) | DECIDIR AGORA, NÃO AMANHÃ |
| **3. Após Investimento** (linha 471) | GARANTIR MINHA VAGA |
| **4. Fechamento** (linha 532) | CHEGA DE ESPERAR |
| **5. Barra fixa mobile** (linha 550) | ESSE É MEU MOMENTO |
| **6. Novo CTA** — adicionar após seção Garantia (entre linhas ~510-525) | QUERO PARAR DE ADIAR |

### Implementação em `src/pages/Index.tsx`

1. Atualizar o `label` de cada `<CTABlock>` existente com a frase correspondente
2. Adicionar um novo `<CTABlock label="QUERO PARAR DE ADIAR" />` após a seção de Garantia
3. Atualizar o texto do botão na barra fixa mobile para "ESSE É MEU MOMENTO"
4. Manter microcopy "Turma limitada — encerramento em 10/04" nos CTAs de Investimento e Fechamento
5. Manter microcopy "Em 6 horas. Com método." no Hero

### O que NÃO muda
- Lógica de tracking, URL de checkout, estilos dos botões, layout das seções

