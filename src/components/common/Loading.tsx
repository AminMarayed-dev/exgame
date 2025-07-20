import { motion } from "framer-motion";
import DariyaLogo from "../../assets/icons/fox.svg";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 800),
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 800),
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(45deg, #ff7c00, #ff9500, #ffb800, #ff7c00)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container with enhanced design */}
        <div className="relative mb-12">
          {/* Outer glowing ring */}
          <motion.div
            className="absolute inset-0 w-48 h-48 rounded-full border-2 border-orange-400/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle rotating ring */}
          <motion.div
            className="absolute inset-4 w-40 h-40 rounded-full border-2 border-orange-500/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner pulsing ring */}
          <motion.div
            className="absolute inset-8 w-32 h-32 rounded-full border-2 border-orange-300/40"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo container with proper sizing */}
          <motion.div
            className="relative w-48 h-48 flex items-center justify-center"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          >
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-orange-500/30 to-orange-600/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Logo with floating animation */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [-3, 3, -3],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={DariyaLogo}
                alt="Dariya Logo"
                className="w-24 h-24 filter drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(255, 124, 0, 0.5))",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Brand section with improved typography */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {/* Main title */}
          <motion.h1
            className="text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            روباه شنی
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-300 font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            تجربه‌ای نوین در دنیای ارز دیجیتال
          </motion.p>
        </motion.div>

        {/* Enhanced loading indicator */}
        <div className="w-80 relative mb-8">
          {/* Background track */}
          <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Animated progress bar */}
            <motion.div
              className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full relative"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>

          {/* Loading dots */}
          <div className="flex justify-center mt-6 space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-orange-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p
            className="text-gray-400 text-base font-medium"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            در حال بارگذاری...
          </motion.p>
        </motion.div>
      </div>

      {/* Corner decorative elements with glow */}
      <motion.div
        className="absolute top-8 left-8 w-24 h-24"
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        <div className="w-full h-full border-l-3 border-t-3 border-orange-400/40 rounded-tl-2xl relative">
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 w-24 h-24"
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        <div className="w-full h-full border-r-3 border-b-3 border-orange-400/40 rounded-br-2xl relative">
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" />
        </div>
      </motion.div>

      {/* Ambient light effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loading;
