import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/stacking-game/' : './',
  optimizeDeps: {
    exclude: ['onnxruntime-web'],
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.wasm',
          dest: '.',
        },
        {
          src: 'node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.mjs',
          dest: '.',
        },
      ],
    }),
  ],
});
