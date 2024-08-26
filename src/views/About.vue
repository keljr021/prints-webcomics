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
        <div class="columns is-mobile is-multiline is-centered">
          <div class="column is-half-mobile is-third-desktop">
            <about-item imageSrc="joe-ciciarelli-BVNmFNShq6U-unsplash.jpg" name="Keisha Carr" occupation="Founder"/>
          </div>
          <div class="column is-half-mobile is-third-desktop">
            <about-item imageSrc="man-5866475_1280.jpg" name="Thomas Christensen" occupation="Co-Founder"/>
          </div>
          <div class="column is-half-mobile is-third-desktop">
            <about-item imageSrc="man-8308722_1280.jpg" name="Bruce Morris" occupation="Co-Founder"/>
          </div>
          <div class="column is-half-mobile is-third-desktop">
            <about-item imageSrc="pexels-olly-3762940.jpg" name="Alice Webb" occupation="Web Developer" />
          </div>
          <div class="column is-half-mobile is-third-desktop">
            <about-item imageSrc="pexels-piebat-1059039.jpg" name="Drew Jacobs" occupation="Designer" />
          </div>
          <div class="column is-half-mobile is-third-desktop">
            <about-item imageSrc="graffiti-7970174_1280.jpg" name="Stephanie Liu" occupation="Marketing" />
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
  name: 'About',
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