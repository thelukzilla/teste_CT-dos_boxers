import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // OTIMIZAÇÃO CRÍTICA PARA GITHUB PAGES:
  // 'base: ./' garante que o site procure os arquivos (css/js)
  // na pasta relativa atual, e não na raiz absoluta do domínio.
  base: './',
});