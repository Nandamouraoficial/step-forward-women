

## Esconder selo em telas abaixo de 400px

### Alteração em `src/components/SealBadge.tsx`
- Adicionar `hidden min-[400px]:flex` ao className do container principal, substituindo o `flex` atual
- Isso usa um breakpoint arbitrário do Tailwind para esconder o selo em telas < 400px e exibi-lo a partir de 400px

