import { defineConfig } from '@piajs/kit/node';

export default defineConfig({
  devtool: {
    enablePerformanceMark: false,
  },
  pages: [
    { name: 'index', entry: 'src/pages/index/index.tsx' },
    { name: 'basic', entry: 'src/pages/basic/index.tsx', ssr: true },
    { name: 'nsr', entry: 'src/pages/nsr/index.tsx', nsr: true },
    {
      name: 'snapshot',
      entry: 'src/pages/snapshot/index.tsx',
      snapshot: { mode: 'hydrate' },
    },
  ],
  html: {
    titleByEntries: {
      index: 'Index Page',
      basic: 'Detail Page',
    },
  },
});
