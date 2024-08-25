<template>
  <div class="py-5 fixed-grid has-2-cols">
    <div class="grid">
        <template v-for="(item, i) in items">
            <div class="cell px-4" :key="i">
                <b-radio v-model="selected" style="text-transform:capitalize">{{ item }}</b-radio>
            </div>
        </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
  data() {
    return {
        selected: null
    };
  },
  props: {
    items: Array,
    checkedItem: String
  }
}
</script>

<style scoped>

</style>