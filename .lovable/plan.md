

## Reduzir tamanho da headline do hero

### Alteração em `src/pages/Index.tsx` (linha 28)

**De:** `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (30px → 36px → 48px → 60px)

**Para:** `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (24px → 30px → 36px → 48px)

Reduz um nível em cada breakpoint, mantendo a proporção responsiva. O resultado fica mais elegante e menos "apelativo", sem perder destaque.

