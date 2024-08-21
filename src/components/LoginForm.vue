<template>
    <div class="login">
        <div class="columns">
            <div class="column is-full px-5">
              <b-field label="Username" class="pb-3">
                <b-input v-model="username"></b-input>
              </b-field>
    
              <b-field label="Password" class="py-3">
                <b-input v-model="password"></b-input>
              </b-field>

              <div class="buttons">
                  <b-button type="is-text" class="forgot-username">Forgot Username/Password</b-button>
              </div>
  
              <div class="buttons">
                <b-button @click="$emit('toggle-login')">Cancel</b-button>
                <b-button type="is-primary" tag="router-link" :to="{ name: 'dashboard' }" outlined>Submit</b-button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginForm'
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