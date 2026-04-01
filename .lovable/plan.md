

## Reescrever Hero para retenção nos primeiros 3–5 segundos

### Contexto
Dados do Clarity mostram tempo médio de 4s sem scroll. O hero atual tem muitos blocos de texto e não cabe na primeira dobra no mobile. A mudança é restrita às linhas 24–84 (seção Hero), sem tocar no resto da página.

### Alteração em `src/pages/Index.tsx` (linhas 29–83)

Substituir todo o conteúdo interno do hero por uma versão mais enxuta, escaneável e com tensão:

**Novo conteúdo do Hero:**

1. **Headline** (h1): "Você já percebeu que continuar fazendo mais do mesmo não vai te levar para o próximo nível."
   - Tamanho: `text-xl sm:text-2xl md:text-4xl lg:text-[2.75rem]` (ligeiramente menor para caber em mobile)
   - `font-black`, sem `text-balance`, quebras naturais

2. **Subhead** (p): "Mas ainda não estruturou qual é, de fato, o próximo movimento — e está adiando uma decisão que já sabe que precisa tomar."
   - `text-base sm:text-lg md:text-xl`, `font-light`

3. **Bloco de tensão** (lista visual com frases curtas, espaçamento generoso):
   - "Em carreiras seniores, o custo não aparece de uma vez."
   - "Ele aparece em oportunidades que não vêm."
   - "Em desgaste que aumenta."
   - "Em decisões adiadas."
   - Estilizado como linhas soltas com `leading-loose`, `text-sm sm:text-base`, opacidade reduzida para criar hierarquia

4. **Posicionamento** (p, bold):
   - "Essa imersão existe para uma coisa:"
   - "Te fazer sair com uma decisão estruturada sobre o seu próximo passo."
   - Segunda frase em `text-accent font-bold`

5. **Frase de remate**: "Não é conteúdo. É decisão." — `font-semibold`, destaque visual

6. **Botão CTA**: Texto alterado para "QUERO DECIDIR MEU PRÓXIMO PASSO"
   - Mantém `bg-accent`, mesmas classes de tamanho/sombra
   - Subtexto abaixo: "Acesso direto à inscrição" (substituindo o texto atual)
   - Mantém link para WhatsApp e tracking de pixels

7. **Remover**: badge "Grupo fechado para até 15 executivas", link de checkout secundário, frase italic final, foto da Fernanda — tudo isso ocupa espaço e impede que o conteúdo caiba na primeira dobra no mobile

8. **Manter**: meta-info (data, horário, online, vagas) em formato compacto abaixo do CTA

### Layout mobile-first
- Padding superior reduzido: `pt-12 md:pt-20 lg:pt-28`
- Padding inferior reduzido: `pb-10 md:pb-20`
- Remover layout `flex-row` com imagem — hero fica single-column, centralizado
- `leading-relaxed` a `leading-loose` no bloco de tensão para escaneabilidade
- `gap` entre elementos reduzido para garantir que caiba na primeira dobra

### O que NÃO muda
- Seções 2–12 intactas (a partir da linha 86)
- Barra fixa mobile (bottom bar) mantida
- Links, URLs (WhatsApp/Kiwify), tracking de pixels mantidos
- Todas as demais seções de copy, depoimentos, preço, garantia

