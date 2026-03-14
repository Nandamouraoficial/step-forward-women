import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Monitor, Users, Shield } from "lucide-react";
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
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        {/* Selo circular no canto superior esquerdo do hero */}
        <SealBadge />

        <div className="relative container mx-auto px-4 sm:px-6 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32">

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-foreground text-center lg:text-left">
              <p className="text-lg md:text-xl font-light opacity-80 mb-4 max-w-lg mx-auto lg:mx-0">
                Você já tem o histórico.
                <br />
                O que falta é a decisão sobre o próximo movimento.
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                IMERSÃO
                <br />
                O PRÓXIMO PASSO
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
                Um dia de trabalho estratégico para executivas que chegaram longe
                <br />
                — e precisam definir, com clareza, para onde vão agora.
              </p>
              <p className="text-base font-semibold mb-2 max-w-lg mx-auto lg:mx-0">
                Para executivas que já chegaram longe na carreira — mas sabem que o próximo passo não pode ser improvisado.
              </p>
              <p className="text-sm italic opacity-70 mb-8 max-w-lg mx-auto lg:mx-0">
                Grupo limitado para permitir discussão estratégica aprofundada entre executivas.
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
                    CONFIRMAR MINHA VAGA
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-8 text-sm opacity-80">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 12 de abril</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 9h às 15h</span>
                <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4" /> Online e ao vivo</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 15 vagas</span>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-1 flex flex-col items-center lg:items-end">
              <img
                src="/images/foto_terno.jpeg"
                alt="Fernanda Moura — Estrategista Executiva de Carreira"
                className="w-full max-w-md lg:max-w-lg max-h-[400px] rounded-2xl shadow-2xl object-cover object-[center_15%]"
                loading="eager"
              />
              <div className="text-center mt-8">
                <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                  Se você já decidiu internamente,
                  <br />
                  esta é a sala onde essa decisão ganha estrutura.
                </p>
                <a onClick={handleCTAClick} className="cursor-pointer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    GARANTIR MINHA VAGA
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO ESTA IMERSÃO É PARA VOCÊ SE */}
      <section className="relative bg-secondary py-20 md:py-28">
        <SealBadge />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Esta imersão é para você se:
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto">
            {[
              "Ocupa uma posição de liderança ou influência no mundo corporativo",
              "Sente que sua carreira chegou a um ponto de desalinhamento",
              "Percebe que continuar crescendo já não resolve a questão central",
              "Sabe que precisa estruturar o próximo movimento com clareza",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Divisor visual */}
      <div className="flex items-center justify-center py-6 bg-secondary">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      <section className="relative bg-background py-20 md:py-28">
        <SealBadge />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
            A realidade que você já percebeu
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6">
            <p>
              Você já provou resultado.
              <br />
              Já liderou.
              <br />
              Já sustentou pressão.
              <br />
              Já ocupou espaço.
            </p>
            <p className="font-bold text-foreground">
              O que começa a limitar o avanço não é preparo.
              <br />
              É desalinhamento.
            </p>
            <p>
              O cargo mudou.
              <br />
              A remuneração mudou.
              <br />
              Mas a sensação de estar no lugar certo — essa não veio.
            </p>
            <p>
              E quanto mais madura sua trajetória,
              <br />
              <strong className="text-foreground">mais caro fica permanecer onde já não faz sentido.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO PARA QUEM É */}
      <section className="relative bg-secondary py-20 md:py-28">
        <SealBadge />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Para quem é
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-10">
            Essa imersão é para mulheres que:
          </p>
          <ul className="space-y-4 max-w-xl mx-auto mb-12">
            {[
              "Ocupam posições de liderança ou influência",
              "Possuem trajetória consolidada",
              "Sabem que precisam redefinir o próximo movimento",
              "Não querem mais crescer por impulso",
              "Querem estruturar o próximo passo com inteligência",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-muted-foreground italic">
            Se você ainda está avaliando se deve ou não mudar,
            <br />
            esta não é a hora certa — e tudo bem.
          </p>
          <p className="text-center text-foreground font-bold text-lg mt-8">
            Executivas que sabem que já chegou a hora de decidir — mas não querem fazer isso sozinhas.
          </p>
        </div>
      </section>

      {/* BLOCO RESULTADO */}
      <section className="relative bg-background py-20 md:py-28">
        <SealBadge />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            O que acontece em 6 horas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              "Analisa seu momento com profundidade",
              "Identifica o desalinhamento real",
              "Define o próximo movimento",
              "Estrutura um plano inicial de 30 dias — apoiado por análise estratégica e IA aplicada.",
            ].map((item, i) => (
              <div
                key={item}
                className="border border-border rounded-xl p-6 text-left hover:shadow-md transition-shadow"
              >
                <span className="text-accent font-display text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-foreground text-lg mt-3">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl py-8 px-6 mb-10">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              ✦ VOCÊ SAI COM A DECISÃO CLARA — E O PRÓXIMO PASSO ESTRUTURADO. ✦
            </p>
            <p className="text-muted-foreground mt-4">
              Sem dramatização. Sem autoajuda. Sem discurso motivacional.
            </p>
            <p className="text-foreground font-bold mt-2">
              Apenas decisão estratégica estruturada.
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

      {/* Divisor visual */}
      <div className="flex items-center justify-center py-6 bg-background">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* BLOCO O QUE VOCÊ LEVA — REESCRITO */}
      <section className="relative bg-secondary py-20 md:py-28">
        <SealBadge />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            O que você leva ao final da imersão
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Resultados concretos — não teoria, não inspiração.
          </p>
          <ul className="space-y-5 max-w-xl mx-auto">
            {[
              { title: "Uma decisão tomada", desc: "promoção, reposicionamento ou transição — com critérios claros, não por impulso" },
              { title: "Diagnóstico escrito", desc: "do que está travando seu avanço hoje, com linguagem estratégica, não emocional" },
              { title: "Mapa dos caminhos possíveis", desc: "com prós e contras analisados para o seu contexto específico" },
              { title: "Plano de 30 dias", desc: "com as primeiras ações concretas para você começar a executar na segunda-feira seguinte" },
              { title: "Clareza sobre o que parar de fazer", desc: "às vezes tão importante quanto o que começar — e mais difícil de enxergar sozinha" },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span className="text-lg"><strong>{item.title}</strong> — {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Divisor visual */}
      <div className="flex items-center justify-center py-6 bg-secondary">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* BLOCO SOBRE FERNANDA — REESCRITO */}
      <section className="relative bg-background py-20 md:py-28">
        <SealBadge />
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
            Sobre a condução
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
              <p className="text-accent font-bold mb-1">
                Estrategista Executiva de Carreira
              </p>
              <p className="text-muted-foreground text-base italic mb-6">
                Coautora do livro Mulheres que Transformam
              </p>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Fernanda passou 26 anos dentro do sistema corporativo —{" "}
                  <strong className="text-foreground">Coca-Cola, Cargill, Kraft Heinz, Kimberly-Clark e BRF</strong>{" "}
                  — chegando a Diretora Executiva para América Latina e América Central.
                </p>
                <p>
                  Em dezembro de 2021, fez o que muitas executivas pensam mas não executam:{" "}
                  <strong className="text-foreground">parou. Intencionalmente.</strong>{" "}
                  Para decidir o próximo passo com método — não com impulso.
                </p>
                <p>
                  Esse processo — estruturado, estratégico e sem autoajuda — é o que ela traz para cada executiva que passa pela imersão.
                </p>
                <p>
                  Quem conduz essa imersão não fala de carreira de fora.
                  <br />
                  <strong className="text-foreground">
                    Ela tomou essas decisões de dentro. E sobreviveu a 23 transições profissionais para contar o que funciona.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO FORMATO */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--hero-gradient)", opacity: 0.95 }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center text-foreground">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">Formato</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {[
              { icon: Calendar, label: "12 de abril" },
              { icon: Clock, label: "9h às 15h" },
              { icon: Monitor, label: "Online e ao vivo" },
              { icon: Users, label: "15 mulheres" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <Icon className="w-8 h-8 opacity-80" />
                <span className="text-lg font-bold">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-lg opacity-80 max-w-xl mx-auto mb-4">
            O grupo reduzido permite profundidade e confidencialidade —
            o que não acontece em eventos abertos ou superficiais.
          </p>
          <p className="text-base font-semibold opacity-90 max-w-xl mx-auto">
            Grupo reduzido para permitir discussão estratégica real entre executivas — com profundidade e confidencialidade.
          </p>
        </div>
      </section>

      {/* Divisor visual */}
      <div className="flex items-center justify-center py-6 bg-background">
        <span className="block w-16 h-px bg-accent/30" />
        <span className="mx-3 text-accent/40 text-sm">✦</span>
        <span className="block w-16 h-px bg-accent/30" />
      </div>

      {/* BLOCO INVESTIMENTO — COM ANCORAGEM E GARANTIA */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Investimento
          </h2>

          {/* Ancoragem de preço */}
          <div className="bg-secondary rounded-xl p-6 mb-8 max-w-xl mx-auto text-left">
            <p className="text-muted-foreground text-base leading-relaxed">
              Uma sessão individual de estratégia de carreira com uma ex-Diretora Executiva C-Level para América Latina da Coca-Cola, Kraft Heinz, BRF, Cargill e Kimberly-Clark custa entre{" "}
              <strong className="text-foreground">R$3.000 e R$5.000</strong>.
              <br /><br />
              Esta imersão reúne o trabalho de um dia inteiro — com profundidade individual dentro de um grupo de no máximo 15 executivas — por:
            </p>
          </div>

          <div className="bg-secondary rounded-2xl py-10 px-8 mb-8 inline-block">
            <p className="font-body text-primary text-2xl md:text-3xl font-semibold">
              R$ 1.497
            </p>
            <p className="text-muted-foreground text-sm mt-2">ou 12x de R$ 139,90</p>
          </div>

          <CountdownTimer />

          {/* Garantia */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8 max-w-xl mx-auto flex items-start gap-4 text-left">
            <Shield className="w-8 h-8 text-accent shrink-0 mt-1" />
            <div>
              <p className="font-bold text-foreground text-lg mb-2">Garantia de resultado</p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Se ao final das 6 horas você não sair com uma decisão clara sobre o seu próximo movimento e um plano estruturado para os próximos 30 dias, eu devolvo 100% do seu investimento. Sem burocracia, sem perguntas.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mb-10">
            Não é um evento. É uma decisão estratégica sobre o seu próximo movimento.
          </p>
          <a onClick={handleCTAClick} className="cursor-pointer">
            <Button
              size="lg"
              className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              CONFIRMAR MINHA VAGA
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Vagas limitadas a 15 participantes — o grupo fecha quando completar.
          </p>
        </div>
      </section>

      {/* BLOCO FINAL */}
      <section className="relative overflow-hidden pt-40 sm:pt-48 md:pt-64 pb-12">
        <img
          src="/images/final-equipe.png"
          alt="Fernanda Moura com equipe"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative container mx-auto px-4 sm:px-6 max-w-3xl text-center text-foreground flex flex-col justify-end min-h-[320px] sm:min-h-[400px]">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Se você já decidiu internamente,
          </h2>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-10 opacity-90">
            esta é a sala onde essa decisão ganha estrutura.
          </h3>
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
          <p className="text-xs opacity-50 mt-4">© 2026O Próximo Passo</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
