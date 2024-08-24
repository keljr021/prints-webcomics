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
      <template v-for="list in formattedAuthors">
        <div class="columns is-justify-content-space-between" :key="list.key">
          <div v-for="item in list" class="column is-one-third" :key="item.key">
            <authors-item :author="item" />
          </div>
        </div>
      </template>
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
      formattedAuthors: [],
    };
  },
  components: {
    ViewHeader,
    AuthorsItem,
    SortDropdown
  },
  methods: {
    setFormatAuthorsList() {
      let output = [];
      let numberOfRows = Math.ceil(this.authors.length / 3);
      let itemIdx = 0;

      for (let r = 1; r < numberOfRows; r++) {
        let rowOfAuthors = [];
        let columnLimit = r * 3;

        for (let c = itemIdx; c < columnLimit; c++) {
          rowOfAuthors.push(this.authors[itemIdx]);
          itemIdx++;
        }

        output.push(rowOfAuthors);        
      }

      console.log(output);

      this.formattedAuthors = output;
    }
  },
  async mounted() {
    this.authors = await authorsStore.authorsList;
    await this.setFormatAuthorsList();
  }
}
</script>

<style>
</style>