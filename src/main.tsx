import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HeroUIProvider } from "@heroui/react";
import {ToastProvider} from "@heroui/toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>  
      <ToastProvider />
      <RouterProvider router={router} />
    </HeroUIProvider>
  </StrictMode>
);
