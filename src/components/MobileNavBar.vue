<template>
    <div class="mobile-nav">
        <div class="mobile-nav-logo" @click="$router.push({ path: '/'})">
            <img src="./../assets/prints_logo.png" alt="Prints Webcomic and Hosting logo">
        </div>
        <div class="mobile-nav-menu">
            <div class="mobile-nav-menu-login">
                <b-button v-if="userIsLoggedIn" @click="toggleLoginMenu()" class="is-light mobile-nav-menu-login-button">
                    <img class="mobile-nav-menu-login-button-image" src="./../assets/accounts/college-student-3500990_1280.jpg" alt="">
                </b-button>
                <b-button v-else @click="toggleUser()" class="is-light" icon-right="fa-user" />
            </div>
            <div class="mobile-nav-menu-links">
                <b-button @click="toggleMenu()" class="is-light" icon-right="fa-bars" />
            </div>
        </div>

        <div v-if="showUserForm" class="mobile-nav-display-user">
            <b-button @click="toggleUser" type="is-primary" tag="router-link" to="/account/new" outlined>Create Account</b-button>
            <b-button @click="handleSignIn" type="is-primary" outlined>Sign In</b-button>
        </div>

        <div v-if="showLoggedInForm" class="mobile-nav-display-menu">
            <div class="mobile-nav-display-menu-item" @click="openLink('/create/dashboard')">Dashboard</div>
            <div class="mobile-nav-display-menu-item" @click="openLink('/favorites')">Favorites</div>
            <div class="mobile-nav-display-menu-item" @click="openLink('/history')">History</div>
            <div class="mobile-nav-display-menu-item" @click="openLink('/account')">Account</div>
            <div class="mobile-nav-display-menu-item" @click="handleLogOut()">Logout</div>
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

        <mobile-login :showModal="showLoginModal" @forgot="toggleForgotModal()" @toggle="showLoginModal=false" @submit="handleSubmit()" @login="userLoggedIn()" />

        <forgot-username :showModal="showForgotModal" @toggle="toggleForgotModal()" @submit="submitForgotModal()"/>
        <confirm-forgot-username :showModal="showConfirmForgotModal" @toggle="toggleConfirmForgotModal()" @submit="submitConfirmForgotModal()" />

    </div>
</template>

<script>
import { accountsStore } from "@/store/accounts";

import VueBreakpointMixin from 'vue-breakpoint-mixin';
import MobileLogin from './modals/MobileLogin.vue';
import ForgotUsername from './modals/ForgotUsername.vue';
import ConfirmForgotUsername from './modals/ConfirmForgotUsername.vue';

export default {
    name: 'MobileNavBar',
    mixins: [ VueBreakpointMixin ],
    data() {
        return {
            showUserForm: false,
            showMenuForm: false,
            searchQuery: '',
            showLoginModal: false,
            showLoggedInForm: false,
            userIsLoggedIn: false,
            user: {},
            showForgotModal: false,
            showConfirmForgotModal: false
        };
    },
    methods: {
        toggleUser() {
            this.showUserForm = !this.showUserForm;
        },
        toggleMenu() {
            this.showMenuForm = !this.showMenuForm;
        },
        toggleLoginMenu() {
            this.showLoggedInForm = !this.showLoggedInForm;
        },
        toggleForgotModal() {
            this.showForgotModal = !this.showForgotModal;
        },
        toggleConfirmForgotModal() {
            this.showConfirmForgotModal = !this.showConfirmForgotModal;
            this.showLoginModal = false;
        },
        handleSignIn() {
            this.toggleUser();
            this.showLoginModal = true;
        },
        handleLogOut() {
            accountsStore.logout();
            this.userIsLoggedIn = false;
            this.showLoggedInForm = false;
            this.$router.push({ path: '/' });
        },
        handleSearch() {
            this.toggleMenu();
            return this.$router.push({ name: 'search', params: { query: this.searchQuery } });
        },
        openLink(input) {
            this.showMenuForm = false;
            this.showLoggedInForm = false;
            this.$router.push({ path: input });
        },
        userLoggedIn() {
            this.showLoginModal=false;
            this.userIsLoggedIn=true;
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
    mounted() {
        this.userIsLoggedIn = accountsStore.isLoggedIn;
    },
    components: {
        MobileLogin,
        ForgotUsername,
        ConfirmForgotUsername
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
    top: 70px;
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

.mobile-nav-menu-login-button {
    padding: 5px 0;
}

.mobile-nav-menu-login-button-image {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 15px;
}

.mobile-nav-display-menu-item {
    padding: 10px 0;
    color: black;
    cursor: pointer;
}
</style>