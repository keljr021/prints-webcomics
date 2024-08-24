<template>
    <div class="comic-chapter" :class="{ 'no-hover': isAuthor }" @click="viewChapter">
        <div class="columns">
            <div class="column is-quarter">
                <img class="comic-chapter-image" :src="require( `@/assets/chapters/${chapter.image}`)" />
            </div>
            <div class="column is-three-quarters comic-chapter-text" style="float:left">
                <div style="float:left">
                    <div class="comic-chapter-text-title">{{ chapter.name }}</div>
                    <div class="comic-chapter-text-publish">Published {{ chapter.createdDate }}</div>
                    <div class="comic-chapter-text-likes">{{ chapter.likes }} likes, {{ chapter.views }} Views</div>
                </div>
                <div style="text-align:right;float:right" v-if="isAuthor">
                    <b-button size="is-small" type="is-primary" class="px-4 mr-3" icon-left="fa-magnifying-glass" outlined>View</b-button>
                    <b-button size="is-small" type="is-primary" class="px-4 mr-3" icon-left="fa-pen" outlined>Edit</b-button>
                    <b-button size="is-small" type="is-primary" class="px-4" icon-left="fa-trash" outlined>Delete</b-button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ComicItem',
    props: {
        chapter: Object,
        isAuthor: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        viewChapter() {
            if (!this.isAuthor)
                return this.$router.push({ path: '/series/' + this.chapter.comicId + '/' + this.chapter.id });
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

.comic-chapter.no-hover {
    background-color: initial;
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
  