<template>
    <div class="sub">
        <template v-for="item in subMenu">
            <div class="sub-link py-3" :key="item.key">
                <RouterLink :to="'/genres/' + item.query" :class="($route.params.query === item.query) ? 'active' : ''">{{ item.name }}</RouterLink>
            </div>
        </template>
    </div>
</template>
  
<script>
export default {
    name: 'GenresSubMenu',
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
                { name: 'Slice of Life', query: 'slice' },
            ]
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
</style>
  