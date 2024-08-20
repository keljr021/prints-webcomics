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
  name: 'Favorites',
  components: {
    ViewHeader,
    ComicItem
  }
}
</script>

<style>
</style>