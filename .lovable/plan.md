

## Trocar foto do Hero

**Arquivo:** `src/pages/Index.tsx`

1. Copiar `user-uploads://foto_terno.jpeg` para `public/images/hero-terno-branco.png` (substituindo a imagem atual)
2. Como o caminho no código já aponta para `/images/hero-terno-branco.png`, nenhuma alteração de código é necessária — apenas a substituição do arquivo.

Alternativamente, copiar como `public/images/foto_terno.jpeg` e atualizar o `src` da tag `<img>` no hero de `/images/hero-terno-branco.png` para `/images/foto_terno.jpeg`.

Vou usar a segunda abordagem para preservar o arquivo original caso necessário.

