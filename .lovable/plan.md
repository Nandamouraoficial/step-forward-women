

## Tornar o selo "Edição Exclusiva" flutuante

### O que muda
O selo passará de **repetido em cada seção** (11 instâncias) para **um único selo flutuante** com posição fixa na tela, sempre visível enquanto o usuário rola a página.

### Alterações

**1. `src/components/SealBadge.tsx`**
- Trocar de `absolute` para `fixed` positioning
- Posicionar no canto inferior esquerdo (`bottom-6 left-4`) para não cobrir conteúdo importante
- Adicionar `z-50` para ficar acima de tudo
- Manter a animação de entrada (spring), mas remover `whileInView` (usar apenas `initial`/`animate` pois será exibido uma vez)
- Adicionar leve animação contínua de "pulse" ou "bounce" sutil para dar sensação de flutuante

**2. `src/pages/Index.tsx`**
- Remover todas as 11 instâncias de `<SealBadge />` dentro das seções
- Adicionar **uma única** instância de `<SealBadge />` no nível raiz do componente (fora das seções), para que fique fixo na viewport

