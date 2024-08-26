<template>
  <div class="view">
    <view-comic-menu :seriesId="0" />
    <div class="view-comic">
        <div class="view-comic-header">
            <div class="view-comic-header-title">{{ comic.title }}</div>
            <div class="view-comic-header-chapter">{{ chapter.name }}</div>
        </div>
        
        <div class="columns">
            <div class="column is-quarter">&nbsp;</div>
            <div class="column is-half">
                <div class="example-comic"></div>
            </div>
            <div class="column is-quarter">&nbsp;</div>
        </div>
    </div>
    <div class="view-description">
        <div class="container">
            <div class="columns">
                <div class="column is-9 view-description-text">
                    <div class="view-description-text-caption">
                        <p>{{ chapter.description }}</p>
                    </div>
                    <div class="view-description-text-stats">{{ chapter.views }} Views, {{ chapter.likes }} Likes</div>
                    <div class="view-description-text-date">Last Updated {{ chapter.createdDate }}</div>
                </div>
                <div class="column is-3 view-description-author">
                    <div class="view-description-author-image" v-if="comic.author.account.avatar && comic.author.account.avatar != 'test.png'">
                        <img :src="require( `@/assets/accounts/${ comic.author.account.avatar }`)" />
                    </div>
                    <div class="view-description-author-image" v-else>
                        <img :src="require( `@/assets/accounts/user-6380868_1280.png`)" />
                    </div>
                    <div class="view-description-author-name">
                        {{ comic.author.account.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="view-comments">
        <div class="container">
            <div class="view-comments-header columns">
                <div class="column is-9">
                    <div class="view-comments-header-text">
                        Comments
                        <b-button type="is-primary" class="pa-2 mx-5" @click="toggleCommentModal()" outlined>Add Comment</b-button>
                    </div>

                </div>
                <div class="column is-3">
                    <div class="columns" style="text-align:right">
                        <div class="column">
                            <sort-dropdown />
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="comments.length > 0">
                <div class="view-comments-items" v-for="comment in comments" :key="comment.key">
                   <comment-item :comment="comment" @toggle="toggleCommentModal()"/> 
                </div>
            </div>

            <div v-else>
                <p>No comments.</p>
            </div>
        </div>
        <add-comment :showModal="showCommentModal" @toggle="toggleCommentModal()" />
    </div>
  </div>
</template>

<script>
import { comicsStore } from "@/store/comics";
import { chaptersStore } from "@/store/chapters";
import { commentsStore } from "@/store/comments";

import CommentItem from '../components/CommentItem.vue';
import ViewComicMenu from '../components/ViewComicMenu.vue';
import SortDropdown from '../components/SortDropdown.vue';
import AddComment from './../components/modals/AddComment.vue';
export default {
  name: 'ViewComic',
  data() {
    return {
        showCommentModal: false,
        comic: {},
        chapter: {},
        comments: []
    };
  },
  methods: {
    toggleCommentModal() {
        this.showCommentModal = !this.showCommentModal;
        console.log('set comment modal to: ', this.showCommentModal);
    }
  },
  async created() {
    let chapterId = this.$route.params.chapterId;

    console.log('chapter id: ', chapterId);

    if (chapterId !== '') {
        await chaptersStore.fetchAllChapters();
        await commentsStore.fetchAllComments();
        
        this.chapter = await chaptersStore.getChapter(chapterId);
        this.comic = await comicsStore.getComic(this.chapter.comicId);
        this.comments = await commentsStore.getCommentsForComic(this.comic.id);
    }

  },
  components: {
    CommentItem,
    ViewComicMenu,
    SortDropdown,
    AddComment
  }
}
</script>

<style scoped>
.view-comic {
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
}

.view-comic-header {
    position: absolute;
    top: 80px;
    left: 0;
    min-width: 300px;
    padding: 5px 0;
    background-color: #4E4C67;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
    text-align: left;
}

.view-comic-header-title,
.view-comic-header-chapter {
    padding: 5px 30px;
}

.view-comic-header-title {
    font-size: 32px;
    font-weight: 500px;
}

.view-comic-header-chapter {
    width: 80%;
    font-size: 24px;
}

.view-comic-image {
    padding-top: 150px;
}

.example-comic {
    width: 840px;
    height: 1940px;
    background: #aaa;
}
.view-description {
    background: #eee;
}

.view-description-text-caption {
    font-size: 20px;
    padding: 20px 0;
}

.view-description-text-stats,
.view-description-text-date {
    font-size: 16px;
}

.view-description-author {
    cursor: pointer;
}

.view-description-author-image {
    padding: 15px 0;
}

.view-description-author-image img {
    height: 175px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.view-comments {
    background: #ddd;
}

.view-comments-header {
    padding: 20px 0;
    border-bottom: 1px solid black;
}

.view-comments-header-text {
    font-size: 32px;
    padding: 5px 0;
}
</style>