import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: './',
  optimizeDeps: {
    exclude: ['onnxruntime-web'],
  },
  plugins: [
    viteStaticCopy({
      targets: [{
        src: 'node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.wasm',
        dest: '.',
      }],
    }),
  ],
});
