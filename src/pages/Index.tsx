import { useEffect, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, Quote } from "lucide-react";

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
    <div className="flex items-center justify-center py-4">
      <span className="block w-16 h-px bg-accent/30" />
      <span className="mx-3 text-accent/40 text-sm">✦</span>
      <span className="block w-16 h-px bg-accent/30" />
    </div>
  );

  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <Suspense fallback={null}><SealBadge /></Suspense>

      {/* ═══════════ 1. HERO + CTA ═══════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="relative container mx-auto px-4 sm:px-6 pt-6 md:pt-24 lg:pt-32 pb-6 md:pb-24">
          <div className="max-w-2xl mx-auto text-foreground text-center">
            <h1 className="font-display text-lg sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-3">
              Você já sabe que precisa mudar.
              <br />
              Mas ainda não decidiu como.
            </h1>

            <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed mb-2 max-w-xl mx-auto opacity-90">
              Você já percebeu que continuar fazendo mais do mesmo não vai te levar para o próximo nível.
            </p>

            <p className="text-sm sm:text-lg md:text-xl leading-relaxed mb-2 max-w-xl mx-auto opacity-90">
              Mas ainda não estruturou qual é, de fato, o próximo movimento.
            </p>

            <p className="text-sm sm:text-lg md:text-xl leading-relaxed mb-2 max-w-xl mx-auto opacity-90">
              E está adiando uma decisão que já sabe que precisa tomar.
            </p>

            <p className="text-sm sm:text-lg md:text-xl leading-relaxed mb-2 max-w-xl mx-auto">
              Essa imersão existe para uma coisa:
              <br /><strong className="text-accent">Te fazer sair com uma decisão clara sobre o seu próximo passo — em um único dia.</strong>
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
              11 de abril · 9h às 15h · Online ao vivo
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Grupo reduzido — até 15 executivas
            </p>

            <CTABlock microcopy="" label="QUERO DECIDIR MEU PRÓXIMO PASSO" />
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 2. BLOCO DE DECISÃO ═══════════ */}
      <section className="relative bg-secondary py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            O problema não é decidir errado.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-xl mx-auto">
            É saber que precisa mudar — e continuar sem um plano concreto.
          </p>
          <div className="space-y-3 max-w-xl mx-auto mb-6 text-left">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Em carreiras seniores, o custo não aparece de uma vez.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Ele aparece em oportunidades que não vêm.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Em desgaste que aumenta.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Em decisões adiadas.
            </p>
          </div>
          <p className="text-accent font-bold text-lg sm:text-xl">
            Essa imersão existe para evitar esse ponto.
          </p>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 3. PROVA SOCIAL ═══════════ */}
      <section className="relative bg-background py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="space-y-8 max-w-2xl mx-auto">
            {/* Carla */}
            <div className="text-center">
              <Quote className="w-6 h-6 text-accent/30 mx-auto mb-2" />
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed italic mb-3">
                "Saí da paralisia da executiva bem-sucedida à beira do burnout e abri minha consultoria."
              </p>
              <p className="font-bold text-foreground text-sm">Carla Negrão</p>
              <p className="text-muted-foreground text-xs">Ex-executiva de multinacional | Fundadora, CN Food Consulting</p>
            </div>

            {/* Juliana */}
            <div className="text-center">
              <Quote className="w-6 h-6 text-accent/30 mx-auto mb-2" />
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed italic mb-3">
                "Ganhei estrutura, posicionamento e passei a atrair as oportunidades certas."
              </p>
              <p className="font-bold text-foreground text-sm">Juliana Zobaran</p>
              <p className="text-muted-foreground text-xs">Diretora Executiva para América Latina</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 4. O QUE VOCÊ LEVA ═══════════ */}
      <section className="relative bg-secondary py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-balance">
            Ao final da imersão, você leva:
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto text-left">
            {[
              "decisão clara sobre o próximo movimento",
              "diagnóstico do que está travando sua carreira",
              "caminhos possíveis com análise estratégica",
              "plano de 30 dias para sair da intenção e ir para ação",
              "clareza sobre o que parar de fazer",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 5. INVESTIMENTO + CTA ═══════════ */}
      <section className="relative bg-background py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Investimento
          </h2>

          <div className="bg-secondary rounded-xl p-6 mb-6 max-w-xl mx-auto text-left">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-balance">
              Uma sessão individual com uma ex-diretora executiva pode custar entre{" "}
              <strong className="text-foreground">R$ 3.000 e R$ 10.000</strong>.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-4 text-balance">
              Aqui, você participa de um dia inteiro de decisão estratégica:
            </p>
          </div>

          <div className="bg-secondary rounded-2xl py-8 px-8 mb-6 inline-block">
            <p className="font-body text-primary text-2xl md:text-3xl font-semibold">
              12x de R$ 139,90
            </p>
            <p className="text-muted-foreground text-base mt-2">ou R$ 1.497 à vista</p>
          </div>

          <div className="max-w-xl mx-auto mb-6">
            <p className="text-foreground font-bold text-lg text-balance">
              Menos que uma sessão — com impacto direto no seu próximo movimento.
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
              loading="lazy"
              decoding="async"
            />
            <p className="text-muted-foreground text-sm text-left">
              Parte das vendas desta imersão é direcionada para a ONG{" "}
              <strong className="text-foreground">Amigos do Bem</strong>.
            </p>
          </a>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 6. GARANTIA ═══════════ */}
      <section className="relative bg-secondary py-10 md:py-16">
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

      {/* ═══════════ 7. FECHAMENTO + CTA ═══════════ */}
      <section className="relative overflow-hidden pt-40 sm:pt-48 md:pt-64 pb-12">
        <img
          src="/images/final-equipe.png"
          alt="Fernanda Moura com equipe"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative container mx-auto px-4 sm:px-6 max-w-3xl text-center text-foreground flex flex-col justify-end min-h-[320px] sm:min-h-[400px]">
          <p className="text-lg md:text-xl text-muted-foreground mb-4 text-balance">
            Se você já percebeu que continuar sem direção tem custo,
            <br />essa é a sala para decidir com método.
          </p>
          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-foreground font-bold text-base sm:text-lg">Não para pensar.</span>
            <span className="text-foreground font-bold text-base sm:text-lg">Para decidir.</span>
          </div>
          <CTABlock label="QUERO DECIDIR MEU PRÓXIMO PASSO" />
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
            GARANTIR MINHA VAGA
          </Button>
        </a>
        <p className="text-xs text-muted-foreground mt-1 text-center">Turma limitada — encerramento em 10/04</p>
      </div>
    </main>
  );
};

export default Index;
