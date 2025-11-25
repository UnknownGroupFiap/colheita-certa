import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
     rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
            cadastro: resolve(__dirname, 'src/pages/cadastro.html'),
            contato: resolve(__dirname, 'src/pages/contato.html'),
            recursos: resolve(__dirname, 'src/pages/recursos.html'),
            solucoes: resolve(__dirname, 'src/pages/solucoes.html'),
        }
    }
  },
});
