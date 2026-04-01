

## Compactar Hero para caber na primeira dobra (375px)

### Alterações em `src/pages/Index.tsx` (linhas 29–74)

1. **Reduzir padding superior**: `pt-8 md:pt-20 lg:pt-28` (de `pt-12`)
2. **Reduzir fonte da headline**: `text-lg sm:text-2xl md:text-4xl` (de `text-xl`), `mb-3` (de `mb-4`)
3. **Compactar subhead**: `mb-4` (de `mb-6`), `text-sm sm:text-lg` (de `text-base sm:text-lg`)
4. **Bloco de tensão**: trocar `leading-loose` por `leading-relaxed`, `space-y-1` (de `space-y-2`), `mb-4` (de `mb-6`), `text-xs sm:text-base` (de `text-sm sm:text-base`)
5. **Posicionamento**: `mb-4` (de `mb-6`), `text-sm sm:text-lg`
6. **Remover frase de remate** (linhas 53–55): "Não é conteúdo. É decisão." — eliminar completamente
7. **CTA**: `mb-5` (de `mb-8`), reduzir padding do botão para `py-5 sm:py-8`
8. **Meta-info**: `mt-5` (de `mt-8`)
9. **Padding inferior**: `pb-8 md:pb-20` (de `pb-10`)

Essas reduções acumuladas devem liberar ~120px de altura vertical no mobile, permitindo que o botão CTA fique visível sem scroll em 375×812.

