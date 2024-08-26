<template>
  <div class="recommended container">
    <view-header>
      <template v-slot:header>Recommended Comics</template>
      <template v-slot:caption>
        <p>These series below are recommended to you based on your reading history.</p>
      </template>
    </view-header>

    <div class="py-5" style="text-align:right">
      <div class="columns">
        <div class="column">
          <sort-dropdown />
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-3" v-for="item in comics" :key="item.key">
        <comic-item :comic="item" />
      </div>
    </div>
  </div>


</template>

<script>
import { comicsStore } from "@/store/comics";

import ViewHeader from './../components/ViewHeader.vue';
import ComicItem from './../components/ComicItem.vue';
import SortDropdown from './../components/SortDropdown.vue';
export default {
  name: 'Recommended',
  data() {
    return {
      comics: []
    };
  },
  methods: {

  },
  async mounted() {
    this.comics = comicsStore.getRecommendedComics();
  },
  components: {
    ViewHeader,
    ComicItem,
    SortDropdown
  }
}
</script>

<style>

</style>