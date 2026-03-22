import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Monitor, Users, Shield, Quote } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import SealBadge from "@/components/SealBadge";

const CTA_URL = "https://chk.eduzz.com/acxa2eu4";

const Index = () => {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { conversion_id: 26913521 });
    }
    window.open(CTA_URL, '_blank');
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <SealBadge />

      {/* ═══════════ 1. HERO ═══════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="relative container mx-auto px-4 sm:px-6 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-foreground text-center lg:text-left">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Você já construiu a carreira.
                <br />
                O risco agora é continuar no automático.
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
                Um dia de trabalho estratégico para mulheres em posições de liderança que precisam decidir o próximo movimento de carreira antes que o mercado, a empresa ou o contexto decidam por elas.
              </p>
              <p className="text-base font-semibold mb-8 max-w-lg mx-auto lg:mx-0">
                Não é uma imersão para "pensar melhor".
                <br />
                É para decidir com clareza, critério e direção.
              </p>

              <div className="flex flex-col items-center lg:items-start gap-3">
                <span className="inline-block text-xs uppercase tracking-wider font-bold text-accent border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5">
                  Grupo fechado para até 15 executivas
                </span>
                <a onClick={handleCTAClick} className="cursor-pointer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    GARANTIR MINHA VAGA
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-8 text-sm opacity-80">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 11 de abril</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 9h às 15h</span>
                <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4" /> Online e ao vivo</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 15 vagas</span>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="/images/foto_terno.jpeg"
                alt="Fernanda Moura — Estrategista Executiva de Carreira"
                className="w-full max-w-md lg:max-w-lg max-h-[400px] rounded-2xl shadow-2xl object-cover object-[center_15%]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 2. PARA QUEM É ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Esta imersão é para você se:
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto mb-10">
            {[
              "Ocupa uma posição de liderança ou influência",
              "Já construiu uma trajetória sólida, mas sente que o próximo passo não pode ser improvisado",
              "Percebe que continuar no automático pode custar caro",
              "Quer decidir com mais critério, antes que a pressão venha de fora",
              "Não quer desperdiçar mais tempo ou dinheiro em caminhos que não levam ao movimento certo",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 max-w-xl mx-auto text-center">
            <p className="text-foreground font-bold text-lg mb-2">
              Você não precisa estar em transição.
            </p>
            <p className="text-muted-foreground text-base">
              Na verdade, o melhor momento para decidir a carreira é antes que algo dê errado.
            </p>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-secondary">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 3. CUSTO DE NÃO DECIDIR ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
            O erro não é só decidir errado.
            <br />
            É deixar a decisão em aberto por tempo demais.
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6 text-left max-w-2xl mx-auto">
            <p>
              Em carreiras seniores, o custo da indecisão raramente aparece de uma vez.
            </p>
            <p>
              Ele aparece em forma de desgaste.
               <br />De oportunidades que passam.
               <br />De adoecimento silencioso.
              <br />De crescimento no lugar errado.
              <br />De investimento em cursos e movimentos que não mudam o que realmente importa.
            </p>
            <p>
              Muita gente só para para pensar na carreira quando algo dá errado.
            </p>
            <p>
              Quando a empresa muda.
              <br />Quando o chefe muda.
              <br />Quando a avaliação vem ruim.
              <br />Quando o mercado já começou a pedir outra leitura.
            </p>
            <p className="font-bold text-foreground text-center">
              Essa imersão existe para evitar esse ponto.
            </p>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-background">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 4. O QUE ACONTECE EM 6 HORAS ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            O que acontece em 6 horas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              "Você identifica com precisão o que está travando seu avanço hoje",
              "Analisa possibilidades reais — e elimina caminhos que parecem bons, mas não fazem sentido",
              "Define o próximo movimento com critério, não por impulso ou pressão externa",
              "Sai com um plano estruturado para os próximos 30 dias",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-xl p-6 text-left hover:shadow-md transition-shadow"
              >
                <span className="text-accent font-display text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-foreground text-lg mt-3">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl py-8 px-6 mb-10">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              Você não sai com mais conteúdo.
            </p>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-2">
              Sai com uma decisão tomada.
            </p>
          </div>

          <a onClick={handleCTAClick} className="cursor-pointer">
            <Button
              size="lg"
              className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              GARANTIR MINHA VAGA
            </Button>
          </a>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-secondary">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 5. O QUE VOCÊ LEVA ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Ao final da imersão, você leva:
          </h2>
          <ul className="space-y-5 max-w-xl mx-auto">
            {[
              "Uma decisão clara sobre seu próximo movimento",
              "Um diagnóstico objetivo do que está travando sua carreira",
              "Um mapa dos caminhos possíveis com análise estratégica",
              "Um plano de 30 dias para sair da intenção e ir para ação",
              "Clareza sobre o que parar de fazer para não continuar no caminho errado",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-background">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 6. PROVA DE CONSEQUÊNCIA ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
            O problema não é falta de capacidade.
            <br />
            É excesso de caminho sem critério.
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6 max-w-2xl mx-auto">
            <p>
              Você pode continuar estudando.
              <br />Pode fazer mais um curso.
              <br />Pode esperar a próxima oportunidade aparecer.
            </p>
            <p>
              Mas isso não garante direção.
              <br />Nem posicionamento.
              <br />Nem movimento.
            </p>
            <p className="font-bold text-foreground">
              O que muda a carreira de alguém sênior não é consumir mais.
              <br />É decidir melhor.
            </p>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-secondary">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 7. SOBRE A FERNANDA ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
            Quem conduz
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-shrink-0">
              <img
                src="/images/sobre-poltrona.png"
                alt="Fernanda Moura — Estrategista Executiva"
                className="w-72 md:w-80 rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                Fernanda Moura
              </h3>
              <p className="text-accent font-bold mb-6">
                Estrategista Executiva de Carreira
              </p>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  26 anos dentro do sistema corporativo —{" "}
                  <strong className="text-foreground">Coca-Cola, Cargill, Kraft Heinz, Kimberly-Clark e MBRF (Sadia e Perdigão)</strong>.
                  Chegou à Diretoria Executiva C-Level para América Latina e América Central, além de ter liderado diversos projetos globais.
                </p>
                <p>
                  Em 2021, fez mais uma vez o que muitas executivas pensam mas não executam:{" "}
                  <strong className="text-foreground">parou. Intencionalmente.</strong>{" "}
                  Para decidir o próximo movimento com método — não com impulso.
                </p>
                <p>
                  Já conduziu 23 transições profissionais reais na própria carreira. Sabe exatamente o que funciona — e o que é perda de tempo.
                </p>
                <p className="font-bold text-foreground">
                  Quem conduz essa imersão não fala de carreira de fora.
                  Ela tomou essas decisões de dentro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 8. DEPOIMENTO ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Quem já passou pela consultoria estratégica
            </h2>
          </div>
          <div className="bg-background border border-border rounded-2xl p-8 md:p-10 relative">
            <Quote className="w-10 h-10 text-accent/30 absolute top-6 left-6" />
            <div className="pt-8 space-y-4">
              <p className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug">
                "Eu achava que sabia me apresentar. Precisei rever minha entrega e reorganizar tudo para o público certo."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "A Fernanda faz a diferença porque entende qual momento você está e como será sua jornada. Ela busca suas habilidades através da sua história — e o mais interessante é que somos nós que montamos, com a nossa verdade, o que entregamos. Isso me deixou segura e sustento com autonomia."
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-bold text-foreground">Elza Dorigon</p>
              <p className="text-muted-foreground text-sm">Diretora de Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-secondary">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 9. INVESTIMENTO ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Investimento
          </h2>

          <div className="bg-secondary rounded-xl p-6 mb-8 max-w-xl mx-auto text-left">
            <p className="text-muted-foreground text-base leading-relaxed">
              Uma sessão individual com uma ex-diretora executiva C-level custa entre{" "}
              <strong className="text-foreground">R$ 3.000 e R$ 5.000</strong>.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mt-4">
              Nesta imersão, você participa de um dia inteiro de trabalho estratégico, com profundidade real e aplicação direta no seu contexto, por:
            </p>
          </div>

          <div className="bg-secondary rounded-2xl py-10 px-8 mb-8 inline-block">
            <p className="font-body text-primary text-2xl md:text-3xl font-semibold">
              R$ 1.497
            </p>
            <p className="text-muted-foreground text-sm mt-2">ou 12x de R$ 139,90</p>
          </div>

          <div className="max-w-xl mx-auto mb-8">
            <p className="text-muted-foreground text-base">
              O grupo é reduzido justamente para garantir qualidade nas discussões e profundidade na condução.
            </p>
            <p className="text-foreground font-bold text-base mt-2">
              Por isso, as vagas são limitadas.
            </p>
          </div>

          <CountdownTimer />

          <a onClick={handleCTAClick} className="cursor-pointer">
            <Button
              size="lg"
              className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              GARANTIR MINHA VAGA
            </Button>
          </a>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-background">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 10. GARANTIA ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-xl text-center">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 flex flex-col items-center gap-4">
            <Shield className="w-10 h-10 text-accent" />
            <p className="font-display text-2xl font-bold text-foreground">
              Garantia de resultado
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Se ao final da imersão você não sair com mais clareza sobre seu próximo movimento e com um plano estruturado para os próximos 30 dias, eu devolvo 100% do seu investimento.
            </p>
            <p className="text-foreground font-bold text-lg">
              Sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ 11. CTA FINAL ═══════════ */}
      <section className="relative overflow-hidden pt-40 sm:pt-48 md:pt-64 pb-12">
        <img
          src="/images/final-equipe.png"
          alt="Fernanda Moura com equipe"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative container mx-auto px-4 sm:px-6 max-w-3xl text-center text-foreground flex flex-col justify-end min-h-[320px] sm:min-h-[400px]">
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Se você já percebeu que deixar a carreira no automático pode custar caro,
            <br />essa é a sala para decidir com método.
          </p>
          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-foreground font-bold">Grupo reduzido.</span>
            <span className="text-foreground font-bold">Discussão estratégica real.</span>
            <span className="text-foreground font-bold">Próximo movimento com direção.</span>
          </div>
          <a onClick={handleCTAClick} className="cursor-pointer">
            <Button
              size="lg"
              className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              GARANTIR MINHA VAGA
            </Button>
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer
        className="py-10"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center text-foreground">
          <p className="font-display text-lg font-bold">Fernanda Moura</p>
          <p className="text-sm opacity-70 mt-1">Estrategista Executiva de Carreira</p>
          <p className="text-xs opacity-50 mt-4">© 2026 O Próximo Passo</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
