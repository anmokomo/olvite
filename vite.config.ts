import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, //server port
    strictPort: false, //if true, doesn't try next avail port if above is in use, exits instead
    //https: , // https://vitejs.dev/config/server-options.html#server-https
    //proxy: , //https://vitejs.dev/config/server-options.html#server-proxy
    //cors: , // https://vitejs.dev/config/server-options.html#server-cors
    //headers: , server response headers
    //hmr: , //https://vitejs.dev/config/server-options.html#server-hmr
    //watch: , //watch options, specify specific things to watch/not watch
    middlewareMode: false, //default
    fs: {
      strict: true, //default - restrict serving files outside workspace root
      // allow: , // restrict files that can be served https://vitejs.dev/config/server-options.html#server-fs-allow
      //deny: ,
    },
    //origin: ,// origin of generated asset urls during development
  },
  build: {
    target: 'modules', //default 'modules'; esbuild target option
    //modulePreload: true, //default true
    outDir: 'build', //output directory relative to project root
    assetsDir: 'assets', //directory to nest generated assets relative to outDir
    assetsInlineLimit: 4096, //default 4096; assets smaller than this will be inlined as base64 URLs to prevent extra http reqs; 0 to disable
    cssCodeSplit: true, //default true;
    //cssTarget: , //use for non-standard browser development https://vitejs.dev/config/build-options.html#build-csstarget
    sourcemap: false, //default false; generate production source maps
    //rollupOptions: , //customize Rollup bundle https://rollupjs.org/guide/en/#big-list-of-options
    //commonjsOptions: , //options to pass to @rollup/plugin-commonjs
    //dynamicImportVarsOptions: ,//options to pass to @rollup/plugin-dynamic-import-vars
    //lib: , //build as a library https://vitejs.dev/guide/build.html#library-mode
    manifest: false, //default false; build to generate manifest.json w/ non-hashed asset filenames to their hashed versions
    ssrManifest: false, //default false; generate SSR manifeset
    ssr: undefined, //default undefined; SSR-oriented  build
    minify: 'esbuild', //default 'esbuild'; false=disable minification or specify minifier
    //terserOptions: , //minify options if using 'terser'
    write: true, //default true; enables writing bundle to disk
    //emptyOutDir: ,
    reportCompressedSize: true, //default true; disable for build performance for large projects
    chunkSizeWarningLimit: 500, //default 500
    watch: null, //default null; {} = enable rollup watcher, used w/ build-only plugins or integration processes
  },
  // configs for preview port, if different than server configs above
  // preview: {
  //   host: ,
  //   port: ,
  //   strictPort: ,
  //   https: ,
  //   open: ,
  //   proxy: ,
  //   cors: ,
  //   headers: ,
  // }
  // configs or build optimization https://vitejs.dev/config/dep-optimization-options.html#optimizedeps-entries
  // optimizeDeps: {
  //   entries: ,
  //   exclude: ,
  //   include: ,
  //   esbuildOptions: ,
  //   force:
  // },
  //SSR Options
  // ssr: {
  //   external: ,
  //   noExternal: ,
  //   target: ,
  //   format: ,
  // }
  //Worker Options
  // worker: {
  //   format: ,
  //   plugins: , //worker-specific plugins
  //   rollupOptions: , //rollup options to build worker bundle
  // }
})
