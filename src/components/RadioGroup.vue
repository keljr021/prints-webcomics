<template>
  <div class="py-5">
    <div class="columns fixed-column is-multiline">
        <template v-for="(item, i) in items">
            <div class="column is-6 px-4" :key="i">
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