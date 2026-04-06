

## Foto da Fernanda na Lateral do Hero

### O que muda

O Hero atual é centralizado, apenas texto. A foto será adicionada ao lado direito, criando um layout de 2 colunas no desktop (texto à esquerda, foto à direita) e empilhado no mobile (texto em cima, foto embaixo — ou foto oculta no mobile para manter o CTA above-the-fold).

### Implementação em `src/pages/Index.tsx`

1. **Copiar a imagem** para `src/assets/fernanda-hero.png`
2. **Importar** no topo do arquivo
3. **Reestruturar o Hero** (linhas 96-119):
   - Container passa de `max-w-2xl mx-auto text-center` para `flex flex-col lg:flex-row items-center gap-8 lg:gap-12`
   - Texto fica à esquerda com `text-left` no desktop, `text-center` no mobile
   - Foto à direita em container com crop do busto pra cima usando `object-cover object-top`, com bordas arredondadas e sombra
   - No mobile: foto aparece menor abaixo do texto, ou escondida (`hidden lg:block`) para garantir CTA na primeira dobra

### O que NÃO muda
- Copy do Hero (título, subtítulo, parágrafos)
- CTA e microcopy
- Toda lógica existente (scroll tracking, barra fixa mobile)
- Demais seções

