<template>
  <div class="search container">
    <view-header>
      <template v-slot:header>Search Results</template>
      <template v-slot:caption>
        <div class="px-3 search-results">
          <span>{{  numResults }}</span>
          Results for: 
          <span>{{  $route.params.query }}</span>
        </div>
      </template>
    </view-header>

    <div class="columns py-4" style="text-align:right">
      <div class="column">
        <sort-dropdown />
      </div>
    </div>

    <div class="columns is-mobile is-multiline">
      <div class="column is-full-mobile is-one-quarter-desktop">
        <search-sub-menu totalAuthors="6" totalComics="14" />
      </div>
      <div v-if="isDesktop || isTablet" class="column is-full-mobile is-three-fourths-desktop fixed-box">
        <search-item />
        <search-item />
        <search-item />
        <search-item />
      </div>
      <div v-else class="column is-full-mobile is-three-fourths-desktop">
        <div class="columns is-mobile is-multiline">
          <div class="column is-half" v-for="item in searchList" :key="item.key">
            <comic-item :comic="item" />
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { comicsStore } from "@/store/comics";
import VueBreakpointMixin from 'vue-breakpoint-mixin';

import ViewHeader from './../components/ViewHeader.vue';
import SortDropdown from './../components/SortDropdown.vue';
import SearchSubMenu from './../components/SearchSubMenu.vue';
import SearchItem from './../components/SearchItem.vue';
import ComicItem from './../components/ComicItem.vue';
export default {
  name: 'Search',
  mixins: [ VueBreakpointMixin ],
  data() {
    return {
        numResults: 20,
        searchList: []
    }
  },
  async created() {
    this.searchList = comicsStore.getRecommendedComics();
  },
  components: {
    ViewHeader,
    SortDropdown,
    SearchSubMenu,
    SearchItem,
    ComicItem
  }
}
</script>

<style>
@media all and (max-width: 768px) {
  .search-results {
    font-size: 24px;
  }
}
</style>