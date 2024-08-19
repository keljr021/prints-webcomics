<template>
  <div class="view-author">
    <div class="view-author-info container">
        <div class="columns">
            <div class="column is-quarter px-4">
                <img src="./../assets/artist-1708777_1280.jpg" />
            </div>
            <div class="column is-three-quarters px-4">
                <div class="view-author-info-name headline">Stephanie Liu</div>
                <div class="view-author-info-text body py-4">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet blandit fames finibus finibus magna ad tempor! Nunc diam commodo porta scelerisque maximus nec fusce enim.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="view-author-comics">
        <div class="container">
            <div class="subtitle py-4">Comics</div>
            <div class="columns">
                <div class="column is-quarter">
                    <comic-item />
                </div>
                <div class="column is-quarter">
                    <comic-item />
                </div>
                <div class="column is-quarter">
                    <comic-item />
                </div>
                <div class="column is-quarter">
                    <comic-item />
                </div>
            </div>
        </div>
    </div>
  </div>


</template>

<script>
import ComicItem from '../components/ComicItem.vue';
export default {
  name: 'ViewAuthor',
  components: {
    ComicItem
  }
}
</script>

<style scoped>
.view-author-comics {
    padding: 50px 0;
    background: #eee;
}

.body {
    font-size: 20px;
    line-height: 150%;
}
</style>