<template>
  <div class="about">
    <hero-img title="A bit about us..." :text="getHeroText" />

    <div class="container">
      <div class="py-5">
        <div class="subtitle">History</div>
        <div class="columns">
          <div class="column">
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies ridiculus leo ut justo vestibulum posuere, sapien magnis. Viverra nisl elementum taciti aptent, nascetur pellentesque vestibulum. Vehicula facilisi metus primis congue sit rutrum aliquam. Risus orci elementum sagittis primis; nunc curae non venenatis phasellus. Nascetur euismod finibus habitasse vivamus vivamus cubilia.</p>
            <p>At quam tincidunt vulputate tellus placerat nullam sociosqu montes. Non habitant ante dis mi malesuada suspendisse imperdiet. Rutrum sem sed curabitur dui habitasse mi..</p>
          </div>
        </div>
      </div>

      <div class="py-5">
        <div class="subtitle">Our Founders</div>
        <div class="columns">
          <div class="column is-third">
            <about-item />
          </div>
          <div class="column is-third">
            <about-item />
          </div>
          <div class="column is-third">
            <about-item />
          </div>
        </div>
        <div class="columns">
          <div class="column is-third">
            <about-item />
          </div>
          <div class="column is-third">
            <about-item />
          </div>
          <div class="column is-third">
            <about-item />
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImg from './../components/HeroImg.vue';
import AboutItem from './../components/AboutItem.vue';
export default {
  name: 'AboutView',
  computed: {
    getHeroText() {
      return [
        'At quam tincidunt vulputate tellus placerat nullam sociosqu montes. Non habitant ante dis mi malesuada suspendisse imperdiet. Rutrum sem sed curabitur dui habitasse mi..'
      ];
    }
  },
  components: {
    HeroImg,
    AboutItem
  }
}
</script>
<style scoped>
.about p {
  line-height: 200%;
  padding-bottom: 20px;
}
</style>