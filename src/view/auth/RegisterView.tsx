import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, addToast } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "./schema";
import type { RegisterFormData } from "./schema";

const RegisterView: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // Save user data to mock database
      // const newUser = await userDatabase.create(data);
      // console.log("User registered successfully:", newUser);

      // Show success toast with timeout progress
      console.log(data);
      addToast({
        title: "اطلاعات شما با موفقیت ثبت شد",
        description:
          "کارشناس پس از تایید اطلاعات شما لینک بازی را برای شما ارسال خواهد کرد",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });

      // Redirect to home page after a short delay
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Registration failed:", error);
      // Show error toast
      addToast({
        title: "خطا در ثبت نام",
        description: "لطفاً دوباره تلاش کنید",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });
    }
  };

  return (
    <div className="w-full">
      {/* Welcome Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent mb-3">
          خوش آمدید
        </h1>
        <p className="text-foreground/70 text-sm leading-relaxed">
          برای ثبت نام در بازی داریا فرم زیر را تکمیل کنید
        </p>
      </div>

      {/* Registration Form */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-1">
            ثبت نام
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First Name Input */}

          {/* Last Name Input */}
          <div className="space-y-2">
            <Input
              {...register("phoneNumber")}
              type="text"
              label="شماره موبایل"
              placeholder="شماره موبایل خود را وارد کنید"
              variant="bordered"
              size="lg"
              color={errors.phoneNumber ? "danger" : "default"}
              isInvalid={!!errors.phoneNumber}
              errorMessage={errors.phoneNumber?.message}
              classNames={{
                input: "text-foreground placeholder:text-foreground/40",
                label: "text-foreground/80 font-medium",
                inputWrapper: [
                  "border-divider/40 hover:border-primary/60 focus-within:border-primary",
                  "bg-background/50 backdrop-blur-sm",
                  "transition-all duration-300",
                ],
                errorMessage: "text-right rtl text-xs",
              }}
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Input
              {...register("nationalCode")}
              type="text"
              label="کد ملی"
              placeholder="کد ملی خود را وارد کنید"
              variant="bordered"
              size="lg"
              color={errors.nationalCode ? "danger" : "default"}
              isInvalid={!!errors.nationalCode}
              errorMessage={errors.nationalCode?.message}
              classNames={{
                input: "text-foreground placeholder:text-foreground/40",
                label: "text-foreground/80 font-medium",
                inputWrapper: [
                  "border-divider/40 hover:border-primary/60 focus-within:border-primary",
                  "bg-background/50 backdrop-blur-sm",
                  "transition-all duration-300",
                ],
                errorMessage: "text-right rtl text-xs",
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full font-semibold h-12 text-base bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? "در حال ثبت نام..." : "ثبت نام"}
            </Button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="text-center pt-4 border-t border-divider/20">
          <p className="text-foreground/60 text-sm">
            حساب کاربری دارید؟{" "}
            <a
              href="/login"
              className="text-primary hover:text-secondary font-medium transition-colors duration-200 hover:underline"
            >
              ورود
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
