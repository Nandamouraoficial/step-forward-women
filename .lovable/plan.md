

## Criar página `/obrigado` com evento Purchase do Meta Pixel

Replicar o design da página de agradecimento da Kiwify (screenshot já capturado) dentro do projeto, disparando `fbq('track', 'Purchase')` no carregamento.

### Visual baseado no screenshot

- Fundo escuro (alinhado com a LP)
- Título "Sua vaga está confirmada!" com subtítulo motivacional
- 3 cards informativos: Data (10 de maio), Horário (9h às 15h), Formato (Presencial em SP)
- Bloco de orientações / próximos passos numerados
- Rodapé com assinatura Fernanda Moura

### Alterações

**1. Criar `src/pages/Obrigado.tsx`**
- Layout fiel ao screenshot com tipografia e cores da LP
- `useEffect` no mount dispara:
  - `fbq('track', 'Purchase', { currency: 'BRL', value: 0 })`
  - `lintrk('track', { conversion_id: 19394961 })` (LinkedIn)

**2. Atualizar `src/App.tsx`**
- Adicionar rota `/obrigado`

### Ação manual após publicar

Na Kiwify, configurar redirecionamento pós-compra para:
`https://step-forward-women.lovable.app/obrigado`

