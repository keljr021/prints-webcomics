<template>
  <div class="recommended container">
    <div style="text-align:left">
      <div class="headline">Recommended Comics</div>
      <div style="padding-bottom:100px">
        <p>These series below are recommended to you based on your reading history.</p>
      </div>
    </div>

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
import ComicItem from './../components/ComicItem.vue';
export default {
  name: 'RecommendedView',
  components: {
    ComicItem
  }
}
</script>

<style>
</style>