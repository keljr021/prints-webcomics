<template>
    <div class="mobile-nav">
        <div class="mobile-nav-logo" @click="$router.push({ path: '/'})">
            <img src="./../assets/prints_logo.png" alt="Prints Webcomic and Hosting logo">
        </div>
        <div class="mobile-nav-menu">
            <div class="mobile-nav-menu-login">
                <b-button @click="toggleUser()" class="is-light" icon-right="fa-user" />
            </div>
            <div class="mobile-nav-menu-links">
                <b-button @click="toggleMenu()" class="is-light" icon-right="fa-bars" />
            </div>
        </div>

        <div v-if="showUserForm" class="mobile-nav-display-user">
            <b-button @click="toggleUser" type="is-primary" tag="router-link" to="/account/new" outlined>Create Account</b-button>
            <b-button @click="toggleUser" type="is-primary" outlined>Sign In</b-button>
        </div>

        <div v-if="showMenuForm" class="mobile-nav-display-menu">
            <div class="py-3">
                <b-input class="py-2-mobile px-4-desktop float-left" placeholder="Search" v-model="searchQuery" @keyup.native.enter="handleSearch" />
            </div>
            <div class="mobile-nav-display-menu-item" @click="openLink('/')" to="/">Home</div>
            <div class="mobile-nav-display-menu-item" @click="openLink('/recommended')">Recommended</div>
            <div class="mobile-nav-display-menu-item" @click="openLink('/genres')">Genres</div>
            <div class="mobile-nav-display-menu-item" @click="openLink('/authors')">Authors</div>
            <div class="mobile-nav-display-menu-item" @click="openLink('/publish')">Publish</div>
        </div>

        <mobile-login :showModal="showLoginModal" @toggle="handleSubmit()" @submit="handleSubmit()" />
    </div>
</template>

<script>
import VueBreakpointMixin from 'vue-breakpoint-mixin';
import MobileLogin from './modals/MobileLogin.vue';
export default {
    name: 'MobileNavBar',
    mixins: [ VueBreakpointMixin ],
    data() {
        return {
            showUserForm: false,
            showMenuForm: false,
            searchQuery: '',
            showLoginModal: false,
            userIsLoggedIn: false,
            user: {}
        };
    },
    methods: {
        toggleUser() {
            this.showUserForm = !this.showUserForm;
        },
        toggleMenu() {
            this.showMenuForm = !this.showMenuForm;
        },
        handleSearch() {
            this.toggleMenu();
            return this.$router.push({ name: 'search', params: { query: this.searchQuery } });
        },
        openLink(input) {
            this.toggleMenu();
            this.$router.push({ path: input });
        }
    },
    components: {
        MobileLogin
    }
}

</script>

<style scoped>
.mobile-nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 75px;
    padding: 8px 0 8px 12px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    z-index: 99;
}

.mobile-nav-logo {
    width: 50%;
    float: left;
    text-align: left;
}

.mobile-nav-logo img {
    padding: 10px 0;
    width: 190px;
}

.mobile-nav-menu {
    float: right;
    display: flex;
    width: 40%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
}

.mobile-nav-menu button {
    background: transparent;
}
.mobile-nav-menu-login {
    flex: 1;
}

.mobile-nav-menu-links {
    flex: 1;
}

.mobile-nav-display-user,
.mobile-nav-display-menu {
    position: absolute;
    right: 0;
    top: 60px;
    width: 60%;
    max-height: 380px;
    padding: 20px;
    background: #fff;
    z-index: 99;
    text-align: left;
}

.mobile-nav-display-user {
    width: 100%;
    text-align: right;
}

.mobile-nav-display-user button {
    float: left;
}

.mobile-nav-display-menu-item {
    padding: 10px 0;
    color: black;
    cursor: pointer;
}
</style>