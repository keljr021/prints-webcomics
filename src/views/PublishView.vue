<template>
  <div>
    <hero-img title="Ready to Create?" :text="getHeroText" buttonText="Create an Account Today!" buttonRoute="create"/>
</div>
</template>

<script>
import HeroImg from './../components/HeroImg.vue';
export default {
  name: 'HomeView',
  computed: {
    getHeroText() {
      return [
        'Prints is made for comic artists to easily publish and share their works across a variety of fans online.',
        'If you\'re looking to quickly publish your comic, you\'ve come to the right place.'
      ];
    }
  },
  components: {
    HeroImg
  }
}
</script>
