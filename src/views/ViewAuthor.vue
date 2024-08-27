<template>
  <div class="view-author">
    <div class="view-author-info container">
        <div class="columns is-mobile is-multiline">
            <div class="column is-full-mobile is-3-desktop px-4 view-author-info-image">
                <img :src="require( `@/assets/accounts/${ author.account.avatar }`)" />
            </div>
            <div class="column is-full-mobile is-9-desktop px-4">
                <div class="view-author-info-name headline">{{ author.account.name }}</div>
                <div class="view-author-info-text body py-4">
                    <p>{{ author.description }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="view-author-comics">
        <div class="container">
            <div class="subtitle py-4">Comics</div>
            <div class="columns is-mobile is-multiline fixed-column" v-if="comics.length > 0">
                <div  v-for="comic in comics" :key="comic.key" class="column is-half-mobile is-3-desktop">
                    <comic-item :comic="comic" />
                </div>
            </div>
            <div class="columns" v-else>
              No comics by this author.
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { authorsStore } from "@/store/authors";
import { comicsStore } from "@/store/comics";

import ComicItem from '@/components/ComicItem.vue';
export default {
  name: 'ViewAuthor',
  data() {
    return {
        author: {},
        comics: []
    };
  },
  async created() {
    this.author = await authorsStore.getAuthor(this.$route.params.authorId);
    this.comics = await comicsStore.getAllComicsByAuthor(this.$route.params.authorId);
  },
  components: {
    ComicItem
  }
}
</script>

<style scoped>
.view-author-comics {
    padding: 50px 0;
    background: #eee;
}

.body {
    font-size: 20px;
    line-height: 150%;
}

@media all and (max-width: 768px) {
  .view-author-info-image {
    text-align: center;
  }
  .view-author-info-image img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
}
</style>