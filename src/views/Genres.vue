<template>
  <div class="genres container">
    <view-header>
      <template v-slot:header>Genres</template>
    </view-header>

    <div class="columns py-4 genre-sort">
      <div class="column">
        <sort-dropdown />
      </div>
    </div>

    <div>
      <div class="columns is-multiline">
        <div class="column is-mobile is-full-mobile is-3-desktop">
          <genres-sub-menu :genre="selectedGenre"/>
        </div>
        <div v-if="comics.length > 0" class="column is-full-mobile is-9-desktop">
          <div class="columns is-mobile is-multiline">
            <div v-for="(item, i) in comics" class="column is-half-mobile is-4-desktop" :key="i">
              <comic-item :comic="item" />
            </div>
          </div>
        </div>
        <div v-else class="column is-mobile is-full">
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
      selectedGenre: ''
    };
  },
  methods: {
    updatedListWithGenre() {
      let updatedList = [];

      for (let i = 0; i < this.comics.length; i++) {
        let comic = this.comics[i];
        if (comic.genres.includes(this.selectedGenre))
          updatedList.push(comic);
      }

      this.comics = updatedList;  
    },
  },
  async created() {
      this.comics = comicsStore.comicsList;
      this.selectedGenre = this.$route.params.genreId;

      if (this.comics.length > 0) {
        if (this.selectedGenre) await this.updatedListWithGenre();
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
<style scoped>
@media all and (max-width: 768px) {
  .genre-sort {
    text-align: center;
  }
}
</style>