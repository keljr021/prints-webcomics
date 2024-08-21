<template>
    <div class="menu">
        <div class="menu-list" :class="{ 'active': showMenu }">
            <div class="menu-list-item">
                <b-button @click="handleLike()" class="is-light" size="is-small" type="is-primary" outlined icon-left="fa-thumbs-up">Like</b-button>
            </div>
            <div class="menu-list-item">
                <b-button @click="handleFavorite()" class="is-light" size="is-small" type="is-primary" outlined icon-left="fa-star">Favorite</b-button>
            </div>
            <div class="menu-list-item">
                <b-button @click="handleComments()" class="is-light" size="is-small" type="is-primary" outlined icon-left="fa-comment">Comments</b-button>
            </div>
            <div class="menu-list-item">
                <b-button @click="handleShare()" class="is-light" size="is-small" type="is-primary" outlined icon-left="fa-share-from-square">Share</b-button>
            </div>
            <div class="menu-list-item">
                <b-button @click="handleBack()" class="is-light" size="is-small" type="is-primary" outlined icon-left="fa-arrow-left">Back</b-button>
            </div>
        </div>
        <b-button @click="toggleMenu()" class="is-light" size="is-medium" type="is-primary" outlined icon-right="fa-bars" />
    </div>
</template>

<script>
export default {
  name: 'ViewComicMenu',
  data() {
    return {
        showMenu: false
    };
  },
  props: {
    seriesId: Number
  },
  methods: {
    toggleMenu() {
        this.showMenu = !this.showMenu;
    },
    handleLike() {
        console.log('like button clicked.');
        this.toggleMenu();
    },
    handleFavorite() {
        console.log('favorite button clicked.');
        this.toggleMenu();
    },
    handleComments() {
        console.log('comments button clicked.');
        this.toggleMenu();
    },
    handleShare() {
        console.log('share button clicked.');
        this.toggleMenu();
    },
    handleBack() {
        this.$router.push({ path: '/series/' + this.seriesId });
    }
  }
}
</script>

<style scoped>
.menu {
    position: fixed;
    left: 50px;
    bottom: 25px;
    text-align: left;
}

.menu-list {
    display: none;
}

.menu-list.active {
    display: initial;
}

.menu-list-item {
    clear: both;
    margin: 10px 0;
}
</style>