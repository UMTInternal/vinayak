import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` is the URL path the site is served from.
// '/' for the live domain (www.vinayakrelocation.in).
// For a sub-folder build (e.g. XAMPP), run:  npm run build -- --base=/vinayakrelocation/dist/
export default defineConfig({
  plugins: [react()],
  base: '/',
});
