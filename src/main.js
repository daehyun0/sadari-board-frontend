import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)

console.log('newFeature1-13')

app.use(router)
app.use(ElementPlus)
app.mount('#app')