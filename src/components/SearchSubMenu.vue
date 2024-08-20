<template>
    <div class="sub">
        <div class="sub-link active py-3">All</div>
        <div class="sub-link py-3">Authors ({{  totalAuthors }})</div>
        <div class="sub-link py-3">Comics ({{  totalComics }})</div>
    </div>
</template>
  
<script>
export default {
    name: 'SearchSubMenu',
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
  