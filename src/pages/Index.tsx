import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Monitor, Users, Shield, Quote } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import SealBadge from "@/components/SealBadge";

const WHATSAPP_URL = "https://wa.me/5511995698168?text=Ol%C3%A1%20Fernanda%2C%20tenho%20interesse%20na%20Imers%C3%A3o%20O%20Pr%C3%B3ximo%20Passo%20de%2011%20de%20abril.";
const CHECKOUT_URL = "https://pay.kiwify.com.br/VrHaDPn";

const Index = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const midpointRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinelEl = sentinelRef.current;
    const midpointEl = midpointRef.current;

    const createObserver = (el: HTMLElement, eventName: string) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log(`[ScrollTracking] ${eventName} disparado`, new Date().toISOString());
            if (typeof window !== 'undefined' && (window as any).fbq) {
              (window as any).fbq('trackCustom', eventName);
            }
            if (typeof window !== 'undefined' && (window as any).lintrk) {
              (window as any).lintrk('track', { conversion_id: 26913521 });
            }
            obs.disconnect();
          }
        },
        { threshold: 0 }
      );
      obs.observe(el);
      return obs;
    };

    const observers: IntersectionObserver[] = [];
    const bottomEl = bottomRef.current;
    if (sentinelEl) observers.push(createObserver(sentinelEl, 'ScrollPastHero'));
    if (midpointEl) observers.push(createObserver(midpointEl, 'ScrollMidpoint'));
    if (bottomEl) observers.push(createObserver(bottomEl, 'ScrollBottom'));

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { conversion_id: 26913521 });
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <SealBadge />

      {/* ═══════════ 1. HERO ═══════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="relative container mx-auto px-4 sm:px-6 pt-8 md:pt-20 lg:pt-28 pb-8 md:pb-20">
          <div className="max-w-2xl mx-auto text-foreground text-center">
            <h1 className="font-display text-lg sm:text-2xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-3">
              Você já percebeu que continuar fazendo mais do mesmo não vai te levar para o próximo nível.
            </h1>

            <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed mb-4 max-w-xl mx-auto opacity-90">
              Mas ainda não estruturou qual é, de fato, o próximo movimento — e está adiando uma decisão que já sabe que precisa tomar.
            </p>

            <div className="space-y-1 text-xs sm:text-base leading-relaxed opacity-75 mb-4 max-w-md mx-auto">
              <p>Em carreiras seniores, o custo não aparece de uma vez.</p>
              <p>Ele aparece em oportunidades que não vêm.</p>
              <p>Em desgaste que aumenta.</p>
              <p>Em decisões adiadas.</p>
            </div>

            <div className="mb-4">
              <p className="text-sm sm:text-lg">Essa imersão existe para uma coisa:</p>
              <p className="text-sm sm:text-lg text-accent font-bold">
                Te fazer sair com uma decisão estruturada sobre o seu próximo passo.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 mb-5">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick} className="cursor-pointer w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-cta-green hover:bg-cta-green/85 text-cta-green-foreground font-bold text-lg sm:text-xl px-10 sm:px-14 py-5 sm:py-8 rounded-lg shadow-2xl shadow-cta-green/25 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  GARANTIR MINHA VAGA
                </Button>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline underline-offset-4 hover:opacity-80 transition-opacity">
                Prefiro conversar no WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-5 text-sm sm:text-base opacity-80">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 11 de abril</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 9h às 15h</span>
              <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4" /> Online e ao vivo</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 15 vagas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sentinel for scroll tracking */}
      <div ref={sentinelRef} aria-hidden="true" />

      {/* ═══════════ 2. PARA QUEM É ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12 text-balance">
            Esta imersão é para você se:
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto mb-10">
            {[
              "Ocupa uma posição de liderança ou influência",
              "Já construiu uma trajetória sólida, mas sente que o próximo passo não pode ser improvisado",
              "Vê a IA transformando o mercado e quer se preparar para os próximos anos",
              "Quer decidir com mais critério, antes que a pressão venha de fora",
              "Não quer mais desperdiçar tempo e dinheiro em cursos e movimentos sem direção",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 max-w-xl mx-auto text-center">
            <p className="text-foreground font-bold text-lg mb-2 text-balance">
              Você não precisa estar em transição.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg text-balance">
              Mas se já sabe que quer mudança, o melhor momento para estruturar o próximo passo é antes que algo dê errado.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 mt-10">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick} className="cursor-pointer w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/85 text-accent-foreground font-bold text-lg sm:text-xl px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-2xl shadow-accent/25 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                GARANTIR MINHA VAGA
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline underline-offset-4 hover:opacity-80 transition-opacity">
              Prefiro conversar no WhatsApp
            </a>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-balance">
            O erro não é só decidir errado.
            <br />
            É saber que precisa mudar e continuar sem um plano concreto.
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6 text-left max-w-2xl mx-auto">
            <p>
              Em carreiras seniores, o custo não vem de uma vez.
            </p>
            <p>
              Ele aparece em desgaste.
              <br />Em oportunidades perdidas.
              <br />Em decisões adiadas.
              <br />Em investimento que não muda o que realmente importa.
            </p>
            <p>
              Muita gente só para quando algo dá errado.
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

      {/* ═══════════ 4. DEPOIMENTO CARLA NEGRÃO ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Executivas que estavam paradas há meses tomaram decisões em uma única sessão.
            </h2>
          </div>
          <div className="bg-background border border-border rounded-2xl p-8 md:p-10 relative">
            <Quote className="w-10 h-10 text-accent/30 absolute top-6 left-6" />
            <div className="pt-8 space-y-4">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                "Saí da paralisia da executiva bem-sucedida à beira do burnout e abri minha consultoria."
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-bold text-foreground">Carla Negrão</p>
              <p className="text-muted-foreground text-sm sm:text-base">Ex-executiva de Multinacional | Fundadora, CN Food Consulting</p>
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

      {/* ═══════════ 5. O QUE ACONTECE EM 6 HORAS ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            Você sai com clareza sobre o que está travando sua carreira hoje.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              "Define o próximo movimento com critério",
              "Elimina caminhos que parecem bons, mas não fazem sentido",
              "Estrutura uma decisão com base estratégica",
              "Sai com um plano de 30 dias para ação",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-xl p-6 text-left hover:shadow-md transition-shadow"
              >
                <span className="text-accent font-display text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-foreground text-base sm:text-lg mt-3">{item}</p>
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

          <div className="flex flex-col items-center gap-3">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick} className="cursor-pointer w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/85 text-accent-foreground font-bold text-lg sm:text-xl px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-2xl shadow-accent/25 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                GARANTIR MINHA VAGA
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline underline-offset-4 hover:opacity-80 transition-opacity">
              Prefiro conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-secondary">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 6. O QUE VOCÊ LEVA ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12 text-balance">
            Ao final da imersão, você leva:
          </h2>
          <ul className="space-y-5 max-w-xl mx-auto">
            {[
              "Uma decisão clara sobre seu próximo movimento",
              "Um diagnóstico objetivo do que está travando sua carreira",
              "Um mapa dos caminhos possíveis com análise estratégica",
              "Um plano de 30 dias para sair da intenção e ir para ação",
              "Clareza sobre o que parar de fazer",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-foreground">
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

      {/* Midpoint sentinel for scroll tracking */}
      <div ref={midpointRef} aria-hidden="true" />

      {/* ═══════════ 7. PROVA DE CONSEQUÊNCIA ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-balance">
            O problema não é falta de capacidade.
            <br />
            É excesso de caminho sem critério.
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6 max-w-2xl mx-auto">
            <p>
              Você pode continuar estudando.
              <br />Pode esperar a próxima oportunidade.
            </p>
            <p>
              Mas isso não garante direção.
            </p>
            <p className="font-bold text-foreground">
              O que muda uma carreira sênior não é consumir mais.
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

      {/* ═══════════ 8. SOBRE A FERNANDA ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14 text-balance">
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
              <div className="text-lg sm:text-xl leading-relaxed text-muted-foreground space-y-4">
                <p>
                  26 anos dentro do sistema corporativo —{" "}
                  <strong className="text-foreground">Coca-Cola, Cargill, Kraft Heinz, Kimberly-Clark e MBRF</strong>.
                </p>
                <p>
                  Atuou em posições de liderança, diretoria e C-level internacional, conduzindo equipes em 15 países.
                </p>
                <p>
                  Já realizou 23 transições profissionais reais na própria carreira.
                </p>
                <p className="font-bold text-foreground text-balance">
                  Não fala de carreira de fora.
                  <br />Tomou essas decisões de dentro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-background">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 9. DEPOIMENTO JULIANA ZOBARAN ═══════════ */}
      <section className="relative bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Executivas que estavam paradas há meses tomaram decisões em uma única sessão.
            </h2>
          </div>
          <div className="bg-background border border-border rounded-2xl p-8 md:p-10 relative">
            <Quote className="w-10 h-10 text-accent/30 absolute top-6 left-6" />
            <div className="pt-8 space-y-4">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                "Ganhei estrutura, posicionamento e passei a atrair as oportunidades certas."
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-bold text-foreground">Juliana Zobaran</p>
              <p className="text-muted-foreground text-sm sm:text-base">Diretora para América Latina</p>
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

      {/* ═══════════ 10. INVESTIMENTO ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
            Investimento
          </h2>

          <div className="bg-secondary rounded-xl p-6 mb-8 max-w-xl mx-auto text-left">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-balance">
              Uma sessão individual com uma ex-diretora executiva pode custar entre{" "}
              <strong className="text-foreground">R$ 3.000 e R$ 10.000</strong>.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-4 text-balance">
              Aqui, você participa de um dia inteiro de decisão estratégica, com aplicação direta no seu contexto:
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
            </p>
          </div>

          <CountdownTimer />

          <div className="flex flex-col items-center gap-3">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick} className="cursor-pointer w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/85 text-accent-foreground font-bold text-lg sm:text-xl px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-2xl shadow-accent/25 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                GARANTIR MINHA VAGA
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline underline-offset-4 hover:opacity-80 transition-opacity">
              Prefiro conversar no WhatsApp
            </a>
          </div>

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

      {/* Divisor */}
      <div className="flex items-center justify-center py-6 bg-background">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* ═══════════ 11. GARANTIA ═══════════ */}
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

      {/* ═══════════ 12. CTA FINAL ═══════════ */}
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
          <div className="flex flex-col items-center gap-3">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick} className="cursor-pointer w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/85 text-accent-foreground font-bold text-lg sm:text-xl px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-2xl shadow-accent/25 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                GARANTIR MINHA VAGA
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent underline underline-offset-4 hover:opacity-80 transition-opacity">
              Prefiro conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Bottom sentinel for scroll tracking */}
      <div ref={bottomRef} aria-hidden="true" />

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
      {/* ═══════════ BARRA FIXA MOBILE ═══════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background border-t border-border px-4 py-3 shadow-2xl">
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick} className="cursor-pointer block">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/85 text-accent-foreground font-bold text-base w-full py-6 rounded-lg shadow-lg tracking-wide"
          >
            GARANTIR MINHA VAGA
          </Button>
        </a>
      </div>
    </main>
  );
};

export default Index;
