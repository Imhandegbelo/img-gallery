import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: process.env.VITE_VERCEL_ENV,
      __API_KEY__: process.env.VITE_apiKey,
      __authDomain__: process.env.VITE_authDomain,
      __projectId__: process.env.VITE_projectId,
      __storageBucket__: process.env.VITE_storageBucket,
      __messagingSenderId__: process.env.VITE_messagingSenderId,
      __appId__: process.env.VITE_appId,
      __unsplashKey__: process.env.VITE_unsplashKey,
    },
  };
});
