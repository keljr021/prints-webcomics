<template>
  <div class="genres container">
    <view-header>
      <template v-slot:header>Genres</template>
    </view-header>

    <div class="columns py-4" style="text-align:right">
      <div class="column">
        <sort-dropdown />
      </div>
    </div>

    <div>
      <div class="columns">
        <div class="column is-one-quarter">
          <genres-sub-menu />
        </div>
        <div class="column is-three-fourths fixed-box">
            <div class="columns">
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
            </div>
            <div class="columns">
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
                <div class="column is-one-third"><comic-item /></div>
            </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import ViewHeader from './../components/ViewHeader.vue';
import GenresSubMenu from './../components/GenresSubMenu.vue';
import ComicItem from './../components/ComicItem.vue';
import SortDropdown from './../components/SortDropdown.vue';
export default {
  name: 'Genres',
  components: {
    ViewHeader,
    GenresSubMenu,
    ComicItem,
    SortDropdown
  }
}
</script>

<style>
.fixed-box {
  width: initial;
  max-height: 600px;
  overflow: hidden auto;
}
</style>