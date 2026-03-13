
Objetivo
- Encerrar o erro do LinkedIn Post Inspector sem novas alterações de código (o problema atual é de URL usada no navegador).

Diagnóstico confirmado
- A captura mostra: `linkedin.com/post-inspectorhttps://step-forward-women.lovable.app`.
- Isso gera requisição inválida `GET /post-inspectorhttps://...` (não é o fluxo do Inspector).
- Código atual já está endurecido: `og:url`, `og:title`, `og:description`, `og:image`, `canonical`, `og:site_name`, `robots.txt` com `LinkedInBot Allow: /`.

Plano de execução
1) Teste correto (fim a fim)
- Abrir exatamente:
  `https://www.linkedin.com/post-inspector/inspect/https%3A%2F%2Fstep-forward-women.lovable.app%2F`
- Não editar essa URL na barra; apenas abrir e clicar em **Inspect**.

2) Fluxo alternativo seguro
- Abrir: `https://www.linkedin.com/post-inspector/`
- Colar no campo: `https://step-forward-women.lovable.app/`
- Clicar em **Inspect**.

3) Validação de resultado
- Confirmar no Inspector: título, descrição e imagem OG.
- Conferir se a URL final mostrada pelo LinkedIn termina com `/`.

4) Contingência (se ainda falhar usando o fluxo correto)
- Repetir inspeção com variação de URL:
  - `https://step-forward-women.lovable.app/`
  - `https://step-forward-women.lovable.app`
- Aguardar alguns minutos e re-inspecionar (cache do crawler).
- Se persistir, eu preparo um plano de ajuste fino específico para o fallback de cache do LinkedIn (sem alterar conteúdo visual da página).

Detalhes técnicos
- O erro “Pedido ruim… GET /post-inspectorhttps://...” não indica falha de OG da sua página; indica URL de acesso ao Inspector malformada.
- Como o opengraph.xyz já resolveu corretamente, a origem dos metadados está funcional; o ponto crítico é o endpoint/formato da inspeção no LinkedIn.
