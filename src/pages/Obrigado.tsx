import { useEffect } from "react";
import { CheckCircle, Calendar, Clock, MapPin } from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    lintrk?: (...args: any[]) => void;
  }
}

const Obrigado = () => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', { currency: 'BRL', value: 1497 });
    }
    if (window.lintrk) {
      window.lintrk('track', { conversion_id: 19394961 });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Confirmation icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="font-display text-3xl md:text-4xl text-foreground font-bold">
            Sua vaga está confirmada!
          </h1>
          <p className="text-muted-foreground text-lg">
            Parabéns pela decisão de investir no seu próximo passo. Nos vemos em breve!
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-2">
            <Calendar className="w-6 h-6 text-primary mx-auto" />
            <p className="text-sm text-muted-foreground">Data</p>
            <p className="text-foreground font-semibold text-lg">10 de maio</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 space-y-2">
            <Clock className="w-6 h-6 text-primary mx-auto" />
            <p className="text-sm text-muted-foreground">Horário</p>
            <p className="text-foreground font-semibold text-lg">9h às 15h</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 space-y-2">
            <MapPin className="w-6 h-6 text-primary mx-auto" />
            <p className="text-sm text-muted-foreground">Formato</p>
            <p className="text-foreground font-semibold text-lg">Presencial em SP</p>
          </div>
        </div>

        {/* Next steps */}
        <div className="rounded-lg border border-border bg-card p-8 text-left space-y-6">
          <h2 className="font-display text-xl text-foreground font-bold text-center">
            O que acontece agora?
          </h2>
          <div className="space-y-4">
            {[
              { step: 1, text: "Você receberá um e-mail de confirmação com todos os detalhes da imersão." },
              { step: 2, text: "Alguns dias antes do evento, enviaremos o endereço exato e orientações de preparação." },
              { step: 3, text: "No dia, chegue com 15 minutos de antecedência para acolhimento e networking." },
            ].map(({ step, text }) => (
              <div key={step} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm">
                  {step}
                </span>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border">
          <p className="text-muted-foreground text-sm">
            Com carinho,
          </p>
          <p className="text-foreground font-display text-lg font-bold">
            Fernanda Moura
          </p>
          <p className="text-muted-foreground text-xs">
            Executive Coach & Mentora de Carreira
          </p>
        </div>
      </div>
    </div>
  );
};

export default Obrigado;
