import { motion } from "framer-motion";
import DariyaLogo from "../../assets/icons/fox.svg";  

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background with gradient mesh */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated background waves */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(45deg, transparent 40%, rgba(255, 167, 38, 0.3) 50%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Outer rotating ring */}
        <div className="relative mb-8 sm:mb-12">
          <motion.div
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-primary/20 absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner pulsing ring */}
          <motion.div
            className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full border-2 border-secondary/30 absolute inset-2"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo container with sophisticated animation */}
          <motion.div
            className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [-2, 2, -2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={DariyaLogo}
                alt="Dariya Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 filter drop-shadow-2xl"
              />

              {/* Glowing effect around logo */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Brand name with elegant typography */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            صرافی داریا
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base text-foreground/60 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            بارگذاری صفحه...
          </motion.p>
        </motion.div>

        {/* Modern loading bar */}
        <div className="w-48 sm:w-64 lg:w-80 h-1 bg-foreground/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading percentage */}
        <motion.div
          className="mt-4 text-xs sm:text-sm text-foreground/50 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            لطفا صبر کنید...
          </motion.span>
        </motion.div>
      </div>

      {/* Floating orbs for ambient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-primary/40 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 800),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 600),
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 800),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 600),
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Corner decorative elements */}
      <motion.div
        className="absolute top-4 left-4 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 border-l-2 border-t-2 border-primary/30 rounded-tl-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />

      <motion.div
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 border-r-2 border-b-2 border-secondary/30 rounded-br-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </div>
  );
};

export default Loading;
