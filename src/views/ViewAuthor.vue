<template>
  <div class="view-author">
    <div class="view-author-info container">
        <div class="columns">
            <div class="column is-quarter px-4">
                <img :src="require( `@/assets/accounts/${ author.account.avatar }`)" />
            </div>
            <div class="column is-three-quarters px-4">
                <div class="view-author-info-name headline">{{ author.account.name }}</div>
                <div class="view-author-info-text body py-4">
                    <p>{{ author.account.description }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="view-author-comics">
        <div class="container">
            <div class="subtitle py-4">Comics</div>
            <div class="columns" v-for="comic in comics" :key="comic.key">
                <div class="column is-quarter">
                    <comic-item :comic="comic" />
                </div>
            </div>
        </div>
    </div>
  </div>


</template>

<script>
import { authorsStore } from "@/store/authors";
import { comicsStore } from "@/store/comics";


import ComicItem from '../components/ComicItem.vue';
export default {
  name: 'ViewAuthor',
  data() {
    return {
        author: {},
        comics: []
    };
  },
  async mounted() {
    this.author = await authorsStore.getAuthor(this.$route.params.authorId);
    this.comics = await comicsStore.getAllComicsByAuthor(this.author.id);
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
</style>