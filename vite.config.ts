import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsConfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths(), svgr()],
  server: {
    port: 3000,
  },
  define: {
    "process.env": {},
  },
})
