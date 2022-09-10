import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/index'
const app = createApp(App)


app.use(router)
app.use(VueAxios, axios)
app.mount('#app')