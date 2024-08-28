<template>
  <div class="series">
    <div class="container">
        <div class="columns is-mobile is-multiline">
            <div class="column is-full-mobile is-three-quarters-desktop series-info px-4">
                <div class="series-info-name headline">{{ comic.title }}</div>
                <div class="series-info-genre" style="text-transform:capitalize;padding: 20px 0;">
                    <template v-for="(genre, i) in comic.genres">
                        {{  genre + (i < comic.genres.length - 1 ? ', ' : '') }}
                    </template>
                </div>
                <div class="series-info-author">{{ comic.author.account.name }}</div>
                <div class="series-info-text">
                    <p>{{ comic.synopsis }}</p>
                </div>
                <div class="series-info-tw" v-if="comic.triggerWarning !== ''">Trigger Warnings: {{ comic.triggerWarning }}</div>
                <div class="series-info-edit" v-if="isAuthor">
                    <b-button type="is-primary" class="pa-2" icon-left="fa-pen" outlined>Edit</b-button>
                </div>
            </div>
            <div class="column is-full-mobile is-quarter-desktop px-4">
                <div class="series-info-image">
                    <img :src="require( `@/assets/comics/${comic.cover}`)" />
                </div>
            </div>
        </div>
    </div>
    <div class="series-comics">
        <div :class="{ 'container': isDesktop || isTablet }">
            <div class="subtitle">
                <div>
                    <div class="series-comics-header">Chapters</div>
                    
                    <div class="series-comics-header-buttons" v-if="isAuthor">
                        <b-button type="is-primary" class="pa-3" icon-left="fa-plus" outlined>Add New Chapter</b-button>
                    </div>

                    <div class="columns is-mobile is-multiline">
                        <div class="column series-sort">
                            <sort-dropdown chapter />
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="chapters.length > 0">
                <div class="py-4 px-10" v-for="chapter in chapters" :key="chapter.key">
                    <comic-chapter :chapter="chapter" :isAuthor="isAuthor" />
                </div>
            </div>        
            <div v-else>
                <div style="clear:both">
                    <div class="columns is-mobile is-multiline">
                        <div class="column is-full">
                            No chapters published yet.
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
  </div>
</template>

<script>
import VueBreakpointMixin from 'vue-breakpoint-mixin';

import { comicsStore } from "@/store/comics";
import { chaptersStore } from "@/store/chapters";

import ComicChapter from './../components/ComicChapter.vue';
import SortDropdown from './../components/SortDropdown.vue';
export default {
  name: 'Series',
  mixins: [VueBreakpointMixin],
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

.series-sort {
    float: right;
    text-align: right
}

.series-comics-header {
    float:left;
    padding:10px 0;
}

.series-comics-header-buttons {
    float:left;
    padding: 15px;
}

@media all and (max-width: 768px) {
    .series {
        text-align: left;
    }

    .subtitle {
        margin-bottom: 12px;
    }

    .series-comics-header {
        float: initial;
        width: 100%;
        padding: 10px 30px;
    }

    .series-comics-header-buttons {
        float: initial;
        width: 100%;
    }

    .series-sort {
        float: initial;
        text-align: center;
        padding: 50px 0;
        width: 100%;
    }

}
</style>