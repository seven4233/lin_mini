import App from './App'
import './static/css/global.css'
// import './src/utils/init.js'
// #ifdef VUE3
import { createSSRApp } from 'vue'
import {createPinia } from 'pinia'
import piniaPersistPlugin from 'pinia-plugin-persistedstate'
import uviewPlus from 'uview-plus'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  pinia.use(piniaPersistPlugin)
  
  app.use(uviewPlus)
  app.use(pinia)
  return {
    app
  }
}
// #endif