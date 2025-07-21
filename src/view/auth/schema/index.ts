import { z } from "zod";

export const registerSchema = z.object({

  
  phoneNumber: z
    .string()
    .min(11, "شماره موبایل باید حداقل 11 رقم باشد")
    .max(11, "شماره موبایل نمی تواند بیشتر از 11 رقم باشد"),
    // .regex(/^[a-zA-Z\s]+$/, "نام خانوادگی فقط می تواند حروف و فاصله باشد"),
  
  nationalCode: z
    .string()
    .min(10, "کد ملی باید حداقل 10 رقم باشد")
    .max(10, "کد ملی نمی تواند بیشتر از 10 رقم باشد")
    .max(100, "کد ملی نمی تواند بیشتر از 100 کاراکتر باشد")
});

export type RegisterFormData = z.infer<typeof registerSchema>;
