<template>
    <div v-if="isDesktop || isTablet" class="sub">
        <div class="sub-link active py-3">All</div>
        <div class="sub-link py-3">Authors ({{  totalAuthors }})</div>
        <div class="sub-link py-3">Comics ({{  totalComics }})</div>
    </div>
    <div v-else class="sub">
        <b-field size="is-medium">
            <b-select class="sort" placeholder="Filter search">
                <option value="all" selected>All</option>
                <option value="authors" selected>Authors ({{  totalAuthors }})</option>
                <option value="comics" selected>Comics ({{  totalComics }})</option>
            </b-select>
        </b-field>
    </div>

</template>
  
<script>
import VueBreakpointMixin from 'vue-breakpoint-mixin';

export default {
    name: 'SearchSubMenu',
    mixins: [ VueBreakpointMixin ],
    props: {
        totalAuthors: String,
        totalComics: String
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
</style>
  