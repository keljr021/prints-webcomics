<template>
  <div class="recommended container">
    <view-header>
      <template v-slot:header>Recommended Comics</template>
      <template v-slot:caption>
        <p>These series below are recommended to you based on your reading history.</p>
      </template>
    </view-header>

    <div class="py-5 recommended-sort">
      <div class="columns is-mobile">
        <div class="column is-full-width">
          <sort-dropdown />
        </div>
      </div>
    </div>

    <div class="columns is-mobile is-multiline">
      <div class="column is-half-mobile is-third-desktop" v-for="item in comics" :key="item.key">
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
.recommended-sort {
  text-align: right;
}

@media all and (max-width: 768px) {
  .recommended-sort {
    text-align: center;
  }
}
</style>