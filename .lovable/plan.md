

## Remover console.log de debug do scroll tracking

### Alteração única em `src/pages/Index.tsx`

Remover a linha 22:
```tsx
console.log(`[ScrollTracking] ${eventName} disparado`, new Date().toISOString());
```

Nenhuma outra alteração.

