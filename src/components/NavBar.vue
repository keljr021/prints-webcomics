<template>
  <div>
    <div v-if="isDesktop || isTablet">
      <b-navbar class="navbar">
          <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img src="./../assets/prints_logo.png" alt="Prints Webcomic and Hosting logo" class="logo">
            </b-navbar-item>
          </template>
          <template #start>
            <b-navbar-item tag="router-link" to="/">Home</b-navbar-item>
            <b-navbar-item tag="router-link" to="/recommended">Recommended</b-navbar-item>
            <b-navbar-item tag="router-link" to="/genres">Genres</b-navbar-item>
            <b-navbar-item tag="router-link" to="/authors">Authors</b-navbar-item>
            <b-navbar-item tag="router-link" to="/publish">Publish</b-navbar-item>
          </template>

          <template #end>
              <b-navbar-item tag="div">
                <b-input class="py-2-mobile px-4-desktop float-left" placeholder="Search" v-model="searchQuery" @keyup.native.enter="handleSearch" />
                <b-field>
                  <!-- Logged out user-->
                  <div>
                    <div v-if="!userIsLoggedIn">
                      <b-button type="is-primary" tag="router-link" to="/account/new" outlined>Create Account</b-button>
                      <b-button @click="toggleLogin" type="is-primary" outlined>Sign In</b-button>
                    </div>
                    <!-- Logged in user -->
                    <div v-else>
                      <b-select :placeholder="user.name" v-model="accountValue" @input="handleSelectClick" class="account">
                          <option value="dashboard">Dashboard</option>
                          <option value="favorites">Favorites</option>
                          <option value="history">History</option>
                          <option value="account">Account</option>
                          <option value="/">Logout</option>
                      </b-select>
                    </div>
                  </div>
                </b-field>
              </b-navbar-item>
              <div v-if="showLoginForm">
                <login-form @toggle-form="toggleLogin" @login="userLoggedIn" />
              </div>
          </template>
      </b-navbar>
    </div>
    <div v-else>
      <mobile-nav-bar />
    </div>
  </div>
</template>

<script>
import VueBreakpointMixin from 'vue-breakpoint-mixin';

import { accountsStore } from "@/store/accounts";
import LoginForm from './LoginForm.vue'
import MobileNavBar from './MobileNavBar.vue';
export default {
  name: 'NavBar',
  mixins: [ VueBreakpointMixin ],
  data() {
    return {
      searchQuery: '',
      showLoginForm: false,
      accountValue: null,
      userIsLoggedIn: false,
      user: {}
    };
  },
  props: {},
  methods: {
    handleSearch() {
      return this.$router.push({ name: 'search', params: { query: this.searchQuery } });
    },
    async handleSelectClick() {
      if (this.accountValue === '/') {
        await this.userLoggedOut();
        return this.$router.push({ path: '/' });
      }
      
        return this.$router.push({ name: this.accountValue });
    },
    toggleLogin() {
      this.showLoginForm = !this.showLoginForm
    },
    userLoggedIn() {
      this.toggleLogin();
      this.userIsLoggedIn = true;
      this.user = accountsStore.user;
      
    },
    userLoggedOut() {
      this.userIsLoggedIn = false;
    },
  },
  mounted() {
    if (accountsStore.userLoggedIn) {
      this.userIsLoggedIn = true;
      this.user = accountsStore.user;
    }
  },
  components: {
    LoginForm,
    MobileNavBar
  }
}
</script>

<style scoped>
.navbar {
  padding: 8px 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
}

.navbar a {
  font-weight: normal;
}

:deep(.b-navbar-item) {
  font-weight: normal;
}

.logo {
  max-height: 45px;
}

.account {
    width: 200px;
}

.account option {
  padding: 5px 0;
}

.navbar-burger span {
  width: 20px !important;
  font-size: 20px !important;
}

.float-left {
  float: left;
}

@media all and (max-width: 768px) {
  .navbar-menu {
    background-color: #eee;
  }

  .navbar-start a {
    text-align: left;
  }
}
</style>
