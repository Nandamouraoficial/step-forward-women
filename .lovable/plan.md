

## Reposicionar depoimento existente e adicionar novo depoimento

### Alterações em `src/pages/Index.tsx`

**1. Mover depoimento Carla Negrão (linhas 311-339) para após a seção "Custo de não decidir" (após linha 149)**
- Recortar o bloco inteiro da seção 8 (depoimento + divisor que o segue)
- Inserir entre o divisor da seção 3 e a seção 4 ("O que acontece em 6 horas")
- Manter texto e estilo visual idênticos

**2. Adicionar novo depoimento Juliana Zobaran após a seção "Sobre a Fernanda" (após linha 309)**
- Usar exatamente o mesmo layout do depoimento da Carla: `bg-secondary`, card com `bg-background border border-border rounded-2xl`, ícone `Quote`, mesmo espaçamento
- Texto, nome e cargo conforme fornecidos
- Adicionar divisor visual antes da seção Investimento

**Ordem final das seções:**
1. Hero → 2. Para quem é → 3. Custo de não decidir → **4. Depoimento Carla** → 5. O que acontece em 6h → 6. O que você leva → 7. Prova de consequência → 8. Sobre a Fernanda → **9. Depoimento Juliana** → 10. Investimento → 11. Garantia → 12. CTA final

