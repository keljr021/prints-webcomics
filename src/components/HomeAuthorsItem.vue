<template>
    <div class="home-authors-item" @click="clickAuthorItem">
        <div class="columns">
            <div class="column home-authors-item-img is-quarter">
                <img :src="image" />
            </div>
            <div class="column home-authors-item-text is-three-quarters">
                <div class="home-authors-item-text-title py-4">{{ text.name }}</div>
                <div class="home-authors-item-text-description">
                    {{ text.description }} 
                </div>
                <div class="home-authors-item-text-genres py-4">
                    <b>Genres: </b>
                    {{ text.genres }}
                </div>
                <div class="home-authors-item-text-series py-4">
                    <b>Comic Series: </b>
                    {{ text.comics }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HomeAuthorsItem',
    props: {
        image: String,
        text: Object
    },
    methods: {
        clickAuthorItem() {
            this.$router.push({ name: 'authors' });
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

.home-authors-item-img {
    width: 100%;
    object-fit: contain;
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
  