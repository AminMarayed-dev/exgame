import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Download, Smartphone, QrCode } from "lucide-react";
import foxIcon from "../../../assets/icons/Dariya_Logo.svg";

function LinkDownload() {
  // Sample download URL - replace with your actual app download link
  const downloadUrl = "https://fa.exdariya.com/download/dariyaEx.apk";

  // QR code generation URL using qr-server.com (free service)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    downloadUrl
  )}&bgcolor=121212&color=FFA726`;

  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>

      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5"
          >
            <div className="flex items-center justify-center w-full h-full bg-background rounded-full">
              <Download className="w-6 h-6 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            دانلود
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {" "}
              اپلیکیشن داریا
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            تمامی خدمات سازمان صرافی داریا در دستان شما آســـان تــــر، بـا
            اپلیکیشــن داریا
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-center lg:text-right"
          >
            <div className="relative inline-block">
              {/* QR Code Container */}
              <div className="relative p-6 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

                <div className="relative">
                  <img
                    src={qrCodeUrl}
                    alt="QR Code for Download"
                    className="w-48 h-48 mx-auto rounded-2xl"
                  />

                  {/* Fox icon overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg p-2 shadow-lg">
                    <Image
                      src={foxIcon}
                      alt="Fox Icon"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* QR Code Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 flex items-center justify-center gap-2 text-gray-400"
              >
                <QrCode className="w-5 h-5" />
                <span className="text-lg font-medium">اسکن کن و دانلود کن</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Download Button Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="space-y-8"
          >
            {/* Features List */}
            <div className="space-y-4">
              {[
                "🔥 سریع تر از همیشه ارز دیجیتال خرید و فروش کنید.",
                "🔥 مطمئن تر از همیشه پرداخت های بین المللی خود را انجام دهید.",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300 text-lg"
                >
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-4"
            >
              <Button
                onClick={handleDownload}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-black font-bold text-lg px-8 py-3 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                startContent={<Download className="w-6 h-6" />}
                endContent={<Smartphone className="w-6 h-6" />}
              >
                دانلود مستقیم اپلیکیشن
              </Button>

              <p className="mt-4 text-sm text-gray-500 text-center sm:text-right">
                سازگار با همه دستگاه‌های اندرویدی و iOS
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700"
            >
              {[
                { value: "50K+", label: "دانلود" },
                { value: "4.8", label: "امتیاز" },
                { value: "24/7", label: "پشتیبانی" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LinkDownload;
