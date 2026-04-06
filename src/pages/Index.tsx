import { useEffect, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, Quote } from "lucide-react";
import julianaPhoto from "@/assets/juliana-zobaran.png";
import fernandaHero from "@/assets/fernanda-hero.png";

const CountdownTimer = lazy(() => import("@/components/CountdownTimer"));
const SealBadge = lazy(() => import("@/components/SealBadge"));

const CHECKOUT_URL = "https://pay.kiwify.com.br/VrHaDPn";

const Index = () => {
  useEffect(() => {
    const fired = { hero: false, mid: false, bottom: false };

    const onScroll = () => {
      try {
        const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);

        const fireEvent = (key: keyof typeof fired, eventName: string) => {
          if (fired[key]) return;
          fired[key] = true;
          try {
            if (typeof (window as any).fbq === 'function') {
              (window as any).fbq('trackCustom', eventName);
            }
          } catch (_) {}
          try {
            if (typeof (window as any).lintrk === 'function') {
              (window as any).lintrk('track', { conversion_id: 26913521 });
            }
          } catch (_) {}
        };

        if (pct > 0.15) fireEvent('hero', 'ScrollPastHero');
        if (pct > 0.50) fireEvent('mid', 'ScrollMidpoint');
        if (pct > 0.85) fireEvent('bottom', 'ScrollBottom');

        if (fired.hero && fired.mid && fired.bottom) {
          window.removeEventListener('scroll', onScroll);
        }
      } catch (_) {}
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCTAClick = () => {
    const fire = () => {
      try {
        if (typeof (window as any).fbq === 'function') {
          (window as any).fbq('track', 'Lead');
          (window as any).fbq('track', 'InitiateCheckout');
        }
      } catch (_) {}
      try {
        if (typeof (window as any).lintrk === 'function') {
          (window as any).lintrk('track', { conversion_id: 26913521 });
        }
      } catch (_) {}
    };
    setTimeout(fire, 0);
  };

  const CTABlock = ({ label = "GARANTIR MINHA VAGA", microcopy }: { label?: string; microcopy?: string }) => (
    <div className="flex flex-col items-center gap-3">
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick} className="cursor-pointer w-full sm:w-auto">
        <Button
          size="lg"
          className="bg-cta-green hover:bg-cta-green/85 text-cta-green-foreground font-bold text-lg sm:text-xl px-10 sm:px-14 py-5 sm:py-8 rounded-lg shadow-2xl shadow-cta-green/25 tracking-wide transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
        >
          {label}
        </Button>
      </a>
      {microcopy && <p className="text-sm text-muted-foreground">{microcopy}</p>}
    </div>
  );

  const Divider = () => (
    <div className="flex items-center justify-center py-6">
      <span className="block w-16 h-px bg-accent/30" />
      <span className="mx-3 text-accent/40 text-sm">✦</span>
      <span className="block w-16 h-px bg-accent/30" />
    </div>
  );

  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <Suspense fallback={null}><SealBadge /></Suspense>

      {/* ═══════════ 1. HERO ═══════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="relative container mx-auto px-4 sm:px-6 pt-10 md:pt-24 lg:pt-32 pb-10 md:pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto text-foreground">
            {/* Texto à esquerda */}
            <div className="text-center lg:text-left flex-1">
              <h1 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-4">
                Você não está travada.
                <br />
                Está adiando uma decisão.
              </h1>

              <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0 opacity-90">
                Você continua entregando — mas não está crescendo na mesma proporção.
              </p>

              <p className="text-sm sm:text-lg md:text-xl leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0 opacity-90">
                O problema não é falta de capacidade.
                <br />É uma decisão que ainda não foi estruturada.
              </p>

              <p className="text-sm sm:text-lg md:text-xl leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                <strong className="text-accent">O Próximo Passo</strong> é onde você estrutura isso com método — antes que o custo apareça.
              </p>

              <CTABlock label="QUERO DECIDIR MEU PRÓXIMO PASSO" microcopy="Em 6 horas. Com método." />
            </div>

            {/* Foto — desktop: lateral direita; mobile: menor abaixo do CTA */}
            <div className="flex-shrink-0 w-[180px] sm:w-[220px] lg:w-[320px] xl:w-[380px] mx-auto lg:mx-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src={fernandaHero}
                  alt="Fernanda Coutinho"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 2. PROVA IMEDIATA ═══════════ */}
      <section className="relative bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex flex-col items-center gap-8 md:gap-10 max-w-2xl mx-auto text-center">
            <div className="relative">
              <Quote className="w-8 h-8 text-accent/30 mb-2" />
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed italic">
                "O problema nunca foi competência.
                <br />Era posicionamento.
                <br />Quando isso ficou claro, tudo começou a mudar."
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="font-bold text-foreground">Juliana Zobaran</p>
              <p className="text-muted-foreground text-sm">Diretora para América Latina</p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock label="QUERO PARAR DE ADIAR" />

      <Divider />

      {/* ═══════════ 3. DIAGNÓSTICO ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            Se você:
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto mb-8">
            {[
              "entrega bem, mas não avança",
              "sabe que precisa mudar, mas não decide",
              "sente que está pronta para mais, mas não está indo",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-accent font-bold text-lg sm:text-xl">
            👉 você já está em momento de decisão.
          </p>
          <CTABlock label="EU MEREÇO ESSE PRÓXIMO PASSO" />
        </div>
      </section>

      <Divider />

      {/* ═══════════ 4. CONSEQUÊNCIA ═══════════ */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-10 text-balance">
            O custo não aparece hoje.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">Aparece:</p>
          <ul className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-4 text-left max-w-2xl mx-auto list-disc list-inside">
            <li>nas oportunidades que não vêm</li>
            <li>na sensação de estar sempre ocupada — mas não avançando</li>
            <li>em decisões que você já sabe que precisa tomar</li>
            <li>quando você adoece por estagnação e angústia</li>
          </ul>
          <div className="mt-10 max-w-2xl mx-auto">
            <p className="text-foreground font-bold text-lg md:text-xl text-balance">
              Carreiras seniores não travam de uma vez.
              <br />Elas perdem timing.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 5. CASE JULIANA (ENCURTADO) ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
            <div className="flex-shrink-0 mx-auto lg:mx-0 w-28 md:w-32 aspect-square rounded-full shadow-xl overflow-hidden">
              <img
                src={julianaPhoto}
                alt="Juliana Zobaran — Diretora para América Latina"
                className="w-full h-[140%] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
                O problema não era capacidade.
                <br />Era posicionamento.
              </h2>
              <div className="text-base sm:text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Já era diretora para América Latina, com mais de 20 anos de carreira e impacto direto em resultado e estratégia.
                </p>
                <p>
                  Dentro do seu ecossistema, era reconhecida.
                  <br />Fora dele, o mercado quase não a via.
                </p>
                <p>
                  Em poucas horas, ela estruturou uma decisão que vinha sendo adiada há meses.
                </p>
                <p>
                  Ajustou seu posicionamento, ampliou sua presença e passou a comunicar seu valor com clareza.
                </p>
                <p>
                  A partir disso:
                </p>
                <p>
                  Foi selecionada para o <strong className="text-foreground">SW50 do Santander</strong>, entre milhares de candidatas.
                </p>
                <p className="text-foreground font-bold">
                  Não porque ficou mais competente.
                  <br />Mas porque passou a ser percebida como sempre foi.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-bold text-foreground">Juliana Zobaran</p>
                <p className="text-muted-foreground text-sm sm:text-base">Diretora para América Latina</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground font-bold text-lg md:text-xl text-balance">
              E quando essa decisão é estruturada, o que muda não é só a clareza.
              <br />É o que passa a acontecer na sua carreira.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 6. O QUE É ═══════════ */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Não é um curso.
            <br />É uma decisão estruturada.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">Em 6 horas, você sai com:</p>
          <ul className="space-y-4 max-w-xl mx-auto text-left mb-10">
            {[
              "uma decisão clara sobre seu próximo movimento",
              "critérios objetivos para escolher o caminho certo",
              "um plano de 30 dias para execução",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <CTABlock label="DECIDIR AGORA, NÃO AMANHÃ" />
        </div>
      </section>

      <Divider />

      {/* ═══════════ 7. TRANSFORMAÇÃO (ANTES vs DEPOIS) ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-12 text-balance">
            O que muda quando você decide
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background/50 border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-muted-foreground mb-6">Antes</h3>
              <ul className="space-y-3 text-muted-foreground text-base sm:text-lg">
                <li>Você continua entregando, mas sem crescimento proporcional</li>
                <li>Avalia caminhos, mas não escolhe</li>
                <li>Sente que está pronta para mais, mas não avança</li>
              </ul>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-accent mb-6">Depois</h3>
              <ul className="space-y-3 text-foreground text-base sm:text-lg">
                <li>Você sabe exatamente qual é o seu próximo movimento</li>
                <li>Decide com critério e segurança</li>
                <li>Elimina caminhos que não fazem sentido</li>
                <li>Executa com direção</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 8. CONTRAPONTO ═══════════ */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            O mercado não recompensa quem trabalha mais.
            <br />Recompensa quem decide melhor.
          </p>
          <p className="text-foreground font-bold text-xl md:text-2xl text-balance">
            Clareza não vem com mais informação.
            <br />Vem com decisão.
          </p>
        </div>
      </section>

      {/* ═══════════ DEPOIMENTO CARLA NEGRÃO ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/40">
            <span className="text-accent text-4xl font-serif leading-none block mb-4">"</span>
            <blockquote className="text-foreground text-lg md:text-xl leading-relaxed mb-6 text-balance">
              Eu sabia que precisava mudar, mas ficava paralisada tentando ter certeza antes de agir. 
              Em uma sessão, entendi que clareza não vem antes da decisão — vem depois. 
              Saí da consultoria e comecei minha própria operação em menos de 30 dias.
            </blockquote>
            <div>
              <p className="font-bold text-foreground">Carla Negrão</p>
              <p className="text-sm text-muted-foreground">Ex-executiva Nestlé · Proprietária da CN Consulting</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 9. PARA QUEM É ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-10 text-balance">
            Para você que:
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto mb-10">
            {[
              "já construiu uma trajetória sólida",
              "continua entregando resultado",
              "mas sabe que o próximo passo não pode ser improvisado",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <CTABlock label="COMEÇAR MINHA VIRADA AGORA" />
        </div>
      </section>

      <Divider />

      {/* ═══════════ 10. ENTREGA FINAL ═══════════ */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            Você sai com:
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto mb-8">
            {[
              "Decisão estruturada",
              "Clareza do que está travando sua carreira",
              "Plano de 30 dias",
              "Eliminação de caminhos errados",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <p className="text-foreground font-bold text-lg md:text-xl text-balance">
              Você não sai com mais conteúdo.
              <br />Sai com uma decisão tomada.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 11. AUTORIDADE ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
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
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                Fernanda Moura
              </h2>
              <p className="text-accent font-bold mb-6">
                Estrategista Executiva de Carreira
              </p>
              <div className="text-lg sm:text-xl leading-relaxed text-muted-foreground space-y-4">
                <p>
                  26 anos dentro do sistema corporativo.
                </p>
                <div className="flex flex-wrap gap-2 my-4 max-w-md">
                  {["Coca-Cola", "Cargill", "Kraft Heinz", "Kimberly-Clark", "MBRF", "Itaú", "Vigor", "Delboni Auriemo", "Amil", "Unilever"].map((company) => (
                    <span key={company} className="bg-accent/10 border border-accent/20 text-foreground text-sm px-3 py-1 rounded-full">
                      {company}
                    </span>
                  ))}
                </div>
                <p className="font-bold text-foreground">
                  23 transições profissionais reais.
                </p>
                <p className="text-muted-foreground">10 empresas. 5 multinacionais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 12. INVESTIMENTO + CTA ═══════════ */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 text-balance">
            Investimento
          </h2>

          <div className="bg-secondary rounded-xl p-6 mb-8 max-w-xl mx-auto text-left">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-balance">
              Uma sessão individual pode custar entre{" "}
              <strong className="text-foreground">R$ 3.000 e R$ 10.000</strong>.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-4 text-balance">
              Aqui, você participa de um dia inteiro de decisão estratégica:
            </p>
          </div>

          <div className="bg-secondary rounded-2xl py-10 px-8 mb-8 inline-block">
            <p className="font-body text-primary text-2xl md:text-3xl font-semibold">
              12x de R$ 139,90
            </p>
            <p className="text-muted-foreground text-base mt-2">ou R$ 1.497 à vista</p>
          </div>

          <div className="max-w-xl mx-auto mb-8">
            <p className="text-foreground font-bold text-lg text-balance">
              Menos que uma sessão — com impacto direto no seu próximo movimento.
              <br />Sem depender de timing externo ou validação do mercado.
            </p>
          </div>

          <Suspense fallback={null}><CountdownTimer /></Suspense>

          <CTABlock label="GARANTIR MINHA VAGA" microcopy="Turma limitada — encerramento em 10/04" />

          <a
            href="https://www.amigosdobem.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-accent/5 border border-accent/20 rounded-xl p-5 max-w-xl mx-auto mt-8 hover:bg-accent/10 transition-colors"
          >
            <img
              src="/images/amigos-do-bem-icon.png"
              alt="ONG Amigos do Bem"
              className="w-14 h-14 object-contain shrink-0"
            />
            <p className="text-muted-foreground text-sm text-left">
              Parte das vendas desta imersão é direcionada para a ONG{" "}
              <strong className="text-foreground">Amigos do Bem</strong>.
            </p>
          </a>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 13. GARANTIA ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-xl text-center">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 flex flex-col items-center gap-4">
            <Shield className="w-10 h-10 text-accent" />
            <p className="font-display text-2xl font-bold text-foreground text-balance">
              Garantia de resultado
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-balance">
              Se você não sair com uma decisão clara e um plano estruturado, eu devolvo 100%.
            </p>
            <p className="text-foreground font-bold text-lg">
              Sem burocracia.
            </p>
          </div>
        </div>
      </section>

      

      <Divider />

      {/* ═══════════ 14. FECHAMENTO + CTA FINAL ═══════════ */}
      <section className="relative overflow-hidden pt-40 sm:pt-48 md:pt-64 pb-12">
        <img
          src="/images/final-equipe.png"
          alt="Fernanda Moura com equipe"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative container mx-auto px-4 sm:px-6 max-w-3xl text-center text-foreground flex flex-col justify-end min-h-[320px] sm:min-h-[400px]">
          <p className="text-lg md:text-xl text-muted-foreground mb-6 text-balance">
            Se você já percebeu que continuar sem direção tem custo,
            <br />essa é a sala para decidir com método.
          </p>
          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-foreground font-bold text-base sm:text-lg">Não para pensar.</span>
            <span className="text-foreground font-bold text-base sm:text-lg">Para decidir.</span>
          </div>
          <CTABlock label="CHEGA DE ESPERAR" microcopy="Turma limitada — encerramento em 10/04" />
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-8 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-muted-foreground">© O Próximo Passo</p>
        </div>
      </footer>

      {/* ═══════════ BARRA FIXA MOBILE ═══════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background border-t border-border px-4 py-3 shadow-2xl">
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick} className="cursor-pointer block">
          <Button
            size="lg"
            className="bg-cta-green hover:bg-cta-green/85 text-cta-green-foreground font-bold text-base w-full py-6 rounded-lg shadow-lg tracking-wide"
          >
            ESSE É MEU MOMENTO
          </Button>
        </a>
        <p className="text-xs text-muted-foreground mt-1 text-center">Turma limitada — encerramento em 10/04</p>
      </div>
    </main>
  );
};

export default Index;
