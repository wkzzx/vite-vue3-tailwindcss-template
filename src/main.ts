import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/element.scss'
import ElementPlus from 'element-plus'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
// createApp(App).mount('#app')
app.mount('#app')
