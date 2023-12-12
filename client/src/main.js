import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')

import {library} from '@fortawesome/fontawesome-svg-core'
import {faTelegram, faViber} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faEnvelope, faPlus} from '@fortawesome/free-solid-svg-icons';
import {faHeart as farHeart, faEnvelope as farEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faHeart as fasHeart, faPen, faTrash, faGlobeEurope, faPhoneVolume, faComments, faComment, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

library.add(faTelegram, faPhone, faEnvelope, faViber, faPlus, farHeart, fasHeart, faPen, faTrash, faGlobeEurope, faPhoneVolume, farEnvelope, faComments, faComment, faSignOutAlt);
