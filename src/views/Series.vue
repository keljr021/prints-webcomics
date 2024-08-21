<template>
  <div class="series">
    <div class="series-info container">
        <div class="columns">
            <div class="column is-three-quarters series-info px-4">
                <div class="series-info-name headline">Celestial Forests</div>
                <div class="series-info-genre">Fantasy</div>
                <div class="series-info-author">Stephanie Liu</div>
                <div class="series-info-text">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet blandit fames finibus finibus magna ad tempor! Nunc diam commodo porta scelerisque maximus nec fusce enim.</p>
                </div>
                <div class="series-info-tw">Trigger Warnings: x</div>
                <div class="series-info-edit" v-if="isAuthor">
                    <b-button type="is-primary" class="pa-2" icon-left="fa-pen" outlined>Edit</b-button>
                </div>
            </div>
            <div class="column is-quarter px-4">
                <div class="series-info-image">
                    <img src="./../assets/cartoon-5190776_1280.jpg" />
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
            <div class="py-4 px-10">
                <comic-chapter :seriesId="0" :isAuthor="isAuthor" />
                <comic-chapter :seriesId="0" :isAuthor="isAuthor" />
                <comic-chapter :seriesId="0" :isAuthor="isAuthor" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ComicChapter from './../components/ComicChapter.vue';
import SortDropdown from './../components/SortDropdown.vue';
export default {
  name: 'Series',
  props: {
    isAuthor: {
        type: Boolean,
        default: false
    }
  },
  computed: {
    getId() {
        return this.$params.seriesId;
    }
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
    border-radius: 15px;
}
</style>