

# Reposicionar texto do bloco final na altura dos ombros

## Contexto
Na secao final (com a foto `final-equipe.png` de fundo), o texto e botao estao centralizados verticalmente. O objetivo e descer o conteudo para ficar na altura dos ombros da modelo na foto.

## Mudanca
- Arquivo: `src/pages/Index.tsx`, bloco final (aproximadamente linhas 241-262)
- Alterar o container relativo para usar `flex items-end` em vez de centralizar verticalmente, e adicionar padding inferior para posicionar o texto na altura dos ombros
- Trocar `text-center` por um layout que empurre o conteudo para a parte inferior da secao, usando `pt-40 md:pt-56 pb-10` em vez de `py-20 md:py-28` para criar mais espaco acima e menos abaixo

## Detalhe tecnico
- Na `<section>` do bloco final: ajustar o padding para `pt-48 md:pt-64 pb-12` para empurrar o conteudo para baixo
- No `<div>` relativo interno: adicionar `flex flex-col justify-end min-h-[400px]` para garantir que o conteudo fique na parte inferior da secao, alinhado com os ombros da modelo

