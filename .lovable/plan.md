

## Ajustar enquadramento da foto hero

**Arquivo:** `src/pages/Index.tsx` (linha 70)

Atualizar as classes CSS da imagem para recortar mesa, reduzir espaço acima da cabeça e focar no enquadramento waist-up:

- Trocar `object-top` por `object-[center_20%]` para deslocar o ponto focal ligeiramente acima do centro, reduzindo espaço vazio acima da cabeça enquanto mantém braços na cintura visíveis
- Reduzir `max-h-[500px]` para `max-h-[440px]` para cortar mais da parte inferior (mesa)
- Manter `object-cover` para preencher o container com crop automático

Classe final:
```
w-full max-w-md lg:max-w-lg max-h-[440px] rounded-2xl shadow-2xl object-cover object-[center_20%]
```

