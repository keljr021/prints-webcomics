<template>
  <div class="authors container">
    <view-header>
      <template v-slot:header>Authors</template>
      <template v-slot:caption>
        <p>Meet the artists behind your favorite comics here! View their story and the various comics they have worked on.</p>
      </template>
    </view-header>

    <div class="columns py-4" style="text-align:right">
      <div class="column">
        <sort-dropdown />
      </div>
    </div>

    <div>
      <div class="columns">
        <div class="column is-one-third" @click="viewAuthor()"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
        <div class="column is-one-third" @click="viewAuthor()"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
        <div class="column is-one-third" @click="viewAuthor()"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
      </div>
      <div class="columns">
        <div class="column is-one-third" @click="viewAuthor()"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
        <div class="column is-one-third" @click="viewAuthor()"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
        <div class="column is-one-third" @click="viewAuthor()"><authors-item authorName="Test Author" genre="Action, adventure, slice-of-life"/></div>
      </div>
    </div>
  </div>


</template>

<script>
import ViewHeader from './../components/ViewHeader.vue';
import AuthorsItem from './../components/AuthorsItem.vue';
import SortDropdown from './../components/SortDropdown.vue';
export default {
  name: 'Authors',
  components: {
    ViewHeader,
    AuthorsItem,
    SortDropdown
  },
  methods: {
    viewAuthor() {
      this.$router.push({ name: 'viewAuthor', params: { id: 0 }});
    }
  }
}
</script>

<style>
</style>