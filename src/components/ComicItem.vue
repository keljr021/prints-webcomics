<template>
    <div class="comic-item">
        <div class="comic-item-image">
            <img src="./../assets/cartoon-5190776_1280.jpg" />
        </div>
        <div class="comic-item-text">
            <div class="comic-item-text-title">Comic Title</div>
            <div class="comic-item-text-genre">Genre</div>
            <div class="comic-item-text-author">Author Name</div>
            <div class="comic-item-text-cw">Trigger/Content Warning</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ComicItem',
    props: {
        
    },
    methods: {

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
    font-size: 24px;
}

.comic-item-text-title {
    font-weight: bold;
}

.comic-item-text-cw {
    font-style: italic;
}
</style>
  