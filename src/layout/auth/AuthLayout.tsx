import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { ArrowLeft } from "lucide-react";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Beautiful Header */}
      <header className="relative bg-gradient-to-r from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] border-b border-divider/20 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        <div className="relative container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link
              to="/"
              className="flex items-center group transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="relative">
                  <img
                    src="/Dariya_Logo.svg"
                    alt="Dariya Logo"
                    className="w-10 h-10 transition-transform duration-300 group-hover:rotate-6"
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <img
                    src="/Dariya_Text.svg"
                    alt="Dariya"
                    className="h-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </Link>

            {/* Back to Home Button */}
            <Button
              as={Link}
              to="/"
              variant="ghost"
              className="group bg-background/10 hover:bg-primary/10 border border-divider/30 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
              startContent={
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              }
            >
              <span className="hidden sm:inline">بازگشت به خانه</span>
              <span className="sm:hidden">خانه</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-md">
          {/* Content Card with Beautiful Background */}
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>

            {/* Main content container */}
            <div className="relative bg-background/60 backdrop-blur-xl border border-divider/20 rounded-2xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl"></div>
              <div className="relative">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
