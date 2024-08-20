<template>
  <div class="search container">
    <view-header>
      <template v-slot:header>Search Results</template>
      <template v-slot:caption>
        <p>
            <span>{{  numResults }}</span>&nbsp;
            Results for: 
            <span>{{  $route.params.query }}</span>
        </p>
      </template>
    </view-header>

    <div class="columns">
      <div class="column is-one-quarter">
        <search-sub-menu totalAuthors="6" totalComics="14" />
      </div>
      <div class="column is-three-fourths fixed-box">
        <search-item />
        <search-item />
        <search-item />
        <search-item />
      </div>
    </div>
  </div>


</template>

<script>
import ViewHeader from './../components/ViewHeader.vue';
import SearchSubMenu from './../components/SearchSubMenu.vue';
import SearchItem from './../components/SearchItem.vue';
export default {
  name: 'Search',
  data() {
    return {
        numResults: 20
    }
  },
  components: {
    ViewHeader,
    SearchSubMenu,
    SearchItem
  }
}
</script>

<style>
</style>