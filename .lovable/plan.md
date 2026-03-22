

## Trocar logo do Amigos do Bem para apenas o ícone circular

### Problema
A imagem atual (`amigos-do-bem.png`) é uma captura de tela com fundo escuro. O usuário quer apenas o símbolo circular (a "bolinha") da logo.

### Solução

**1. Salvar nova imagem**
- Buscar o favicon/ícone circular do site amigosdobem.org (geralmente disponível como favicon ou ícone de redes sociais) e salvar como `public/images/amigos-do-bem-icon.png`
- Alternativa: o usuário pode fazer upload apenas da bolinha da logo

**2. `src/pages/Index.tsx`**
- Trocar o `src` da imagem de `/images/amigos-do-bem.png` para `/images/amigos-do-bem-icon.png`
- Adicionar `rounded-full` à classe da imagem para garantir formato circular

### Pergunta necessária
Preciso que você faça upload apenas da bolinha/ícone circular da logo do Amigos do Bem, pois a imagem atual inclui o fundo escuro. Você tem essa imagem separada?

