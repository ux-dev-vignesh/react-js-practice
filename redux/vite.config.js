import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
       "@": path.resolve(__dirname, "src"),  // Set "@" as an alias for "src"
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@auth":path.resolve(__dirname,"src/auth"),
      "@styles":path.resolve(__dirname,"src/styles"),
      "@services": path.resolve(__dirname, "src/services"),
    }
  }
})
  