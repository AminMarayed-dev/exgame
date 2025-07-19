import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  addToast,
} from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "./schema";
import { userDatabase } from "../../mock";
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
      const newUser = await userDatabase.create(data);
      console.log("User registered successfully:", newUser);

      // Show success toast with timeout progress
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 dark:from-background dark:via-background dark:to-primary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Stack 1: Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">خوش آمدید</h1>
          <p className="text-foreground/70 text-sm">برای ثبت نام کلیک کنید</p>
        </div>

        {/* Stack 2: Form Card */}
        <Card className="shadow-2xl bg-background/80 backdrop-blur-md border border-primary/20">
          <CardHeader className="text-center pb-4">
            <h2 className="text-xl font-semibold text-primary">ثبت نام</h2>
          </CardHeader>

          <CardBody className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* First Name Input */}
              <div>
                <Input
                  {...register("firstName")}
                  type="text"
                  label="نام"
                  placeholder="نام خود را وارد کنید"
                  variant="bordered"
                  color={errors.firstName ? "danger" : "primary"}
                  isInvalid={!!errors.firstName}
                  errorMessage={errors.firstName?.message}
                  classNames={{
                    input: "text-foreground",
                    label: "text-foreground/80",
                    inputWrapper: "border-primary/30 hover:border-primary/50",
                    errorMessage: "text-right rtl",
                  }}
                />
              </div>

              {/* Last Name Input */}
              <div>
                <Input
                  {...register("lastName")}
                  type="text"
                  label="نام خانوادگی"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  variant="bordered"
                  color={errors.lastName ? "danger" : "primary"}
                  isInvalid={!!errors.lastName}
                  errorMessage={errors.lastName?.message}
                  classNames={{
                    input: "text-foreground",
                    label: "text-foreground/80",
                    inputWrapper: "border-primary/30 hover:border-primary/50",
                    errorMessage: "text-right rtl",
                  }}
                />
              </div>

              {/* Email Input */}
              <div>
                <Input
                  {...register("email")}
                  type="email"
                  label="ایمیل"
                  placeholder="ایمیل خود را وارد کنید"
                  variant="bordered"
                  color={errors.email ? "danger" : "primary"}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  classNames={{
                    input: "text-foreground",
                    label: "text-foreground/80",
                    inputWrapper: "border-primary/30 hover:border-primary/50",
                    errorMessage: "text-right rtl",
                  }}
                />
              </div>

              {/* Stack 3: Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full font-semibold"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "در حال ثبت نام..." : "ثبت نام"}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-foreground/60 text-sm">
            حساب کاربری دارید؟{" "}
            <a
              href="/login"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
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
