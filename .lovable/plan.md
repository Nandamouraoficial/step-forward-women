

# Corrigir preview do LinkedIn

## Problema
O LinkedIn Post Inspector não está conseguindo gerar o cartão de preview da página. A screenshot mostra a tela de "página não encontrada" do LinkedIn.

## Causa provável
Falta a meta tag `og:url` no `index.html`, que é obrigatória para o LinkedIn interpretar corretamente as tags Open Graph.

## Solução
Adicionar a tag `og:url` no `index.html` apontando para a URL publicada:

```html
<meta property="og:url" content="https://step-forward-women.lovable.app" />
```

Edição de uma única linha no arquivo `index.html`.

Após publicar, será necessário acessar o [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) novamente e colar a URL para forçar o LinkedIn a recarregar os dados.

