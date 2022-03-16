import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style.css';
import router from '@/router/router';


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faPlus,
    faXmark,
    faTrash,
    faArrowLeft,
    faSun,
    faMoon
} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus,faXmark,faTrash,faArrowLeft,faSun,faMoon)

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');