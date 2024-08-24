<template>
    <div class="authors">
        <div class="headline py-3">Featured Authors</div>
        <div class="authors-carousel">
            <b-carousel>
                <b-carousel-item v-for="(author, i) in featuredAuthorsList" :key="i">
                    <home-authors-item :author="author" />
                </b-carousel-item>
            </b-carousel>
        </div>
    </div>
</template>
  
<script>
import { authorsStore } from "@/store/authors";

import HomeAuthorsItem from './HomeAuthorsItem.vue';
export default {
    name: 'HomeAuthors',
    data(){
        return {
            featuredAuthorsList: []
        }
    },
    methods: {
        async getFeaturedAuthors() {
            let output = [];
            output = await authorsStore.getFeaturedAuthors();

            this.featuredAuthorsList = output;
        }
    },
    async mounted() {
        await this.getFeaturedAuthors();
    },
    components: {
        HomeAuthorsItem
    }
}
</script>
<style>
.authors {
    padding: 50px;
}

.authors-carousel {
    padding: 30px 0;
}
</style>
  