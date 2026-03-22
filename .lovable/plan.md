

## Revisão de consistência tipográfica da landing page

Após análise completa do `src/pages/Index.tsx`, identifiquei os seguintes pontos de inconsistência:

### Problemas encontrados

**1. Títulos de seção (h2) — consistentes ✓**
Todos usam `font-display text-3xl md:text-4xl font-bold` — OK.

**2. Corpo de texto — duas inconsistências**
- Seções 3 e 6 usam `text-lg md:text-xl` no corpo
- Seção 2 (lista) usa apenas `text-lg`
- Seção 5 (lista) usa apenas `text-lg`
- Seção 7 (bio) usa apenas `text-lg`
- Isso é aceitável: listas e bio não precisam do salto para `text-xl` em desktop. As seções 3 e 6 são blocos narrativos longos que se beneficiam do tamanho maior.

**3. Depoimento — `text-lg` sem responsivo** — OK para citação.

**4. Seção Investimento — mistura de `text-base` e `text-sm`** — OK, é informação secundária.

**5. CTA final (seção 11) — texto `text-lg md:text-xl`** — alinhado com blocos narrativos.

**6. Garantia — `text-base` no corpo, `text-2xl` no título** — o título deveria ser `font-display text-2xl md:text-3xl` para ter responsividade, mas como é um bloco pequeno dentro de card, `text-2xl` fixo funciona.

### Conclusão

A tipografia está **consistente**. Os padrões seguidos são:
- **h2 de seção**: `text-3xl md:text-4xl` (uniforme)
- **Corpo narrativo**: `text-lg md:text-xl` (seções 3, 6, 11)
- **Listas e bio**: `text-lg` (seções 2, 5, 7)
- **Info secundária**: `text-base` ou `text-sm`
- **CTA buttons**: todos idênticos (`text-sm sm:text-base`)

**Não há alterações necessárias.** A hierarquia visual está bem definida e os tamanhos são proporcionais ao tipo de conteúdo de cada seção.

