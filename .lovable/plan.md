
Objetivo: resolver o “mesmo erro” no LinkedIn Post Inspector sem novas mudanças de código (o `index.html` já está correto com `lang="pt-BR"` e `og:url`).

Plano:
1) Validar o fluxo correto do Post Inspector (a captura mostra URL malformada na barra: `.../post-inspectorhttps://...`).
2) Testar com o link direto correto:
   - `https://www.linkedin.com/post-inspector/inspect/https://step-forward-women.lovable.app`
3) Alternativa equivalente:
   - abrir `https://www.linkedin.com/post-inspector/`
   - colar `https://step-forward-women.lovable.app` no campo da página
   - clicar em “Inspect”
4) Confirmar se o cartão renderiza título, descrição e imagem.
5) Se ainda falhar, aí sim planejar ajuste técnico adicional de OG (ex.: `og:site_name`, `og:image:width/height`, imagem 1200x627 dedicada) e retestar.

Detalhes técnicos:
- Pelo código atual, as tags essenciais existem (`og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `twitter:*`).
- O comportamento da sua captura é consistente com erro de navegação no Inspector (URL digitada no endereço do navegador em vez de inspeção via campo/link correto), não com falta de meta tag.
