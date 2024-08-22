<template>
    <div class="login">
        <div class="columns">
            <div class="column is-full px-5">
              <b-field class="pb-3">
                <b-input placeholder="Username" v-model="username"></b-input>
              </b-field>
    
              <b-field class="py-3">
                <b-input placeholder="Password" v-model="password"></b-input>
              </b-field>

              <div class="buttons">
                  <b-button @click="toggleForgotModal()" type="is-text" class="forgot-username">Forgot Username/Password</b-button>
              </div>
  
              <div class="buttons">
                <b-button @click="handleCancel()">Cancel</b-button>
                <b-button @click="handleSubmit()" type="is-primary" outlined>Submit</b-button>
              </div>
            </div>
        </div>
        <forgot-username :showModal="showForgotModal" @toggle="toggleForgotModal()" @submit="submitForgotModal()"/>
        <confirm-forgot-username :showModal="showConfirmForgotModal" @toggle="toggleConfirmForgotModal()" @submit="submitConfirmForgotModal()" />
    </div>
</template>

<script>
import ForgotUsername from './modals/ForgotUsername.vue'
import ConfirmForgotUsername from './modals/ConfirmForgotUsername.vue'

export default {
    name: 'LoginForm',
    data() {
      return {
        showForgotModal: false,
        showConfirmForgotModal: false,
        username: '',
        password: ''
      }
    },
    methods: {
      handleCancel() {
        this.$emit('toggle-login');
      },
      handleSubmit() {
        if (this.$route.name !== 'dashboard')
          this.$router.push({ name: 'dashboard' });
        
        this.$emit('toggle-login');
      },
      toggleForgotModal() {
        this.showForgotModal = !this.showForgotModal;
      },
      toggleConfirmForgotModal() {
        this.showConfirmForgotModal = !this.showConfirmForgotModal;
      },
      async submitForgotModal() {
        await this.toggleForgotModal();
        await this.toggleConfirmForgotModal();
      },
      async submitConfirmForgotModal() {
        await this.toggleConfirmForgotModal();
        await this.handleCancel();
      },
    },
    components: {
      ForgotUsername,
      ConfirmForgotUsername
    }
}
</script>

<style scoped>
.login {
  position: absolute;
  right: 0;
  top: 60px;
  width: 320px;
  max-height: 380px;
  padding: 20px;
  background: #fff;
  z-index: 31;
  text-align: left;
}

.buttons {
    justify-content: end;
    text-align: right;
}

.button {
    margin-left: 0;
    margin-right: 0;
}

.forgot-username:hover {
    text-decoration: underline;
}
</style>