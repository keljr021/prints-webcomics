<template>
  <div class="footer py-3">
    <div class="columns is-multiline py-5">
      <div class="column is-full-mobile is-half-desktop">
        <img src="./../assets/prints_logo_white.png" alt="Prints Webcomic and Hosting logo" class="logo">
      </div>
      <div class="column is-full-mobile is-half-desktop footer-links">
        <RouterLink class="px-4" to="/terms">Terms and Conditions</RouterLink>
        <RouterLink class="px-4" to="/privacy">Privacy Policy </RouterLink>
        <RouterLink class="px-4" to="/about">About</RouterLink>
        <RouterLink class="px-4" to="/contact">Contact Us</RouterLink>
        <div class="footer-text py-5">
          This is a portfolio example. Some features may not work as expected. Site built by <a style="font-style:italic;text-decoration: underline;" href="https://kelvin-m.com/#/" target="_blank">Kelvin Morrisey Jr.</a>
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

@media all and (max-width: 768px) {
  .footer .footer-links {
    width: 100%;
    text-align: left;
    margin: 24px 12px;
  }

}
</style>
