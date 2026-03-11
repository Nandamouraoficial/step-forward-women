import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Monitor, Users } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

const CTA_URL = "https://chk.eduzz.com/acxa2eu4";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      {/* Selo fixo lateral */}
      <div className="fixed top-6 right-4 sm:top-8 sm:right-6 md:top-10 md:right-10 z-50 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-[3px] border-accent ring-2 ring-accent/40 ring-offset-2 ring-offset-transparent flex items-center justify-center text-center -rotate-12 shadow-lg shadow-accent/20 bg-background/90 backdrop-blur-sm">
        <p className="text-accent uppercase text-[8px] sm:text-[10px] md:text-xs font-bold font-body tracking-wider leading-tight px-2 sm:px-3">
          Edição<br />Exclusiva<br />para<br />Mulheres
        </p>
      </div>

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="relative container mx-auto px-4 sm:px-6 pt-32 sm:pt-36 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32">

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-foreground text-center lg:text-left">
              <p className="text-lg md:text-xl font-light opacity-80 mb-4 max-w-lg mx-auto lg:mx-0">
                Existe um momento na carreira em que continuar crescendo já não resolve o desalinhamento que você sente.
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                IMERSÃO
                <br />
                O PRÓXIMO PASSO
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
                Você já sabe que precisa decidir.
                <br />
                O que falta não é competência.
                <br />
                <strong className="font-bold">É formalizar o próximo movimento.</strong>
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
                <a href={CTA_URL}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-8 sm:px-12 py-6 sm:py-7 rounded-lg shadow-lg tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    CONFIRMAR MINHA PARTICIPAÇÃO
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
                className="w-full max-w-md lg:max-w-lg max-h-[440px] rounded-2xl shadow-2xl object-cover object-[center_20%]"
                loading="eager"
              />
              <div className="text-center mt-8">
                <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                  Se você já decidiu internamente,
                  <br />
                  esta é a sala onde essa decisão ganha estrutura.
                </p>
                <a href={CTA_URL}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-8 sm:px-12 py-6 sm:py-7 rounded-lg shadow-lg tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    GARANTIR MINHA VAGA
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO REALIDADE */}
      <section className="bg-background py-20 md:py-28">
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
      <section className="bg-secondary py-20 md:py-28">
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
        </div>
      </section>

      {/* BLOCO RESULTADO */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            O que acontece em 6 horas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              "Analisa seu momento com profundidade",
              "Identifica o desalinhamento real",
              "Define o próximo movimento",
              "Estrutura um plano inicial de 30 dias",
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

          <a href={CTA_URL}>
            <Button
              size="lg"
              className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-8 sm:px-12 py-6 sm:py-7 rounded-lg shadow-lg tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              GARANTIR MINHA VAGA
            </Button>
          </a>
        </div>
      </section>

      {/* BLOCO SOBRE FERNANDA */}
      <section className="bg-secondary py-20 md:py-28">
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
              <p className="text-accent font-bold mb-6">
                Estrategista Executiva de Carreira
              </p>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  30 anos de carreira corporativa. 23 transições profissionais.
                  Atuação em 10 empresas, sendo 5 multinacionais.
                </p>
                <p>
                  Experiência construída em organizações como{" "}
                  <strong className="text-foreground">Coca-Cola, Cargill, Kraft Heinz, MBRF e Kimberly-Clark</strong>,
                  onde atuou como Diretora Executiva para a América Latina.
                </p>
                <p>
                  Quem conduz essa imersão não é uma consultora de carreira.
                  <br />
                  <strong className="text-foreground">
                    É alguém que tomou essas decisões de dentro — e aprendeu a estruturá-las.
                  </strong>
                </p>
                <p>
                  Hoje atua como estrategista de movimentação executiva para líderes
                  que precisam tomar decisões de alto impacto.
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
            Grupo pequeno para permitir discussão estratégica real entre executivas.
          </p>
        </div>
      </section>

      {/* BLOCO INVESTIMENTO */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Investimento
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            O custo de permanecer onde já não faz sentido
            costuma ser maior do que qualquer decisão de mudança.
          </p>
          <div className="bg-secondary rounded-2xl py-10 px-8 mb-10 inline-block">
            <p className="font-body text-primary text-2xl md:text-3xl font-semibold">
              R$ 1.497
            </p>
          </div>
          <CountdownTimer />
          <p className="text-muted-foreground mb-10">
            Não é um evento. É uma formalização de posicionamento profissional.
          </p>
          <a href={CTA_URL}>
            <Button
              size="lg"
              className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-8 sm:px-12 py-6 sm:py-7 rounded-lg shadow-lg tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              CONFIRMAR MINHA PARTICIPAÇÃO
            </Button>
          </a>
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
          <a href={CTA_URL}>
            <Button
              size="lg"
              className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-8 sm:px-12 py-6 sm:py-7 rounded-lg shadow-lg tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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
          <p className="text-xs opacity-50 mt-4">© 2025</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
