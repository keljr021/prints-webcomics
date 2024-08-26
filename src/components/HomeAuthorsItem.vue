<template>
    <div class="home-authors-item" @click="clickAuthorItem">
        <div class="columns">
            <div class="column home-authors-item-img is-quarter">
                <img :src="require( `@/assets/accounts/${author.account.avatar}`)" />
            </div>
            <div class="column home-authors-item-text is-three-quarters">
                <div class="home-authors-item-text-title py-4">{{ author.account.name }}</div>
                <div class="home-authors-item-text-description">
                    {{ author.description }}
                </div>
                <div class="home-authors-item-text-genres py-4" style="text-transform:capitalize">
                    <b>Genres: </b>
                    <template v-for="(genre, i) in author.genres">
                        {{  genre + (i < author.genres.length - 1 ? ', ' : '') }}
                    </template>
                </div>
                <div class="home-authors-item-text-series py-4">
                    <b>Comic Series: </b>
                    <template v-for="(comic, i) in author.comics">
                        {{  comic.title + (i < author.comics.length - 1 ? ', ' : '') }}
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HomeAuthorsItem',
    props: {
        author: Object
    },
    methods: {
        clickAuthorItem() {
            this.$router.push({ path: '/authors/' + this.author.id });
        }
    }
}
</script>
<style>
.home-authors-item {
    min-height: 400px;
    background: #4e4c67;
    color: white;
    cursor: pointer;
}

.home-authors-item-img img {
    height: 400px;
    object-fit: cover;
}

.home-authors-item-text {
    padding: 64px 48px 48px;
    text-align: left;
}

.home-authors-item-text-title {
    font-size: 32px;
}

.home-authors-item-text-description {
    line-height: 150%;
    font-size: 22px;
    font-weight: normal;

}

.home-authors-item-text-genres,
.home-authors-item-text-series {
    font-size: 22px;
    font-style: italic;
    font-weight: normal;
}
</style>
  