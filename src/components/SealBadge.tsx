import { motion } from "framer-motion";

const SealBadge = () => (
  <motion.div
    initial={{ scale: 0, rotate: 0, opacity: 0 }}
    animate={{ scale: 1, rotate: -12, opacity: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
    className="fixed bottom-6 right-3 sm:right-4 z-50 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-[3px] border-accent ring-2 ring-accent/40 ring-offset-2 ring-offset-transparent hidden min-[400px]:flex items-center justify-center text-center shadow-lg shadow-accent/20 bg-background/90 cursor-default"
  >
    <motion.div
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <p className="text-accent uppercase text-[8px] sm:text-[10px] md:text-xs font-bold font-body tracking-wider leading-tight px-2 sm:px-3">
        Edição<br />Exclusiva<br />para<br />Mulheres
      </p>
    </motion.div>
  </motion.div>
);

export default SealBadge;
