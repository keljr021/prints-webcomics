import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faEye, faThumbsUp, faStar, faComment, faShareFromSquare, faArrowLeft, faArrowRight, faPen, faPlus, faTrash, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import store from './store.js';

Vue.config.productionTip = false

library.add(faBars, faEye, faThumbsUp, faStar, faComment, faShareFromSquare, faArrowLeft, faArrowRight, faPen, faPlus, faTrash, faMagnifyingGlass, faXmark);

Vue.component('vue-fontawesome', FontAwesomeIcon);


Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas'
});
Vue.use(store);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
