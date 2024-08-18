<template>
  <div>
    <hero-img title="Ready to Create?" :text="getHeroText" buttonText="Create an Account Today!" buttonRoute="create" />
    
    <div class="authors container">
      <view-header>
        <template v-slot:header>Why Publish With Us?</template>
      </view-header>
      <div class="columns">
        <div class="column is-half">
          x
        </div>
        <div class="column is-half">
          x
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          x
        </div>
        <div class="column is-half">
          x
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImg from './../components/HeroImg.vue';
import ViewHeader from './../components/ViewHeader.vue';
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
    HeroImg,
    ViewHeader
  }
}
</script>
