<template>
  <div class="authors container">
    <view-header>
      <template v-slot:header>Authors</template>
      <template v-slot:caption>
        <p>Meet the artists behind your favorite comics here! View their story and the various comics they have worked on.</p>
      </template>
    </view-header>

    <div class="columns is-mobile is-multiline py-4" style="text-align:right">
      <div class="column">
        <sort-dropdown />
      </div>
    </div>

    <div class="columns is-mobile is-multiline">
      <div v-for="item in authors" class="column is-half-mobile is-4-desktop" :key="item.key">
        <template v-if="item.account.name !== 'Test Author'">
          <authors-item :author="item" />
        </template>
      </div>
    </div>
  </div>


</template>

<script>
import { authorsStore } from "@/store/authors";

import ViewHeader from './../components/ViewHeader.vue';
import AuthorsItem from './../components/AuthorsItem.vue';
import SortDropdown from './../components/SortDropdown.vue';
export default {
  name: 'Authors',
  data() {
    return {
      authors: [],
    };
  },
  components: {
    ViewHeader,
    AuthorsItem,
    SortDropdown
  },
  async created() {
    this.authors = await authorsStore.authorsList;
  }
}
</script>

<style>
</style>