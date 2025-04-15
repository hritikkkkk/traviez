import { motion } from "framer-motion";

export default function Phone() {
  return (
    <motion.div
      className="relative flex justify-center lg:justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Modern glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[500px] md:w-[320px] md:h-[580px] rounded-[40px] bg-gradient-to-br from-orange-500/40 to-red-600/40 blur-[60px] opacity-70"></div>

      {/* Phone container with animations */}
      <motion.div
        className="relative z-10"
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2,
        }}
      >
        {/* Subtle floating animation */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Phone frame with shadow */}
          <div className="relative drop-shadow-2xl">
            <motion.img
              src="https://www.traviez.com/iPhone%2013.png"
              alt="Traviez App on iPhone"
              className="relative z-10 max-w-[280px] md:max-w-[320px] h-auto"
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
              }}
            />

            {/* Subtle screen reflection */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent rounded-t-[45px] z-20"
              animate={{
                opacity: [0.3, 0.15, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Accent light dots */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-orange-400/60 blur-md"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-red-500/60 blur-md"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
