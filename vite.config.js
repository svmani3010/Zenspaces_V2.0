import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-oxc"; // Change this from @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  // Remove any 'esbuild' or 'optimizeDeps.rollupOptions' blocks
  // as they are deprecated in V8
});
