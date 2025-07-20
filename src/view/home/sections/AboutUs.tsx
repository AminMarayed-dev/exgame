import { motion } from "framer-motion";

function AboutUs() {
  const technologies = [
    {
      icon: "🤖",
      title: "هوش مصنوعی",
      subtitle: "AI & Machine Learning",
      description: "پیاده‌سازی الگوریتم‌های پیشرفته یادگیری ماشینی",
    },
    {
      icon: "🔗",
      title: "بلاک‌چین",
      subtitle: "Blockchain Technology",
      description: "توسعه سیستم‌های امن و غیرمتمرکز",
    },
    {
      icon: "🌐",
      title: "اینترنت اشیا",
      subtitle: "IoT & AR Solutions",
      description: "اتصال دستگاه‌ها و واقعیت افزوده",
    },
    {
      icon: "🛡️",
      title: "امنیت سایبری",
      subtitle: "Cybersecurity",
      description: "محافظت جامع از داده‌ها و زیرساخت‌ها",
    },
  ];

  const services = [
    { title: "سیستم‌های سازمانی", subtitle: "MIS & ERP" },
    { title: "مدیریت فرآیندها", subtitle: "BPMS" },
    { title: "سامانه‌های مالی", subtitle: "Financial Systems" },
    { title: "صرافی آنلاین", subtitle: "Digital Exchange" },
  ];

  return (
    <section
      id="about-us"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5"></div>
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-6">
            درباره داریا
          </motion.h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-32"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent flex-1 max-w-32"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            تبادل و تحلیل هوشمند با نوآوری در فناوری‌های پیشرفته
          </p>
        </motion.div>

        {/* Main Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed text-center font-light">
              تبادل و تحلیل هوشمند داریا با تکیه بر توان علمی و تجربه چند
              دهه‌ای، بستری نوآورانه برای ارائه راهکارهای پیشرفته در حوزه فناوری
              اطلاعات و هوش مصنوعی فراهم کرده است.
            </p>
          </div>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-bold text-center text-foreground mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              تکنولوژی‌های پیشرفته
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 backdrop-blur-xl rounded-2xl p-8 border border-primary/30 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 h-full">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-6xl mb-6 inline-block"
                    >
                      {tech.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {tech.title}
                    </h4>
                    <p className="text-primary/80 text-sm font-medium mb-4">
                      {tech.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl rounded-2xl p-10 border border-primary/20 h-full">
              <h3 className="text-3xl font-bold text-right mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  رسالت ما
                </span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed text-right mb-8">
                رسالت ما توسعه محصولات نرم‌افزاری و سیستم‌های یکپارچه‌ای است که
                کسب‌وکارها را در مسیر تحول دیجیتال و بهره‌وری هوشمندانه همراهی
                می‌کند.
              </p>

              {/* Services List */}
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl p-4 text-center border border-secondary/30"
                  >
                    <h4 className="text-sm font-bold text-foreground mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-400">{service.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Research & Development */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 backdrop-blur-xl rounded-2xl p-10 border border-secondary/20 h-full">
              <h3 className="text-3xl font-bold text-right mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  تحقیق و توسعه
                </span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed text-right mb-8">
                تحقیق و توسعه قلب تپنده داریاست؛ بخشی که با بهره‌گیری از تیمی
                متخصص، ایده‌های نو را به محصولات واقعی و کاربردی تبدیل می‌کند.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed text-right">
                ما همواره در تلاشیم با استفاده از خط تولید نرم‌افزار (Product
                Line) و رویکرد MDD، محصولات خود را با نیازهای خاص هر سازمان
                تطبیق دهیم.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy & Vision */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                💡
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  فلسفه کاری
                </span>
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed text-right">
              در داریا، باور داریم راه‌حل‌های نرم‌افزاری تنها زمانی موفق خواهند
              بود که به‌طور کامل با نیازهای مشتری هم‌سو باشند؛ از مشاوره تخصصی
              تا تضمین کیفیت، همه مراحل با بالاترین استانداردها انجام می‌شود.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  چشم‌انداز
                </span>
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed text-right">
              پیشرو بودن در خلق ارزش با نوآوری مستمر، توسعه زیرساخت‌های فناورانه
              بومی و ارائه خدماتی که سازمان‌ها را در مسیر رشد و تحول دیجیتال
              یاری کند.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
