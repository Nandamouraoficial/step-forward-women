

## Ajustes finais de copy, microestrutura e divisores visuais

**Arquivo:** `src/pages/Index.tsx`

### 1. Hero — quebra de leitura (linha 28)
Quebrar a frase em três linhas com `<br />`:
```
Existe um momento na carreira<br />
em que continuar crescendo<br />
já não resolve o desalinhamento que você sente.
```

### 2. Bloco "Esta imersão é para você se" (linha 109)
"não resolve mais" → "já não resolve"

### 3. Bloco "6 horas" — item 04 (linha 203)
Adicionar "aplicada" ao final: "...e IA aplicada."

### 4. Bloco "Sobre a condução" (linha 262)
Substituir "30 anos de carreira corporativa. 23 transições profissionais." por "23 anos de carreira corporativa." + quebra + "23 transições profissionais."

### 5. Bloco "Formato" (linha 312)
Adicionar " — com profundidade e confidencialidade." ao final da frase.

### 6. Botões CTA — sombra reforçada
Em todas as instâncias de Button, trocar `shadow-lg` por `shadow-xl shadow-primary/20` para maior destaque sem alterar cor.

### 7. Divisores visuais decorativos
Criar um componente inline `SectionDivider` com uma linha horizontal centralizada e um caractere `✦` no centro, com opacidade baixa. Inserir em três pontos:
- Após "Esta imersão é para você se" (após linha 119)
- Após "O que acontece em 6 horas" (após linha 236)
- Antes de "Investimento" (antes da linha 340)

