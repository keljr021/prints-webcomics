<template>
    <div>
        <b-field size="is-medium">
            <b-select class="sort">
                <option v-for="option in getItems" :value="option.value" :key="option.key" :selected="option.selected">{{ option.text }}</option>
            </b-select>
        </b-field>
    </div>    
</template>
  
<script>
export default {
    name: 'SortDropdown',
    data() {
        return {
            items: [
            {
            text: 'A - Z',
            value: 'az',
            selected: true,
            },
            {
            text: 'Z - A',
            value: 'za',
            selected: false,
            },
            {
            text: 'Recent',
            value: 'recent',
            selected: false,
            },
            {
            text: 'Oldest',
            value: 'oldest',
            selected: false,
            },
            ],
            chapterItems: [
            {
            text: 'A - Z',
            value: 'az',
            selected: true,
            },
            {
            text: 'Z - A',
            value: 'za',
            selected: false,
            },
            {
            text: 'Recent',
            value: 'recent',
            selected: false,
            },
            {
            text: 'Oldest',
            value: 'oldest',
            selected: false,
            },
            ]
        };
    },
    props: {
        chapter: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getItems() {
            if (this.chapter) 
                return this.chapterItems;
            return this.items;
        }
    }
}
</script>
<style>
.sort select {
    width: 300px;
}
</style>