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
import SortDropdown from './../components/SortDropdown.vue';
import ComicItem from './../components/ComicItem.vue';
export default {
  name: 'Favorites',
  data() {
    return {
      favioriteComicsList: [],
      formattedList: []
    };
  },
  methods: {
    setFormattedList() {
      let output = [];
      let numberOfRows = Math.ceil(this.favioriteComicsList.length / 4);

      let itemIdx = 0;

      for (let r = 1; r < numberOfRows; r++) {
        let rowOfComics = [];
        let columnLimit = r * 4;

        if (r < numberOfRows) {
          for (let c = itemIdx; c < columnLimit; c++) {
            rowOfComics.push(this.favioriteComicsList[itemIdx]);
            itemIdx++;
          }
          output.push(rowOfComics);
        }
      }

      console.log('formatted list: ', output);


      this.formattedList = output;
    }
  },
  async created() {
    this.favioriteComicsList = comicsStore.getRecommendedComics();

    console.log('comics list: ', this.favioriteComicsList);

    if (this.favioriteComicsList.length > 0)
      await this.setFormattedList();
  },
  components: {
    ViewHeader,
    SortDropdown,
    ComicItem
  }
}
</script>

<style>
</style>