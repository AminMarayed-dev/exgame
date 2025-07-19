import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Image } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import changeImg from "../../../assets/images/change.webp";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay] = useState(true);

  const sliderData = [
    {
      id: 1,
      title: "تجربه معاملات آسان",
      description:
        "با پلتفرم پیشرفته ما، معاملات رمزارز را با سرعت و امنیت بالا انجام دهید",
      image: changeImg,
      bgColor: "from-primary/20 to-secondary/20",
    },
    {
      id: 2,
      title: "امنیت حرفه‌ای",
      description:
        "دارایی‌های شما با بالاترین استانداردهای امنیتی محافظت می‌شوند",
      image: changeImg,
      bgColor: "from-secondary/20 to-primary/20",
    },
    {
      id: 3,
      title: "پشتیبانی 24/7",
      description:
        "تیم پشتیبانی ما همیشه آماده کمک به شما در هر ساعت از شبانه‌روز است",
      image: changeImg,
      bgColor: "from-primary/15 to-secondary/15",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, sliderData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };


  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>

      {/* Slider Container */}
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center lg:text-right order-2 lg:order-1"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text"
                >
                  {sliderData[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  {sliderData[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    شروع کنید
                  </Button>
                  <Button
                    size="lg"
                    variant="bordered"
                    className="border-primary text-primary font-semibold px-8 py-4 rounded-2xl hover:bg-primary/10 transition-all duration-300"
                  >
                    اطلاعات بیشتر
                  </Button>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sliderData[currentSlide].bgColor} rounded-3xl blur-xl opacity-60`}
                  ></div>
                  <Image
                    src={sliderData[currentSlide].image}
                    alt={sliderData[currentSlide].title}
                    className="relative z-10 w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
                    classNames={{
                      wrapper: "bg-transparent",
                      img: "object-cover w-full h-auto",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-6">
        {/* Dots Indicator */}
        <div className="flex space-x-3">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary scale-125 shadow-lg"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Side Navigation - Desktop Only */}
      <div className="hidden lg:flex">
        <Button
          isIconOnly
          variant="flat"
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-full w-14 h-14"
        >
          <ChevronLeft size={24} />
        </Button>

        <Button
          isIconOnly
          variant="flat"
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-full w-14 h-14"
        >
          <ChevronRight size={24} />
        </Button>
      </div>

    </section>
  );
}

export default Slider;
