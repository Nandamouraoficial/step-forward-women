

## Ajustes Finais — LP Versão Definitiva

### O que já está correto (não mexer)
Hero, Prova Imediata, Diagnóstico, Consequência, O Que É, Transformação, Contraponto, Para Quem É, Autoridade, Investimento, Garantia, Fechamento, Rodapé — todos já correspondem ao briefing.

### 5 mudanças necessárias em `src/pages/Index.tsx`

**1. Transição (seção 5) — Extrair do Case e tornar seção independente**
Atualmente a frase "E quando essa decisão é estruturada..." está dentro do bloco do Case (linhas 254-259). Precisa virar uma seção standalone ANTES do Case Juliana, não depois.

**2. Case Juliana — Remover transição interna + Adicionar fechamento separado (seção 7)**
Remover o bloco "E quando essa decisão..." de dentro do Case. Após o Case, adicionar nova seção 7 com: "Executivas não travam por falta de capacidade. Travam porque continuam operando sem uma decisão estruturada."

**3. Depoimento da Carla — Nova seção 8 (INSERIR)**
Após o fechamento do Case, adicionar bloco completo da Carla com: introdução ("E quando a decisão sai do papel..."), quote em itálico, assinatura (Carla Negrão — Ex-executiva | Fundadora, CN Food Consulting), e frase de fechamento ("Decisão não muda só clareza. Muda o que você faz com ela."). Estilo visual similar ao bloco de Prova Imediata (quote com ícone, sem foto).

**4. Entrega Final — Ajustar título**
Trocar "Você sai com:" por "Ao final da imersão, você sai com:"

**5. Pré-Investimento — Adicionar frase de transição (seção 15)**
Antes da seção de Investimento, inserir bloco curto: "Você pode continuar analisando. Ou pode decidir."

### Ordem final resultante
```text
1.  Hero
2.  Prova Imediata (Juliana)
3.  Diagnóstico
4.  Consequência
5.  Transição (standalone)
6.  Case Juliana (sem transição interna)
7.  Fechamento do Case ("Executivas não travam...")
8.  Depoimento Carla (NOVO)
9.  O Que É
10. Transformação
11. Contraponto
12. Para Quem É
13. Entrega Final (título ajustado)
14. Autoridade
15. Pré-Investimento (NOVO — frase curta)
16. Investimento + CTA
17. Garantia
18. Fechamento + CTA
    Rodapé
```

### Arquivo editado
Apenas `src/pages/Index.tsx`. Toda lógica existente (scroll tracking, CTA, barra fixa, CountdownTimer, SealBadge) permanece intacta.

