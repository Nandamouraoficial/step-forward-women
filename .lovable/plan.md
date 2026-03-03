

# Versao alternativa: Azul Marinho com Dourado

## Conceito
Criar uma paleta premium com fundo azul marinho escuro e textos/acentos em dourado fosco (matte gold), mantendo a estrutura e layout atuais.

## Paleta de cores

| Elemento | Cor atual | Nova cor |
|----------|-----------|----------|
| Background | Branco `0 0% 100%` | Azul marinho `220 40% 13%` |
| Foreground (texto) | Escuro `220 20% 15%` | Dourado claro `40 50% 85%` |
| Primary | Roxo `268 60% 35%` | Dourado fosco `38 45% 45%` |
| Primary foreground | Branco | Azul marinho escuro `220 40% 10%` |
| Secondary | Cinza claro `210 40% 96%` | Azul marinho mais claro `220 35% 18%` |
| Secondary foreground | Escuro | Dourado claro `40 50% 85%` |
| Muted | Cinza `220 14% 96%` | Azul marinho medio `220 35% 20%` |
| Muted foreground | Cinza medio | Dourado suave `40 30% 60%` |
| Accent | Teal `175 50% 40%` | Dourado brilhante `42 70% 55%` |
| Border | Cinza `220 13% 91%` | Azul marinho borda `220 30% 25%` |
| Hero gradient | Teal-azul-roxo | Azul marinho escuro para azul marinho medio `linear-gradient(135deg, hsl(220 40% 10%), hsl(220 35% 18%), hsl(220 40% 13%))` |
| CTA hover | Roxo escuro | Dourado mais escuro `38 45% 38%` |

## Arquivos alterados

### 1. `src/index.css`
- Substituir todas as variaveis CSS da paleta `:root` pela nova paleta azul marinho + dourado
- Manter a paleta `.dark` inalterada (ou ajustar se necessario)
- O hero-gradient passa a ser tons de azul marinho (sutil, elegante)

### 2. Nenhuma alteracao em componentes
- Como as cores sao todas via CSS custom properties, basta alterar o `index.css` para toda a pagina refletir a nova paleta

## Resultado esperado
- Fundo azul marinho escuro e elegante em toda a pagina
- Textos principais em tons de dourado claro/fosco
- Botoes CTA com fundo dourado fosco e texto azul marinho escuro
- Secoes alternadas entre tons de azul marinho (mais escuro / mais claro)
- Accent (checkmarks, destaques) em dourado mais brilhante
- Visual premium, sofisticado, tipo convite executivo

