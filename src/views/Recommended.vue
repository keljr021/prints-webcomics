<template>
  <div class="recommended container">
    <view-header>
      <template v-slot:header>Recommended Comics</template>
      <template v-slot:caption>
        <p>These series below are recommended to you based on your reading history.</p>
      </template>
    </view-header>

    <div class="columns py-4" style="text-align:right">
      <div class="column">
        <sort-dropdown />
      </div>
    </div>

    <div>
      <template v-for="list in formattedList">
        <div class="columns" :key="list.key">
          <div v-for="item in list" class="column is-one-quarter" :key="item.key">
            <comic-item :comic="item" />
          </div>
        </div>
      </template>
    </div>
  </div>


</template>

<script>
import { comicsStore } from "@/store/comics";

import ViewHeader from './../components/ViewHeader.vue';
import ComicItem from './../components/ComicItem.vue';
import SortDropdown from './../components/SortDropdown.vue';
export default {
  name: 'Recommended',
  data() {
    return {
      comics: [],
      formattedList: []
    };
  },
  methods: {
    setFormattedList() {
      let output = [];
      let numberOfRows = Math.ceil(this.comics.length / 4);

      for (let r = 1; r <= numberOfRows; r++) {
        let rowOfComics = [];

        for (let c = r*1; c <= 4; c++) {
          rowOfComics.push(this.comics[c-1]);
        }
        output.push(rowOfComics);
      }

      console.log('formatted list: ', output);

      this.formattedList = output;
    }
  },
  async mounted() {
    this.comics = comicsStore.getRecommendedComics();

    console.log('comics list: ', this.comics);

    if (this.comics.length > 0)
      await this.setFormattedList();
  },
  components: {
    ViewHeader,
    ComicItem,
    SortDropdown
  }
}
</script>

<style>

</style>