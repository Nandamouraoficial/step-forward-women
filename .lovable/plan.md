

## Adicionar Meta Pixel (Facebook) à página

### O que será feito
Incluir o script do Meta Pixel com ID `106120919099612` no `index.html`, seguindo o mesmo padrão do pixel do LinkedIn já existente.

### Alteração em `index.html`

Adicionar no `<head>`, antes do fechamento, o snippet padrão do Meta Pixel:

```html
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '106120919099612');
  fbq('track', 'PageView');
</script>
<!-- End Meta Pixel Code -->
```

E no `<body>`, junto ao `<noscript>` existente do LinkedIn, adicionar o fallback:

```html
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=106120919099612&ev=PageView&noscript=1" />
</noscript>
```

### Detalhes técnicos
- O script vai no `<head>` para carregar o mais cedo possível (padrão Meta)
- O `<noscript>` fallback vai no `<body>` (mesma abordagem do pixel LinkedIn)
- Nenhum outro arquivo precisa ser alterado

