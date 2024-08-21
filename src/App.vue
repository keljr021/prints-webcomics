<template>
  <div id="app">
    <nav-bar />
    <div class="view">
      <router-view/>
      <footer-bar />
    </div>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
export default {
  name: 'App',
  props: {},
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
</style>
