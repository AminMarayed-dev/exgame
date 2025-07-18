import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Social Networks Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary mb-4">
              شبکه‌های اجتماعی
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center text-foreground hover:text-primary transition-colors duration-200 group"
              >
                <span className="text-primary mr-2">📱</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  اینستاگرام
                </span>
              </a>
              <a
                href="#"
                className="flex items-center text-foreground hover:text-primary transition-colors duration-200 group"
              >
                <span className="text-primary mr-2">🐦</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  توییتر
                </span>
              </a>
              <a
                href="#"
                className="flex items-center text-foreground hover:text-primary transition-colors duration-200 group"
              >
                <span className="text-primary mr-2">💬</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  تلگرام
                </span>
              </a>
              <a
                href="#"
                className="flex items-center text-foreground hover:text-primary transition-colors duration-200 group"
              >
                <span className="text-primary mr-2">📞</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </span>
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary mb-4">
              پشتیبانی
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                مرکز راهنما
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                سوالات متداول
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                تماس با ما
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                قوانین و مقررات
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary mb-4">خدمات</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                تسویه حساب فوری
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                خرید و فروش رمزارز
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                پرداخت بین‌المللی
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                کیف پول سخت‌افزاری
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary mb-4">
              درباره ما
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                معرفی ما
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                امنیت و اعتبار
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                بلاگ
              </a>
              <a
                href="#"
                className="block text-foreground hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform"
              >
                فرصت‌های شغلی
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-right mb-4 md:mb-0">
              <p className="text-foreground/80 text-sm">
                © ۲۰۲۴ تمامی حقوق محفوظ است.
              </p>
            </div>
            <div className="flex space-x-6 space-x-reverse">
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
              >
                حریم خصوصی
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
              >
                شرایط استفاده
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
