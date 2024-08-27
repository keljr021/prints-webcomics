<template>
    <div class="comic-chapter" :class="{ 'no-hover': isAuthor }" @click="viewChapter">
        <div class="columns is-mobile is-multiline">
            <div class="column is-full comic-chapter-text">
                <img class="comic-chapter-image" :src="require( `@/assets/chapters/${chapter.image}`)" />

                <div class="comic-chapter-text-stats">
                    <div class="comic-chapter-text-title">{{ chapter.name }}</div>
                    <div class="comic-chapter-text-publish">Published {{ chapter.createdDate }}</div>
                    <div class="comic-chapter-text-likes">{{ chapter.likes }} likes, {{ chapter.views }} Views</div>
                </div>
                <div v-if="isAuthor" class="comic-chapter-text-buttons">
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
        async viewChapter() {
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
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    margin: 20px 15px;
    float: left;
}

.comic-chapter-text {
    margin: 25px 0;
}

.comic-chapter-text-stats {
    padding: 50px 20px;
}

.comic-chapter-text-title {
    font-size: 26px;
    padding-bottom: 5px;
}

.comic-chapter-text-stats {
    float: left;
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

.comic-chapter-text-buttons {
    text-align:right;
    float:right;
}

@media all and (max-width: 768px) {
    .comic-chapter {
        padding: 5px 0;
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: left;
    }

    .comic-chapter-image {
        width: 65px;
        height: 65px;
        margin: 20px 15px;
        float: left;
    }

    .comic-chapter-text {
        margin: 5px 0;
    }

    .comic-chapter-text-stats div {
        font-size: 16px;
    }

    .comic-chapter-text-stats {
        padding: 15px 0;
    }
}
</style>
  