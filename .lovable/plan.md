

## Corrigir texto invisivel nas secoes escuras

### Problema
Ao trocar a paleta para azul marinho, a variavel `text-primary-foreground` ficou com cor escura (azul marinho `220 40% 10%`), que e a cor correta para texto dentro dos botoes dourados, mas e invisivel quando usada como cor de texto sobre fundos escuros (hero, formato, bloco final, rodape).

### Solucao
Trocar `text-primary-foreground` por `text-foreground` (dourado claro) em todas as secoes com fundo escuro. Manter `text-primary-foreground` apenas nos botoes CTA (onde o fundo e dourado).

### Alteracoes no arquivo `src/pages/Index.tsx`

**1. Hero - div de texto (linha 17)**
- De: `text-primary-foreground` 
- Para: `text-foreground`

**2. Hero - texto abaixo da foto (linha 63)**
- De: `text-primary-foreground`
- Para: `text-foreground`

**3. Formato - div do conteudo (linha 237)**
- De: `text-primary-foreground`
- Para: `text-foreground`

**4. Bloco Final - overlay (linha 297)**
- De: `bg-foreground/70` (agora dourado semi-transparente)
- Para: `bg-background/80` (azul marinho escuro semi-transparente, correto)

**5. Bloco Final - div de texto (linha 298)**
- De: `text-primary-foreground`
- Para: `text-foreground`

**6. Rodape - div de texto (linha 321)**
- De: `text-primary-foreground`
- Para: `text-foreground`

### Resultado
- Todos os textos sobre fundo escuro ficam em dourado claro, leiveis
- Botoes CTA mantem texto escuro sobre fundo dourado (correto)
- Overlay do bloco final volta a ser escuro em vez de dourado

