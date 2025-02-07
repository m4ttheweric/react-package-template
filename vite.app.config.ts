import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// this is the config for the app in ./src NOT your library
// you may want to build the app so you can deploy a demo/docs app to go along with your library
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'app-dist',
  },
});
