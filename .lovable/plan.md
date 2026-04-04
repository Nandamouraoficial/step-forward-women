

## Ajustes nos Depoimentos — Eliminar Repetição e Diferenciar

### Problema atual
Ambos os depoimentos (Juliana e Carla) usam frases similares ("em poucas horas", "decisão que vinha sendo adiada"). Precisam ter linguagem própria.

### 3 edições em `src/pages/Index.tsx`

**1. Depoimento curto da Juliana (seção 2, linhas 139-143)**
Trocar a quote por:
> "O problema nunca foi competência.
> Era posicionamento.
> Quando isso ficou claro, minha forma de me posicionar mudou — e o mercado começou a responder de forma diferente."

**2. Case Juliana (seção 6, linhas 242-257)**
Remover as linhas 242-246 ("Em poucas horas, ela estruturou..." e "Ajustou seu posicionamento..."). Manter apenas o trecho final:
> A partir disso:
> Foi selecionada para o SW50 do Santander, entre milhares de candidatas.
> Não porque ficou mais competente. Mas porque passou a ser percebida como sempre foi.

**3. Depoimento da Carla (seção 8, linhas 288-308)**
- Trocar linha de conexão (289) para: "E quando a decisão deixa de ser reflexão e vira ação, o impacto aparece rápido."
- Trocar quote (293-298) para:
> "Eu sabia que precisava mudar, mas continuava no mesmo lugar — entregando bem e cada vez mais distante do próximo nível.
> O que faltava não era clareza. Era decisão.
> Quando isso ficou estruturado, eu parei de adiar — e dei início à minha consultoria."
- Manter fechamento ("Decisão não muda só clareza...") como está.

### Resultado
- Juliana = posicionamento + percepção de mercado
- Carla = decisão interna + ação concreta
- Zero frases repetidas entre os dois blocos

