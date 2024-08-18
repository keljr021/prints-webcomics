<template>
  <div class="authors container">
    <view-header>
      <template v-slot:header>Authors</template>
      <template v-slot:caption>
        <p>Meet the artists behind your favorite comics here! View their story and the various comics they have worked on.</p>
      </template>
    </view-header>

    <div>
      <div class="columns">
        <div class="column is-one-third"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
        <div class="column is-one-third"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
        <div class="column is-one-third"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
      </div>
      <div class="columns">
        <div class="column is-one-third"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
        <div class="column is-one-third"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
        <div class="column is-one-third"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
      </div>
    </div>
  </div>


</template>

<script>
import ViewHeader from './../components/ViewHeader.vue';
import AuthorsItem from './../components/AuthorsItem.vue';
export default {
  name: 'AuthorsView',
  components: {
    ViewHeader,
    AuthorsItem
  }
}
</script>

<style>
</style>