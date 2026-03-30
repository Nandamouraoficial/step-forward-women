

## Redistribuir headline em duas linhas equilibradas

### Alteração em `src/pages/Index.tsx` (linhas 32-35)

Adicionar um `<br />` manual para quebrar a segunda linha em dois trechos mais equilibrados:

**De:**
```
Sabe o que quer.
Mas ainda não estruturou como chegar lá.
```

**Para:**
```
Sabe o que quer.
Mas ainda não estruturou
como chegar lá.
```

Isso distribui melhor o peso visual entre as linhas, evitando uma segunda linha muito longa. Remover `text-balance` do `h1` para que os `<br />` manuais controlem as quebras.

