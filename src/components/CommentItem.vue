<template>
    <div class="comment" :class="{'reply': comment.replyId > 0 }">
        <div class="columns is-mobile is-multiline">
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
    float: left;
    padding: 10px 20px;
}

.comment-image img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 15px;
}

.comment-text {
    padding: 10px 5px;
}

.comment-text-name {
    font-weight: bold;
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

@media all and (max-width: 768px) {
    .comment {
        padding: 10px 5px;
        border-bottom: 1px solid #999;
    }

    .comment.reply {
        padding-left: 30px;
    }

    .comment-image, .comment-text {
        padding-left: 0;
    }

    .comment-image {
      
    }

    .comment-image img {
        width: 65px;
        height: 65px;
    }

    .comment-text {
        padding-top: 0;
        margin: 0 5px;
    }

    .comment-footer {
        margin: 0;
    }

    .comment-footer-reply button {
        padding: 0;
        margin: 0;
    }
    .comment-footer-date {
        padding: 7px 0;
        float: left;
    }
}
</style>