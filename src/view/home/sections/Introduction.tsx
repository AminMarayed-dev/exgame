import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import changeImg from "../../../assets/images/change.webp";

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
                مینی‌اپ روباه شنی از
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {" "}
                  صرافی داریا
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                یه مینی‌اپ فوق‌العاده از تیم صرافی داریا که توش نقش مدیرعامل یه
                صرافی رمزارز رو بازی می‌کنی! هر وقت روباه شنی کوچولو روی صفحه
                موبایلت ظاهر شد، سریع روش بزنی تا سکه جمع کنی. بعد با سکه‌هات
                کارت‌های توسعه صرافی بخری و نرخ «درآمد ساعتی»ت رو بالاتر ببری.
                ترکیبی از هیجان، استراتژی و درآمد دیجیتال، حالا با پشتوانه صرافی
                داریا!
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
                src={changeImg}
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
                src={changeImg}
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
                className="text-3xl sm:text-4xl font-bold text-foreground leading-tight"
              >
                مینی‌اپ روباه شنی از
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {" "}
                  صرافی داریا
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
              >
                یه مینی‌اپ فوق‌العاده از تیم صرافی داریا که توش نقش مدیرعامل یه
                صرافی رمزارز رو بازی می‌کنی! هر وقت روباه شنی کوچولو روی صفحه
                موبایلت ظاهر شد، سریع روش بزنی تا سکه جمع کنی. بعد با سکه‌هات
                کارت‌های توسعه صرافی بخری و نرخ «درآمد ساعتی»ت رو بالاتر ببری.
                ترکیبی از هیجان، استراتژی و درآمد دیجیتال، حالا با پشتوانه صرافی
                داریا!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
