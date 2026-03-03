import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-04-12T09:00:00-03:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calcTimeLeft = (): TimeLeft | null => {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n: number) => String(n).padStart(2, "0");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) {
    return (
      <p className="text-primary font-display text-xl font-bold my-6">
        O evento já começou!
      </p>
    );
  }

  const blocks: { value: number; label: string }[] = [
    { value: timeLeft.days, label: "dias" },
    { value: timeLeft.hours, label: "horas" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "seg" },
  ];

  return (
    <div className="flex justify-center gap-3 md:gap-4 my-8">
      {blocks.map(({ value, label }) => (
        <div
          key={label}
          className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[4rem] md:min-w-[5rem] text-center"
        >
          <span
            className="font-display text-lg md:text-2xl text-primary block transition-all duration-300"
            key={value}
          >
            {pad(value)}
          </span>
          <span className="text-muted-foreground text-lg md:text-2xl mt-1 block">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
