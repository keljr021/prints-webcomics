<template>
    <div class="comic-chapter" @click="viewChapter">
        <div class="columns">
            <div class="column is-quarter">
                <img class="comic-chapter-image" src="./../assets/cartoon-5190776_1280.jpg" />
            </div>
            <div class="column is-three-quarters comic-chapter-text">
                <div class="comic-chapter-text-title">Introduction</div>
                <div class="comic-chapter-text-publish">Published 08/08/2024</div>
                <div class="comic-chapter-text-likes">12 Likes, 34 Views</div>
                <div class="comic-chapter-text-tw">Trigger Warnings: x</div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ComicItem',
    props: {
        seriesId: {
            type: String,
            default: '0'
        },
        id: {
            type: String,
            default: '0'
        }
    },
    methods: {
        viewChapter() {
            return this.$router.push({ path: '/series/' + this.seriesId + '/' + this.id });
        }
    }
}
</script>
<style>
.comic-chapter {
    width: calc(100% - 60px);
    margin: 30px;
    padding: 30px;
    border-bottom: 1px solid black;
    cursor: pointer;
    transition: background-color ease-in-out 0.3s;
}

.comic-chapter:hover {
    background-color: #ccc;
}

.comic-chapter-image {
    width: 80%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
}

.comic-chapter-text {
    margin: 25px 0;
}

.comic-chapter-text-title {
    font-size: 26px;
    padding-bottom: 5px;
}

.comic-chapter-text-publish,
.comic-chapter-text-likes,
.comic-chapter-text-tw {
    font-size: 18px;
    padding-bottom: 5px;
    opacity: 0.5;
}

.comic-chapter-text-tw {
    font-style: italic;
}
</style>
  