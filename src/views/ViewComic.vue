<template>
  <div class="view">
    <div class="view-comic">
        <div class="columns is-align-items-center">
            <div class="example-comic"></div>
        </div>
    </div>
    <div class="view-description">
        <div class="container">
            <div class="columns">
                <div class="column is-three-quarters view-description-text">
                    <div class="view-description-text-caption">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="view-description-text-stats">34 Views, 12 Likes</div>
                    <div class="view-description-text-date">Last Updated 08/08/2024</div>
                </div>
                <div class="column is-quarter view-description-author">
                    <div class="view-description-author-image">
                        <img src="./../assets/artist-1708777_1280.jpg" />
                    </div>
                    <div class="view-description-author-name">
                        Author Name
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="view-comments">
        <div class="container">
            <div class="view-comments-header columns">
                <div class="column is-three-quarters">
                    <div class="view-comments-header-text">
                        Comments
                        <b-button type="is-primary" class="pa-2 mx-5" outlined>Add Comment</b-button>
                    </div>
                </div>
                <div class="column">
                    x
                </div>
            </div>
            <div class="view-comments-items">
               <comment-item /> 
               <comment-item reply /> 
               <comment-item reply /> 
               <comment-item /> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CommentItem from '../components/CommentItem.vue';
export default {
  name: 'ViewComic',
  components: {
    CommentItem
  }
}
</script>

<style scoped>
.view-comic {
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
}

.view-comic-image {
    text-align: center;
}

.example-comic {
    width: 840px;
    height: 1940px;
    background: #aaa;
}
.view-descpription {
    background: #ccc;
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