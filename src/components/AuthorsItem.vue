<template>
    <div class="authors-item">
        <div class="authors-item-image">
            <img src="./../assets/artist-1708777_1280.jpg" />
        </div>
        <div class="authors-item-text">
            <div class="authors-item-text-title">{{ authorName }}</div>
            <div class="authors-item-text-genre">{{ genre }}</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AuthorsItem',
    props: {
        authorName: String,
        genre: String
    },
    methods: {

    }
}
</script>
<style>
.authors-item {
    cursor: pointer;
    text-align: left;
    padding-bottom: 30px;
}

.authors-item-image img {
    max-height: 400px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.authors-item-text {
    padding: 20px 0;
    font-size: 20px;
}

.authors-item-text-title {
    font-weight: bold;
}

.authors-item-text-cw {
    font-style: italic;
    opacity: 0.75;
}
</style>
  