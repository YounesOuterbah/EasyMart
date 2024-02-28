import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "mongodb+srv://eunice99x:<password>@younescluster.c5ymnnt.mongodb.net/",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
