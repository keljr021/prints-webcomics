<template>
  <div id="app">
    <nav-bar />
    <div class="view">
      <router-view :key="$route.fullPath"/>
      <footer-bar />
    </div>
  </div>
</template>
<script>
import { accountsStore } from "@/store/accounts";
import { authorsStore } from "@/store/authors";
import { comicsStore } from "@/store/comics";

import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
export default {
  name: 'App',
  props: {},
  created() {
    accountsStore.fetchAccounts();
    authorsStore.fetchAuthors();
    comicsStore.fetchAllComics();
  },
  components: {
    NavBar,
    FooterBar
  }
}
</script>
<style lang="scss">
$primary: #4e4c67; 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: initial;
}

body {
  overflow-x: initial;
}

.button {
  border-radius: 15px;
}

.cta, .headline {
  text-align: left;
}

.cta {
  font-family: "Caveat Brush", Arial, sans-serif;
  font-size: 64px;
}

.headline {
  font-family: "Caveat", Arial Narrow, sans-serif;
  font-size: 58px;
}

.subtitle {
  font-family: "Komika Text Tight", Arial Narrow, sans-serif;
  font-size: 40px !important;
}

.view {
  padding-top: 77px;
}

.container {
  padding: 50px;
  text-align: left;
}

.columns {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.nested-enter-active, .nested-leave-active {
	transition: all 0.5s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.2s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.1s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.4s;
}

@media all and (max-width: 768px) {
  .container {
    padding: 20px;
  }
}
</style>
