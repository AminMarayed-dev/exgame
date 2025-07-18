import { Image } from "@heroui/react";
import { motion } from "framer-motion";

function Introduction() {
  return (
    <section className="flex items-center justify-center px-4 py-12 mt-4">
      <div className="max-w-7xl w-full">
        {/* Desktop Layout: Image left, Content right */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Content - Right side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl font-bold text-foreground leading-tight"
              >
                Welcome to Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {" "}
                  Amazing Platform
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-foreground leading-relaxed"
              >
                Discover the future of digital experiences with our cutting-edge
                platform. We combine innovation with simplicity to create
                something truly extraordinary that will transform the way you
                interact with technology.
              </motion.p>
            </div>
          </motion.div>

          {/* Image - Left side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                alt="Introduction Hero Image"
                src="/src/assets/images/change.webp"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout: Image first, then content */}
        <div className="md:hidden space-y-8">
          {/* Image - First on mobile */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                alt="Introduction Hero Image"
                src="/src/assets/images/change.webp"
                width={350}
                height={280}
                className="rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            </div>
          </motion.div>

          {/* Content - Below image on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center space-y-6"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight"
              >
                Welcome to Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {" "}
                  Amazing Platform
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
              >
                Discover the future of digital experiences with our cutting-edge
                platform. We combine innovation with simplicity to create
                something truly extraordinary.
              </motion.p>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;