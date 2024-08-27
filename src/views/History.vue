<template>
  <div class="history container">
    <view-header>
      <template v-slot:header>History</template>
      <template v-slot:caption>
        <p>These series below are recommended to you based on your reading history.</p>
      </template>
    </view-header>
    <div v-if="isDesktop || isTablet">
      <div v-for="(comic, i) in comics" :key="i">
        <search-item v-if="isMobile" :comic="comic"/>
      </div>
    </div>
    <div v-else>
      <div class="columns is-mobile is-multiline">
        <div v-for="(comic, i) in comics" :key="i" class="column is-half">
          <comic-item :comic="comic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { comicsStore } from "@/store/comics";

import ViewHeader from './../components/ViewHeader.vue';
import SearchItem from './../components/SearchItem.vue';
import ComicItem from './../components/ComicItem.vue';
export default {
  name: 'History',
  data() {
    return {
      comics: []
    }
  },
  created() {
    this.comics = comicsStore.comicsList;
  },
  components: {
    ViewHeader,
    SearchItem,
    ComicItem
  }
}
</script>

<style>
</style>