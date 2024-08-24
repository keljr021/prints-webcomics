<template>
    <div class="comment" :class="{'reply': comment.replyId > 0 }">
        <div class="columns">
            <div class="column">
                <div class="comment-image">
                    <img :src="require( `@/assets/accounts/${comment.account.avatar }`)" />
                </div>
                <div class="comment-text">
                    <div class="comment-text-name">{{ comment.account.name }}</div>
                    <div class="comment-text-response">
                        {{ comment.comment }}
                    </div>
                    <div class="comment-footer">
                        <div class="comment-footer-date">{{ comment.createdDate }}</div>
                        <div class="comment-footer-reply">
                            <b-button size="is-small" type="is-text" @click="$emit('toggle')">Reply</b-button>
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
    comment: Object
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