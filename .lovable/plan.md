

## Ajustar tamanho do contador regressivo

### Alteracao

**Arquivo:** `src/components/CountdownTimer.tsx`

- Numeros (linha 58): trocar `text-2xl md:text-4xl` por `text-lg md:text-2xl`
- Labels (linha 63): trocar `text-xs md:text-sm` por `text-lg md:text-2xl` (mesmo tamanho dos numeros)
- Remover `font-bold` dos numeros para igualar o peso visual com os labels

Resultado: numeros e labels ficam do mesmo tamanho, mais discretos e equilibrados.

