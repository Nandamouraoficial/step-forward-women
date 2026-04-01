

## Adicionar console.log temporário nos eventos de scroll

### Alteração em `src/pages/Index.tsx` (linhas 22–29)

Dentro do bloco `if (entry.isIntersecting)` do `createObserver`, adicionar um `console.log` antes dos disparos de pixel:

```js
console.log(`[ScrollTracking] ${eventName} disparado`, new Date().toISOString());
```

Isso permitirá verificar no DevTools do ambiente publicado se cada evento (`ScrollPastHero`, `ScrollMidpoint`, `ScrollBottom`) está sendo acionado no momento correto do scroll.

### Nenhuma outra alteração
- Sem mudanças visuais ou em outras seções

