import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes'
import loadImage from './plugins/loadImage'
import App from './App.vue'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(loadImage)
  .mount('#app')
