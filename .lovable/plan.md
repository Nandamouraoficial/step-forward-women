

## Adicionar contador regressivo na secao de investimento

### O que sera feito
Um contador regressivo animado mostrando dias, horas, minutos e segundos ate 12 de abril de 2026, posicionado entre o preco e o texto "Nao e um evento...".

### Implementacao

**1. Criar componente `src/components/CountdownTimer.tsx`**

- Hook `useState` + `useEffect` com `setInterval` de 1 segundo
- Calcula diferenca entre `now` e `new Date('2026-04-12T09:00:00-03:00')` (inicio do evento, horario de Brasilia)
- Exibe 4 blocos: Dias, Horas, Minutos, Segundos
- Se a data ja passou, exibe mensagem "O evento ja comecou!"
- Estilo: blocos com fundo `bg-primary/10`, borda `border-primary/20`, numeros grandes em `text-primary`, labels pequenos em `text-muted-foreground`
- Animacao sutil de pulso nos segundos usando CSS transition

**2. Integrar no `src/pages/Index.tsx`**

- Importar `CountdownTimer`
- Inserir entre o bloco do preco (linha 273) e o paragrafo "Nao e um evento..." (linha 274)
- Layout responsivo: 4 colunas lado a lado em todas as telas

### Detalhes visuais
```text
+--------+  +--------+  +--------+  +--------+
|   42   |  |   07   |  |   23   |  |   15   |
|  dias  |  | horas  |  |  min   |  |  seg   |
+--------+  +--------+  +--------+  +--------+
```

Cada bloco tera cantos arredondados, padding generoso e os numeros com a fonte display (font-display) para manter a identidade visual da pagina.

