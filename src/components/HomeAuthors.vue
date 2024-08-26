<template>
    <div class="authors">
        <div class="headline py-3">Featured Authors</div>
        <div class="authors-carousel">
            <b-carousel>
                <b-carousel-item v-for="(item, i) in featuredAuthorsList" :key="i">
                    <home-authors-item :author="item" />
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
        };
    },
    async created() {
        this.featuredAuthorsList = authorsStore.getFeaturedAuthors();
    },
    components: {
        HomeAuthorsItem
    }
}
</script>
<style scoped>
.authors {
    padding: 50px;
}

.authors-carousel {
    padding: 30px 0;
}

@media all and (max-width: 768px) {
    .authors {
        padding: 20px 0;
    }
}
</style>
  