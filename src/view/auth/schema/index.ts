import { z } from "zod";
import { userDatabase } from "../../../mock";

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(50, "نام نمی تواند بیشتر از 50 کاراکتر باشد"),
    // .regex(/^[a-zA-Z\s]+$/, "نام فقط می تواند حروف و فاصله باشد"),
  
  lastName: z
    .string()
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .max(50, "نام خانوادگی نمی تواند بیشتر از 50 کاراکتر باشد"),
    // .regex(/^[a-zA-Z\s]+$/, "نام خانوادگی فقط می تواند حروف و فاصله باشد"),
  
  email: z
    .string()
    .email("لطفا یک ایمیل معتبر وارد کنید")
    .min(5, "ایمیل باید حداقل 5 کاراکتر باشد")
    .max(100, "ایمیل نمی تواند بیشتر از 100 کاراکتر باشد")
    .refine(
      (email) => !userDatabase.emailExists(email),
      "این ایمیل قبلاً ثبت شده است"
    ),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
