import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// this is fetch
export default defineConfig({
  plugins: [react()],
  base: "/PortFolio/",
  server: {
    host: "0.0.0.0",
    port: "3000",
  },
});
