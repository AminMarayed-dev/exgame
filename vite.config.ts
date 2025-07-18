import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Force HMR connection to use WSS
    hmr: {
      overlay: true,
    },
    // Enable file system watching
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
