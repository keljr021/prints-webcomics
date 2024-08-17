<template>
    <section class="featured">
        <div class="headline py-3">Featured List</div>
        <div class="featured-lists py-6">
            <div class="columns">
                <div class="column is-one-quarter"><home-featured-item /></div>
                <div class="column is-one-quarter"><home-featured-item /></div>
                <div class="column is-one-quarter"><home-featured-item /></div>
                <div class="column is-one-quarter"><home-featured-item /></div>
            </div>
        </div>
    </section>
</template>
  
<script>
import HomeFeaturedItem from './HomeFeaturedItem.vue';
export default {
    name: 'HomeFeaturedList',
    props: {
        
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
  