<template>
  <div class="contact container">
    <view-header>
      <template v-slot:header>Contact Us</template>
    </view-header>
    <div>
      <div class="columns">
        <div class="column is-half">
          <b-field label="Email" class="pb-3">
            <b-input v-model="email"></b-input>
          </b-field>
          <b-field label="Name" class="pb-3">
            <b-input v-model="fullname"></b-input>
          </b-field>
          <b-field label="Message" class="pb-3">
            <b-input v-model="message" maxlength="200" type="textarea"></b-input>
          </b-field>
        </div>
        <div class="column is-half">
          <img src="./../assets/prints_logo.png" alt="Prints Webcomic and Hosting logo" class="logo">

          <div class="py-3">
            <b>Mailing Address</b><br />
            6421 Main Street<br />
            Anytown, NC 28113
          </div>

          <div class="py-3">
            <b>Toll-Free Phone</b><br />
            <a href="tel:9195885198">(919) 588-5198</a><br />
            <a href="tel:9104889985">(910) 488-9985</a>
          </div>

          <div class="py-3">
            <b>Email</b><br />
            <a href="mailto:contact@prints.com">contact@prints.com</a><br />
            <a href="mailto:services@prints.com">services@prints.com</a>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-button @click="submitContactForm" type="is-primary">Submit</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewHeader from './../components/ViewHeader.vue';
export default {
  name: 'Contact',
  data() {
    return {
      fullname: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitContactForm() {
      alert("Thanks for your submission! We will contact you within 24 hours.");
    }
  },
  components: {
    ViewHeader
  }
}
</script>

<style scoped>
.contact img.logo {
  height: 50px;
  margin-bottom: 15px;
}

.contact .column {
  padding-right: 50px;
}

.contact a {
  color: black;
}
</style>