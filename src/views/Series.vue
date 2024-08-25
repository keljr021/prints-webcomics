<template>
  <div class="series">
    <div class="series-info container">
        <div class="columns">
            <div class="column is-three-quarters series-info px-4">
                <div class="series-info-name headline">{{ comic.title }}</div>
                <div class="series-info-genre" style="text-transform:capitalize;">
                    <template v-for="(genre, i) in comic.genres">
                        {{  genre + (i < comic.genres.length - 1 ? ', ' : '') }}
                    </template>
                </div>
                <div class="series-info-author">{{ comic.author.name }}</div>
                <div class="series-info-text">
                    <p>{{ comic.synopsis }}</p>
                </div>
                <div class="series-info-tw" v-if="comic.triggerWarning !== ''">Trigger Warnings: {{ comic.triggerWarning }}</div>
                <div class="series-info-edit" v-if="isAuthor">
                    <b-button type="is-primary" class="pa-2" icon-left="fa-pen" outlined>Edit</b-button>
                </div>
            </div>
            <div class="column is-quarter px-4">
                <div class="series-info-image">
                    <img :src="require( `@/assets/comics/${comic.cover}`)" />
                </div>
            </div>
        </div>
    </div>
    <div class="series-comics">
        <div class="container">
            <div class="subtitle">
                <div>
                    <div style="float:left;padding:10px 0">Chapters</div>
                    
                    <div style="float:left;padding: 15px" v-if="isAuthor">
                        <b-button type="is-primary" class="pa-3" icon-left="fa-plus" outlined>Add New Chapter</b-button>
                    </div>

                    <div style="float:right;text-align:right">
                        <div class="column">
                            <sort-dropdown chapter />
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4 px-10" v-for="chapter in chapters" :key="chapter.key">
                <comic-chapter :chapter="chapter" :isAuthor="isAuthor" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { comicsStore } from "@/store/comics";
import { chaptersStore } from "@/store/chapters";

import ComicChapter from './../components/ComicChapter.vue';
import SortDropdown from './../components/SortDropdown.vue';
export default {
  name: 'Series',
  data() {
    return {
        comic: {},
        chapters: []
    };
  },
  props: {
    isAuthor: {
        type: Boolean,
        default: false
    }
  },
  async mounted() {
    console.log('found id: ', this.$route.params.seriesId );
    this.comic = await comicsStore.getComic(this.$route.params.seriesId);

    await chaptersStore.fetchAllChapters();
    this.chapters = await chaptersStore.fetchChaptersByComic(this.$route.params.seriesId);
  },
  components: {
    ComicChapter,
    SortDropdown
  }
}
</script>

<style scoped>
.series-comics {
    padding: 50px 0;
    background: #eee;
}

.series-info {
    font-size: 24px;
}

.series-info-genre
.series-info-author,
.series-info-text,
.series-info-tw {
    padding: 20px 0;
}

.series-info-text p {
    line-height: 150%;
}

.series-info-tw {
    font-style: italic;
    opacity: 0.5;
}

.series-info-image img {
    width: 250px;
    height: 350px;
    object-fit: cover;
    border-radius: 15px;
}
</style>