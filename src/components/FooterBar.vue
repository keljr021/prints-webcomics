<template>
  <div class="footer py-3">
    <div class="columns py-5">
      <div class="column is-half">
        <img src="./../assets/prints_logo_white.png" alt="Prints Webcomic and Hosting logo" class="logo">
      </div>
      <div class="column is-half footer-links">
        <RouterLink class="px-4" to="/terms">Terms and Conditions</RouterLink>
        <RouterLink class="px-4" to="/privacy">Privacy Policy </RouterLink>
        <RouterLink class="px-4" to="/about">About</RouterLink>
        <RouterLink class="px-4" to="/contact">Contact Us</RouterLink>
        <div class="footer-text py-5">
          Some descriptor text at the bottom
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  props: {}
}
</script>

<style lang="scss" scoped>
$primary: #4E4C67; 
.footer {
  background-color: $primary;
  min-height: 100px;
  font-size: 16px;
  color: white;
}

.footer .columns {
  text-align: left;
}

.footer .logo {
  height: 50px;
  opacity: 0.75;
}

.footer .footer-links {
  text-align: right;
}

.footer a {
  font-weight: normal;
  color: white;
}

.footer a:hover {
  color: #ddd;
}

.footer-text {
  font-size: 12px;
}
</style>
