

## Ajustes finais pendentes

A maioria dos 16 itens já foi aplicada em edições anteriores. Restam 5 alterações:

### 1. Hero — Ajuste de imagem (item 3)
**Arquivo:** `src/pages/Index.tsx` (linha 76)
Alterar `object-[center_20%]` para `object-[center_15%]` e reduzir `max-h-[440px]` para `max-h-[400px]` para cortar mais da mesa e focar no enquadramento waist-up.

### 2. Novo bloco abaixo do Hero (item 4)
**Arquivo:** `src/pages/Index.tsx` (entre linhas 97-98)
Inserir nova seção com título "Esta imersão é para você se:" e 4 bullets com ícone Check, estilo `bg-secondary`, mesmo padrão visual das listas existentes.

### 3. "Para quem é" — frase de fechamento (item 8)
**Arquivo:** `src/pages/Index.tsx` (após linha 163)
Adicionar frase em destaque: "Executivas que sabem que já chegou a hora de decidir — mas não querem fazer isso sozinhas."

### 4. Bloco de autoridade — copy (item 10)
**Arquivo:** `src/pages/Index.tsx` (linha 246)
Substituir "Quem conduz essa imersão não é uma consultora de carreira." por "Quem conduz essa imersão não fala de carreira de fora."

### 5. Botões CTA — aumento de padding (item 15)
**Arquivo:** `src/pages/Index.tsx` (todas as instâncias de Button)
Aumentar padding de `px-8 sm:px-12 py-6 sm:py-7` para `px-10 sm:px-14 py-7 sm:py-8` em todos os botões CTA.

