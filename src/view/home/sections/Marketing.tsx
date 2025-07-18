import { motion } from "framer-motion";

function Marketing() {
  const marketingItems = [
    {
      id: 1,
      title: "به قدرت میرسید",
      description: "با استفاده از تکنولوژی‌های پیشرفته",
      icon: "🚀",
    },
    {
      id: 2,
      title: "انواع رمز ارز",
      description: "دسترسی به بیش از 100 رمزارز مختلف",
      icon: "💎",
    },
    {
      id: 3,
      title: "صرافی ارز دیجیتال",
      description: "معامله امن و سریع در بازار رمزارز",
      icon: "⚡",
    },
  ];

  const CircleItem = ({
    item,
    index,
  }: {
    item: (typeof marketingItems)[0];
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{
        scale: 1.1,
        borderColor: "#FFD54F",
      }}
      className="relative group cursor-pointer"
    >
      <div className="w-72 h-72 rounded-full border-4 border-primary/30 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 transition-all duration-300 hover:border-secondary hover:shadow-2xl hover:shadow-primary/25">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-6xl mb-4"
        >
          {item.icon}
        </motion.div>
        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Animated border effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-transparent"
        whileHover={{
          borderColor: "#FFA726",
          boxShadow: "0 0 30px rgba(255, 167, 38, 0.4)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  const MobileMarketingCard = ({
    item,
    index,
  }: {
    item: (typeof marketingItems)[0];
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="w-full max-w-xs mx-auto"
    >
      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg shadow-primary/10 border border-primary/20">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-6xl mb-4"
        >
          {item.icon}
        </motion.div>
        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            سایت صرافی داریا
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        {/* Desktop Version - Three Circles */}
        <div className="hidden md:flex justify-center items-center gap-12 lg:gap-16">
          {marketingItems.map((item, index) => (
            <CircleItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Mobile Version - Card Stack */}
        <div className="md:hidden px-4">
          <div className="space-y-6">
            {marketingItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="w-full"
              >
                <MobileMarketingCard item={item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
