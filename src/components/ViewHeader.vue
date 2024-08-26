<template>
    <div class="view-header">
      <div class="headline">
        <slot name="header"></slot>
      </div>
      <div class="view-header-caption" v-if="$slots.caption">
        <slot name="caption"></slot>
      </div>
    </div>
</template>
  
<script>
export default {
    name: 'ViewHeader',
    props: {

    },
    methods: {

    }
}
</script>
<style>
.view-header {
    text-align: left;
    padding-bottom: 100px;
}

.view-header-caption {
    padding-top: 50px;
}

@media all and (max-width: 768px) {
  .view-header {
    padding-bottom: 20px;
  }

  .headline {
    line-height: 100%;
  }

  .view-header-caption {
    padding-top: 20px;
  }
}
</style>
  