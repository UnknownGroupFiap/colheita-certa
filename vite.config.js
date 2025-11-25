import { defineConfig } from "vite";

export default defineConfig({
  build: {
     rollupOptions: {
        input: {
            main: 'index.html',
            cadastro: 'src/pages/cadastro.html',
            contato: 'src/pages/contato.html',
            recursos: 'src/pages/recursos.html',
            solucoes: 'src/pages/solucoes.html',
        }
    }
  },
});
