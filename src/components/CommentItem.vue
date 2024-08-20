<template>
    <div class="comment" :class="{'reply': reply }">
        <div class="columns">
            <div class="column">
                <div class="comment-image">
                    <img src="./../assets/artist-1708777_1280.jpg" />
                </div>
                <div class="comment-text">
                    <div class="comment-text-name">Test Viewer</div>
                    <div class="comment-text-response">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </div>
                    <div class="comment-footer">
                        <div class="comment-footer-date">08/08/2024</div>
                        <div class="comment-footer-reply">
                            <b-button size="is-small" type="is-text">Reply</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    reply: Boolean
  }
}
</script>

<style scoped>
.comment {
    padding: 25px;
}

.comment.reply {
    padding-left: 160px;
}

.comment-image {
    padding: 20px;
    float: left;
}

.comment-image img {
    height: 90px;
}

.comment-text {
    padding: 20px 0 10px;
    float: left;
}

.comment-text-name {
    font-weight: 500;
}

.comment-footer {
    width: 100%;
    padding: 10px 0;
    font-size: 80%;
    font-style: italic;
}

.comment-footer-date {
    float: left;
}

.comment-footer-reply {
    float: right;
}
</style>