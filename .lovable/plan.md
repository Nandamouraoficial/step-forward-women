

# Alteracoes na Landing Page

## Mudancas

### 1. Alterar 30 vagas para 15 vagas
- Hero section (linha 50): "30 vagas" -> "15 vagas"
- Bloco Formato (linha 229): "30 mulheres" -> "15 mulheres"

### 2. Mover frase + botao para abaixo da foto no Hero
Atualmente a frase "Se voce ja decidiu internamente..." e o botao "OCUPAR MEU PROXIMO LUGAR" estao no bloco final (com foto de equipe). A ideia e adicionar essa mesma frase e botao logo abaixo da imagem hero (abaixo do queixo da Fernanda), dentro da hero section, posicionados sob a foto.

- Adicionar abaixo da `<img>` do hero (apos linha 61) um bloco com:
  - Frase: "Se voce ja decidiu internamente, essa e a sala onde isso ganha estrutura."
  - Botao CTA: "OCUPAR MEU LUGAR"
- O bloco final com a foto de equipe permanece como esta (com a mesma frase e botao duplicados la)

### Detalhes tecnicos
- Arquivo: `src/pages/Index.tsx`
- 3 edicoes pontuais no mesmo arquivo

