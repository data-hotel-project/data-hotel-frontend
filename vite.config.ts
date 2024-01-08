import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@contexts": "/src/contexts",
      "@pages": "/src/pages",
      "@interface": "/src/interface",
      "@services": "/src/services",
      "@validators": "/src/validators",
      "@stores": "/src/stores",
    },
  },
});
