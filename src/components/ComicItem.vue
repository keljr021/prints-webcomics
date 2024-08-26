<template>
    <div class="comic-item" @click="viewSeries">
        <div class="featured-item-image">
            <img :src="require( `@/assets/comics/${comic.cover}`)" />
        </div>
        <div class="featured-item-text">
            <div class="featured-item-text-title">{{ comic.title }}</div>
            <div v-if="comic.author.genres" class="featured-item-text-genre" style="text-transform:capitalize">
                <template v-for="(genre, i) in comic.genres">
                    {{  genre + (i < comic.genres.length - 1 ? ', ' : '') }}
                </template>
            </div>
            <div class="featured-item-text-author">{{ comic.author.account.name }}</div>
            <div class="featured-item-text-cw" v-if="comic.triggerWarning !== ''">{{ 'TW: ' + comic.triggerWarning }}</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ComicItem',
    props: {
        comic: Object
    },
    methods: {
        viewSeries() {
            return this.$router.push({ path: '/series/' + this.comic.id });
        }
    }
}
</script>
<style>
.comic-item {
    cursor: pointer;
    text-align: left;
    padding-bottom: 30px;
}

.comic-item-image img {
    height: 250px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.comic-item-text {
    padding: 20px 0;
    font-size: 20px;
}

.comic-item-text-title {
    font-weight: bold;
}

.comic-item-text-cw {
    font-style: italic;
    opacity: 0.75;
}

@media all and (max-width: 768px) {
    .comic-item-text {
        font-size: 85% !important;
    }

    .comic-item-image img {
        width: 125px;
        height: 180px;
    }
}
</style>
  