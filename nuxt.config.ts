// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseToken: process.env.SUPABASE_TOKEN,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
});
