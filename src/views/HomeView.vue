<template>
  <div>
    <hero-img title="Welcome everyone!" :text="getHeroText" buttonText="Explore Genres" buttonRoute="genre"/>
    <home-featured-list />
    <home-authors />
    <home-featured-list />
</div>
</template>

<script>
import HeroImg from '@/components/HeroImg.vue';
import HomeAuthors from '@/components/HomeAuthors.vue';
import HomeFeaturedList from '@/components/HomeFeaturedList.vue';
export default {
  name: 'HomeView',
  computed: {
    getHeroText() {
      return [
        'Do you like webcomics? We do too.',
        'Prints was designed for webcomic artists to easily showcase their work to readers of all ages. We have a wide variety of genres to choose from; from romance, to drama, to comedy. If you like to draw or read comics, this is the site for you!'
      ];
    }
  },
  components: {
    HeroImg,
    HomeAuthors,
    HomeFeaturedList
  }
}
</script>
