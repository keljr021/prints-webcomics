<template>
    <div class="featured-item" @click="handleClickFeature()">
        <div class="featured-item-image">
            <img :src="require( `@/assets/comics/${comic.cover}`)" />
        </div>
        <div class="featured-item-text">
            <div class="featured-item-text-title">{{ comic.title }}</div>
            <div class="featured-item-text-genre">{{ comic.genre }}</div>
            <div class="featured-item-text-author">{{ comic.author.account.name }}</div>
            <div class="featured-item-text-cw" v-if="comic.triggerWarning !== ''">{{ 'TW: ' + comic.triggerWarning }}</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HomeFeaturedItem',
    props: {
        comic: Object
    },
    methods: {
        handleClickFeature() {
            this.$router.push({ path: '/series/' + this.comic.id });
        }
    }
}
</script>
<style>
.featured-item {
    cursor: pointer;
    text-align: left;
}

.featured-item-image img {
    width: 250px;
    height: 350px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.featured-item-text {
    padding: 20px 0;
    font-size: 20px;
}

.featured-item-text-title {
    font-weight: bold;
}

.featured-item-text-cw {
    font-style: italic;
    opacity: 0.7;
}
</style>
  