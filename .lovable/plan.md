

## Aumentar tamanho de texto no mobile em blocos com muito conteúdo

### Problema
Alguns blocos de texto denso usam `text-base` ou `text-lg` sem escala mobile, ficando pequenos em telas de celular.

### Alterações em `src/pages/Index.tsx`

**Seções afetadas e ajustes:**

1. **Custo de não decidir (linha 127)** — `text-lg md:text-xl` → `text-lg sm:text-xl` (já ok)

2. **Depoimentos Carla e Juliana (linhas 165, 356)** — `text-lg` → `text-lg sm:text-xl` para o texto do depoimento

3. **Bio Fernanda (linha 317)** — `text-lg` → `text-lg sm:text-xl` para os parágrafos da bio

4. **Reenquadramento (linha 272)** — `text-lg md:text-xl` → `text-lg sm:text-xl` (já ok)

5. **Investimento contexto (linhas 383, 387)** — `text-base` → `text-base sm:text-lg` (linha 387 já tem, linha 383 não)

6. **Garantia (linha 450)** — `text-base` → `text-lg` para o texto principal da garantia

7. **CTA final (linha 470)** — `text-lg md:text-xl` (já ok)

8. **Investimento "Menos que uma sessão" (linha 400)** — `text-base` → `text-lg`

9. **Cargo nos depoimentos (linhas 171, 362)** — `text-sm` → `text-sm sm:text-base`

### Resumo
Ajuste pontual de ~8 classes CSS para garantir que texto denso use no mínimo `text-lg` em mobile e `text-xl` em telas maiores.

