<template>
  <div class="home">
    <hero-img title="Welcome everyone!" :text="getHeroText" buttonText="Explore Genres" buttonRoute="genres"/>
    <home-featured-list header="Featured List" :comicList="featuredComics" />
    <home-authors />
    <home-featured-list header="New Releases" :comicList="newReleases" />
</div>
</template>

<script>
import { comicsStore } from "@/store/comics";

import HeroImg from '@/components/HeroImg.vue';
import HomeAuthors from '@/components/HomeAuthors.vue';
import HomeFeaturedList from '@/components/HomeFeaturedList.vue';
export default {
  name: 'Home',
  data() {
    return {
      featuredComics: [],
      newReleases: []
    }
  },
  computed: {
    getHeroText() {
      return [
        'Do you like webcomics? We do too.',
        'Prints was designed for webcomic artists to easily showcase their work to readers of all ages. We have a wide variety of genres to choose from; from romance, to drama, to comedy. If you like to draw or read comics, this is the site for you!'
      ];
    }
  },
  methods: {

  },
  async mounted() {
    this.featuredComics = await comicsStore.getFeaturedComics();
    this.newReleases = await comicsStore.getNewReleases();
  },
  components: {
    HeroImg,
    HomeAuthors,
    HomeFeaturedList
  }
}
</script>
