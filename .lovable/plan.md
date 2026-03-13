
Diagnóstico rápido
- Revisei `index.html` e `public/robots.txt`: as tags OG essenciais estão corretas e públicas.
- A captura mostra o problema principal: URL inválida no navegador (`linkedin.com/post-inspectorhttps://...`), sem o trecho `/inspect/`.
- Do I know what the issue is? Sim. O erro atual é de formato/uso da URL do Post Inspector, não de falta de metadados OG.

Plano
1) Validar o fluxo correto sem código (primeiro)
   - Abrir exatamente: `https://www.linkedin.com/post-inspector/inspect/https%3A%2F%2Fstep-forward-women.lovable.app%2F`
   - Alternativa: abrir `https://www.linkedin.com/post-inspector/`, colar apenas `https://step-forward-women.lovable.app/` no campo e clicar **Inspect**.
   - Confirmar no resultado: título, descrição e imagem.

2) Se ainda falhar mesmo com URL correta, aplicar hardening de metadados (implementação)
   - Padronizar URL canônica com barra final.
   - Adicionar: `link rel="canonical"`, `og:site_name`, `og:locale`, `og:image:width`, `og:image:height`, `og:image:alt`, `og:image:type`, `twitter:url`.

3) Hardening de crawler/imagem
   - Garantir imagem OG dedicada 1200x627 (JPG/PNG) em `public/images/...` com URL HTTPS pública.
   - Adicionar bloco explícito no `robots.txt` para `User-agent: LinkedInBot` com `Allow: /`.

4) Publicar e retestar fim a fim
   - Publicar frontend (Update).
   - Rodar Post Inspector novamente com a URL codificada.
   - Validar também no composer do LinkedIn para confirmar o card real ao compartilhar.

Arquivos envolvidos (se a etapa 2/3 for necessária)
- `index.html`
- `public/robots.txt`
- `public/images/*` (imagem OG dedicada)
