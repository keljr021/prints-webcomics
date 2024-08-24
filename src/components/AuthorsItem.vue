<template>
    <div class="authors-item" @click="handleClick()">
        <div class="authors-item-image">
            <img :src="require( `@/assets/accounts/${ author.account.avatar }`)" />
        </div>
        <div class="authors-item-text">
            <div class="authors-item-text-title">{{ author.account.name }}</div>
            <div class="authors-item-text-genre" style="text-transform:capitalize">
                <template v-for="(genre, i) in author.account.genres">
                    {{  genre + (i < author.genres.length - 1 ? ', ' : '') }}
                </template>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AuthorsItem',
    props: {
        author: Object
    },
    methods: {
        handleClick() {
            this.$router.push({ name: 'viewAuthor', params: { authorId: this.author.id }});
        }
    }
}
</script>
<style>
.authors-item {
    cursor: pointer;
    text-align: left;
    padding-bottom: 30px;
}

.authors-item-image img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.authors-item-text {
    padding: 20px 0;
    font-size: 20px;
}

.authors-item-text-title {
    font-weight: bold;
}

.authors-item-text-cw {
    font-style: italic;
    opacity: 0.75;
}
</style>
  