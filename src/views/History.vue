<template>
  <div class="history container">
    <view-header>
      <template v-slot:header>History</template>
      <template v-slot:caption>
        <p>These series below are recommended to you based on your reading history.</p>
      </template>
    </view-header>
    <div>
      <div class="columns">
        <div class="column">
          <search-item />
          <search-item />
          <search-item />
          <search-item />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewHeader from './../components/ViewHeader.vue';
import SearchItem from './../components/SearchItem.vue';
export default {
  name: 'History',
  components: {
    ViewHeader,
    SearchItem
  }
}
</script>

<style>
</style>