<template>
    <div class="sub">
        <div v-if="!isMobile">
            <template v-for="item in subMenu">
                <div class="py-3" :key="item.key">
                    <RouterLink :to="'/genres/' + item.query" :class="{ 'sub-link': true, 'active': genre === item.query }">{{ item.name }}</RouterLink>
                </div>
            </template>
        </div>
        <div v-else style="text-align: center;">
            <b-field size="is-medium">
                <b-select class="sort" placeholder="Genre" @input="$router.push({ path: '/genres/' + item.query })">
                    <option v-for="genreItem in subMenu" :value="genreItem.query" :key="genreItem.key" :selected="genre === genreItem.query">{{ genreItem.name }}</option>
                </b-select>
            </b-field>
        </div>
    </div>
</template>
  
<script>
import VueBreakpointMixin from 'vue-breakpoint-mixin';

export default {
    name: 'GenresSubMenu',
    mixins: [ VueBreakpointMixin ],
    data() {
        return {
            subMenu: [
                { name: 'All', query: '' },
                { name: 'Action', query: 'action' },
                { name: 'Adventure', query: 'adventure' },
                { name: 'Comedy', query: 'comedy' },
                { name: 'Drama', query: 'drama' },
                { name: 'Fantasy', query: 'fantasy' },
                { name: 'Horror', query: 'horror' },
                { name: 'Romance', query: 'romance' },
                { name: 'Slice of Life', query: 'slice-of-life' },
            ]
        }
    },
    props: {
        genre: {
            type: String,
            default: null
        }
    }
}
</script>
<style>
.sub {
    border-right: 1px solid black;
    color: black;
}

.sub-link {
    font-size: 24px;
}

.sub-link .active {
    font-weight: bold;
    color: #4E4C67;
}

.sub-link:hover {
    text-decoration: underline;
}

@media all and (max-width: 768px) {
    .sub {
        border-right: none !important;
    }
}
</style>
  