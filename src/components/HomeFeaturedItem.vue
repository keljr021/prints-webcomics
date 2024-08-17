<template>
    <div class="featured-item">
        <div class="featured-item-image">
            <img src="./../assets/cartoon-5190776_1280.jpg" />
        </div>
        <div class="featured-item-text">
            <div class="featured-item-text-title">Comic Title</div>
            <div class="featured-item-text-genre">Genre</div>
            <div class="featured-item-text-author">Author Name</div>
            <div class="featured-item-text-cw">Trigger/Content Warning</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HomeFeaturedItem',
    props: {
        
    },
    methods: {

    }
}
</script>
<style>
.featured-item {
    cursor: pointer;
    text-align: left;
}

.featured-item-image img {
    height: 300px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.featured-item-text {
    padding: 20px 0;
    font-size: 24px;
}

.featured-item-text-title {
    font-weight: bold;
}

.featured-item-text-cw {
    font-style: italic;
}
</style>
  