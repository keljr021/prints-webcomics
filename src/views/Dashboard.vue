<template>
  <div class="dashboard container">
    <view-header>
      <template v-slot:header>Dashboard</template>
    </view-header>
    <div>
      x
    </div>
  </div>
</template>

<script>
import ViewHeader from '@/components/ViewHeader.vue';
export default {
  name: 'Dashboard',
  components: {
    ViewHeader
  }
}
</script>

<style>
</style>