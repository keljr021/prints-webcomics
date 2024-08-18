<template>
  <div class="notfound container">
    <div class="columns">
      <div class="column is-half">
        <view-header>
          <template v-slot:header>404 Page Not Found</template>
        </view-header>
        <p>This page has been moved or does not exist.</p>
        <p>If you feel this is in error, contact <a href="mailto:services@prints.com">services@prints.com</a></p>
      </div>
      <div class="column is-half notfound-image">
        <img height="500" src="./../assets/Seo-Error-2-4--Streamline-Ux.png" />
      </div>      
    </div>
  </div>
</template>

<script>
import ViewHeader from './../components/ViewHeader.vue';
export default {
  name: 'NotFoundView',
  components: {
    ViewHeader
  }
}
</script>

<style scoped>
.notfound p {
  padding-bottom: 40px;
}

.notfound-image {
  padding: 0;
  text-align: center;
}
.notfound-image img {
  opacity: 0.85;
}
</style>