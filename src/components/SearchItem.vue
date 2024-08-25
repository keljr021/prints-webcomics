<template>
    <div class="search-item" @click="handleClick()">
        <div class="columns">
            <div class="column">
                <div class="search-item-image">
                    <img :src="require( `@/assets/comics/${comic.cover}`)" />
                </div>
                <div class="search-item-text">
                    <div class="search-item-text-name">{{ comic.title }}</div>
                    <div class="search-item-text-date">Published {{ comic.createdDate }}</div>
                    <div class="search-item-text-type">Comic</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SearchItem',
    props: {
        comic: Object
    },
    methods: {
        handleClick() {
            return this.$router.push({ path: '/series/' + this.comic.id });
        }
    }
}
</script>
<style scoped>
.search-item {
    transition: background ease-in-out 0.3s;
    padding: 20px 10px;
    cursor: pointer;
    border-bottom: 1px solid black;
}

.search-item:hover {
    background: #ccc;
}

.search-item-image {
    padding: 20px;
    float: left !important;
}

.search-item-image img {
    width: 90px;
    height: 90px;
    object-fit: cover;
}

.search-item-text {
    padding: 20px 0 10px;
    float: left !important;
}

.search-item-text-name {
    font-weight: 500;
}

.search-item-text-date,
.search-item-text-type,
.search-item-text-info {
    opacity: 0.6;
}
</style>
  