<template>
  <div class="history container">
    <view-header>
      <template v-slot:header>History</template>
      <template v-slot:caption>
        <p>These series below are recommended to you based on your reading history.</p>
      </template>
    </view-header>
    <div>
      <div v-for="(comic, i) in comics" :key="i">
        <search-item :comic="comic"/>
      </div>
    </div>
  </div>
</template>

<script>
import { comicsStore } from "@/store/comics";

import ViewHeader from './../components/ViewHeader.vue';
import SearchItem from './../components/SearchItem.vue';
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
    SearchItem
  }
}
</script>

<style>
</style>