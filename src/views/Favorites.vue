<template>
  <div class="favorites container">
    <view-header>
      <template v-slot:header>Favorite Comics</template>
      <template v-slot:caption>
        <p>These series below have been saved to this area.</p>
      </template>
    </view-header>

    <div class="columns py-4" style="text-align:right">
      <div class="column">
        <sort-dropdown />
      </div>
    </div>

    <div>
      <div class="columns is-mobile is-multiline">
        <div class="column is-half-mobile is-3-desktop" v-for="item in favioriteComicsList" :key="item.key">
          <comic-item :comic="item" />
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { comicsStore } from "@/store/comics";

import ViewHeader from './../components/ViewHeader.vue';
import SortDropdown from './../components/SortDropdown.vue';
import ComicItem from './../components/ComicItem.vue';
export default {
  name: 'Favorites',
  data() {
    return {
      favioriteComicsList: []
    };
  },
  async created() {
    this.favioriteComicsList = comicsStore.getRecommendedComics();
  },
  components: {
    ViewHeader,
    SortDropdown,
    ComicItem
  }
}
</script>

<style>
</style>