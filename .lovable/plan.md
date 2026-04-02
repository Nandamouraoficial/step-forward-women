

## Duas alterações nos CTAs

### 1. Texto do botão: "GARANTIR MINHA VAGA" → "GARANTIR MINHA VAGA AGORA"

Atualizar todas as 6 ocorrências em `src/pages/Index.tsx` (linhas 116, 171, 291, 490, 566, 597).

### 2. Linha de urgência abaixo de cada CTA

Adicionar abaixo de cada bloco CTA (após o link do WhatsApp) uma linha sutil:

```tsx
<p className="text-sm text-muted-foreground mt-2">
  Restam poucas vagas — turma fecha em 11/04
</p>
```

Aplicar nos 5 blocos de CTA da página (hero + 4 seções) e também na barra fixa mobile (versão mais compacta, `text-xs`).

### Resumo

| Arquivo | Mudança |
|---------|---------|
| `src/pages/Index.tsx` | Trocar texto dos 6 botões; adicionar linha de urgência em cada bloco CTA |

Nenhuma dependência nova. Nenhuma mudança visual além do texto adicionado.

