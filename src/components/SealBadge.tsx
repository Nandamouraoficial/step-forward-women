import { motion } from "framer-motion";

const SealBadge = () => (
  <motion.div
    initial={{ scale: 0, rotate: 0, opacity: 0 }}
    whileInView={{ scale: 1, rotate: -12, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
    className="absolute top-6 left-4 sm:top-8 sm:left-6 md:top-10 md:left-10 z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-[3px] border-accent ring-2 ring-accent/40 ring-offset-2 ring-offset-transparent flex items-center justify-center text-center shadow-lg shadow-accent/20 bg-background/90"
  >
    <p className="text-accent uppercase text-[8px] sm:text-[10px] md:text-xs font-bold font-body tracking-wider leading-tight px-2 sm:px-3">
      Edição<br />Exclusiva<br />para<br />Mulheres
    </p>
  </motion.div>
);

export default SealBadge;
