<template>
  <b-navbar class="navbbar">
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
            <b-input class="px-4" placeholder="Search" v-model="searchQuery" @keyup.native.enter="handleSearch" />
            <div class="buttons" style="display:none">
              <b-button type="is-primary" tag="router-link" to="/account/new" outlined>Create Account</b-button>
              <b-button type="is-primary" outlined>Sign In</b-button>
            </div>
            <b-field size="is-medium">
              <b-select v-model="accountValue" @input="handleSelectClick" placeholder="My account" class="account">
                  <option value="dashboard">Dashboard</option>
                  <option value="favorites">Favorites</option>
                  <option value="history">History</option>
                  <option value="account">Account</option>
                  <option value="/">Logout</option>
              </b-select>
            </b-field>
          </b-navbar-item>
      </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      searchQuery: ''
    };
  },
  props: {},
  methods: {
    handleSearch() {
      return this.$router.push({ name: 'search', params: { query: this.searchQuery } });
    },
    handleSelectClick() {
      if (this.accountValue === '/')
        return this.$router.push({ path: '/' });
      
        return this.$router.push({ name: this.accountValue });
    }
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
</style>
