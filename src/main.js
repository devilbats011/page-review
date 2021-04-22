import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons/faAngleDoubleUp";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(
  faAngleRight,
  faAngleDoubleRight,
  faAngleDoubleDown,
  faAngleDoubleUp,
  faThumbsUp,
  faStar,
  faPlus,
);

createApp(App)
  .component("v-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
