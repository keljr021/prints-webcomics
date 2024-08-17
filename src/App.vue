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
$primary: #4E4C67; 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.cta, .headline {
  font-family: "Ink Free";
  text-align: left;
}

.cta {
  font-size: 64px;
}

.headline {
  font-size: 58px;
}
</style>
