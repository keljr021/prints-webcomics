import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faThumbsUp, faStar, faComment, faShareFromSquare, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false

library.add(faBars, faThumbsUp, faStar, faComment, faShareFromSquare, faArrowLeft);

Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
