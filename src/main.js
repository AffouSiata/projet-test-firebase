import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from vuelidate


createApp(App).use(router).use(store).use(Vuelidate ).mount('#app')



