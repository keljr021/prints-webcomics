<template>
    <div class="search-item">
        <div class="columns">
            <div class="column">
                <div class="search-item-image">
                    <img src="./../assets/artist-1708777_1280.jpg" />
                </div>
                <div class="search-item-text">
                    <div class="search-item-text-name">Test Viewer</div>
                    <div class="search-item-text-date">Published 08/08/2024</div>
                    <div class="search-item-text-type">Comic</div>
                    <div class="search-item-text-info">12 Likes, 34 Views</div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SearchItem'
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
    height: 90px;
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
  