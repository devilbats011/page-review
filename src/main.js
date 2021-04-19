import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAngleRight,faAngleDoubleRight);

createApp(App)
.component("v-icon", FontAwesomeIcon)
.use(router).mount('#app')
