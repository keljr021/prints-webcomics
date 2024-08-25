<template>
  <div class="genres container">
    <view-header>
      <template v-slot:header>Genres</template>
    </view-header>

    <div class="columns py-4" style="text-align:right">
      <div class="column">
        <sort-dropdown />
      </div>
    </div>

    <div>
      <div class="columns">
        <div class="column is-one-quarter">
          <genres-sub-menu :genre="selectedGenre"/>
        </div>
        <div v-if="formattedList.length > 0" class="column is-three-fourths fixed-box">
          <template v-for="(list, l) in formattedList">
            <div class="columns" :key="l">
              <div v-for="(item, i) in list" class="column is-one-third" :key="i">
                <comic-item :comic="item" />
              </div>
            </div>
          </template>
        </div>
        <div v-else class="column is-three-fourths fixed-box">
          No comics in this genre.
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { comicsStore } from "@/store/comics";

import ViewHeader from './../components/ViewHeader.vue';
import GenresSubMenu from './../components/GenresSubMenu.vue';
import ComicItem from './../components/ComicItem.vue';
import SortDropdown from './../components/SortDropdown.vue';
export default {
  name: 'Genres',
  data() {
    return {
      comics: [],
      formattedList: [],
      selectedGenre: ''
    };
  },
  methods: {
    setFormattedList() {
      console.log( 'setting formatted list...');
      let output = [];
      let numberOfRows = Math.ceil(this.comics.length / 3);

      let itemIdx = 0;

      for (let r = 1; r <= numberOfRows; r++) {
        let rowOfComics = [];
        let columnLimit = r * 3;

        for (let c = itemIdx; c < columnLimit; c++) {
          let comic = this.comics[itemIdx];
          rowOfComics.push(comic);
          itemIdx++;
        }
        output.push(rowOfComics);
      }

      console.log('formatted list: ', output);


      this.formattedList = output;
    },
    updatedListWithGenre() {
      console.log( 'setting formatted list with genre...');

      let updatedList = [];

      for (let i = 0; i < this.comics.length; i++) {
        let comic = this.comics[i];
        if (comic.genres.includes(this.selectedGenre))
          updatedList.push(comic);
      }

      this.comics = updatedList;

      console.log('updated list: ', updatedList);
      
      if (updatedList.length > 0)
        this.setFormattedList();      
    },
  },
  async created() {
      this.comics = comicsStore.comicsList;
      this.selectedGenre = this.$route.params.genreId;

      console.log('params: ', this.selectedGenre);

      if (this.comics.length > 0) {
        if (this.selectedGenre) await this.updatedListWithGenre();
        else await this.setFormattedList();
      }

      
  },
  components: {
    ViewHeader,
    GenresSubMenu,
    ComicItem,
    SortDropdown
  }
}
</script>

<style>
.fixed-box {
  width: initial;
  max-height: 600px;
  overflow: hidden auto;
}
</style>