

# Configurar Link de Checkout nos Botoes CTA

## Mudanca
Alterar a constante `CTA_URL` no arquivo `src/pages/Index.tsx` de `"#checkout"` para `"https://chk.eduzz.com/acxa2eu4"`.

Como todos os botoes CTA ja usam essa constante, a mudanca sera automaticamente aplicada em todos os 5 botoes da pagina.

## Detalhe tecnico
- Arquivo: `src/pages/Index.tsx`, linha 4
- De: `const CTA_URL = "#checkout";`
- Para: `const CTA_URL = "https://chk.eduzz.com/acxa2eu4";`

