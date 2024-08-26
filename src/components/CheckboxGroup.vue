<template>
  <div class="py-5">
    <div class="columns fixed-column is-multiline">
        <template v-for="(item, i) in items">
            <div class="column is-6 px-4" :key="i">
                <b-checkbox :checked="checkedItems && checkedItems.includes(item)" style="text-transform:capitalize">{{ item }}</b-checkbox>
            </div>
        </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    items: Array,
    checkedItems: Array
  }
}
</script>

<style scoped>

</style>