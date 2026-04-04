

## Reestruturação da Landing Page — Nova Ordem e Copy

### O que muda (atual → novo)

**Mudanças estruturais:**

1. **Nova seção 2 — "Prova Imediata"**: Quote curta da Juliana com foto (crop busto pra cima) logo após o Hero. Substitui a seção 9 atual (Prova Secundária).
2. **Seção 9 (Prova Secundária) removida** — já virou a seção 2.
3. **Diagnóstico**: Copy simplificado ("entrega bem, mas não avança" em vez de "entregando resultado, mas sem avanço proporcional").
4. **Consequência**: Reestruturado com "Aparece:" como introdução + lista.
5. **Case Juliana**: Texto encurtado — remove parágrafo sobre "posicionamento estruturado", simplifica linguagem, muda cargo para "Diretora para América Latina".
6. **Transformação**: Remove item "vive a sensação de estar 'quase lá'" do Antes; "executa com clareza e direção" → "executa com direção".
7. **Ordem final**: CTA Final vem antes da Garantia (atualmente Garantia vem antes do Fechamento).
8. **Rodapé**: Simplificado para apenas "© O Próximo Passo".

### Ordem final das seções

```text
1.  Hero
2.  Prova Imediata (NOVO — foto Juliana + quote curta)
3.  Diagnóstico
4.  Consequência
5.  Case Juliana (encurtado)
6.  O Que É
7.  Transformação
8.  Contraponto
9.  Para Quem É
10. Entrega Final
11. Autoridade (Fernanda)
12. Investimento + CTA Final
13. Garantia
14. Fechamento + CTA Final
    Rodapé
```

### Implementação

Editar apenas `src/pages/Index.tsx`:

- Inserir bloco "Prova Imediata" após o Hero (foto da Juliana com `object-top` crop do busto, ao lado da quote curta em layout 2 colunas no desktop)
- Atualizar copy do Diagnóstico, Consequência, Case Juliana, Transformação conforme o briefing
- Reordenar: mover Garantia para depois do bloco de Investimento/CTA
- Remover seção 9 (Prova Secundária standalone)
- Simplificar rodapé para "© O Próximo Passo"
- Manter toda lógica existente (scroll tracking, CTA click, barra fixa mobile, CountdownTimer, SealBadge)

