<template>
  <div class="recommended container">
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

    <div>
      <div class="columns">
        <div class="column is-one-quarter">Submenu</div>
        <div class="column is-three-fourths">
            <div class="columns">
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
            </div>
            <div class="columns">
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
            </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import ViewHeader from './../components/ViewHeader.vue';
import ComicItem from './../components/ComicItem.vue';
export default {
  name: 'SearchView',
  data() {
    return {
        numResults: 20
    }
  },
  components: {
    ViewHeader,
    ComicItem
  }
}
</script>

<style>
</style>