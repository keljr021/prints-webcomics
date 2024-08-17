<template>
  <div class="recommended container">
    <view-header>
      <template v-slot:header>Recommended Comics</template>
      <template v-slot:caption>
        <p>These series below are recommended to you based on your reading history.</p>
      </template>
    </view-header>

    <div>
      <div class="columns">
        <div class="column is-one-quarter"><comic-item /></div>
        <div class="column is-one-quarter"><comic-item /></div>
        <div class="column is-one-quarter"><comic-item /></div>
        <div class="column is-one-quarter"><comic-item /></div>
      </div>
      <div class="columns">
        <div class="column is-one-quarter"><comic-item /></div>
        <div class="column is-one-quarter"><comic-item /></div>
        <div class="column is-one-quarter"><comic-item /></div>
        <div class="column is-one-quarter"><comic-item /></div>
      </div>
    </div>
  </div>


</template>

<script>
import ViewHeader from './../components/ViewHeader.vue';
import ComicItem from './../components/ComicItem.vue';
export default {
  name: 'RecommendedView',
  components: {
    ViewHeader,
    ComicItem
  }
}
</script>

<style>
</style>