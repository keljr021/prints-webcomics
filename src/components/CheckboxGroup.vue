<template>
  <div class="py-5 fixed-grid has-2-cols">
    <div class="grid">
        <template v-for="(item, i) in items">
            <div class="cell px-4" :key="i">
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