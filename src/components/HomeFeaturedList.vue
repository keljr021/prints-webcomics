<template>
    <section class="featured">
        <div class="headline py-3">{{ header || 'Featured List'}}</div>
        <div class="featured-lists py-6">
            <div class="columns">
                <div class="column is-3" v-for="comic in comicList" :key="comic.key">
                    <home-featured-item :comic="comic" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import HomeFeaturedItem from './HomeFeaturedItem.vue';
export default {
    name: 'HomeFeaturedList',
    props: {
        header: String,
        comicList: Array
    },
    components: {
        HomeFeaturedItem
    }
}
</script>
<style>
.featured {
    padding: 50px;
}

.featured-title {
    text-align: left;
}
</style>
  