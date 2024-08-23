import pinia from './index';
import { defineStore } from 'pinia';

import loginData from '../assets/mock-data/login.json'

const useLoginStore = defineStore('login', {
    state: () => ({
        userData: [],
        userLoggedIn: false,
        userAccount: {}
    }),
    getters: {
        allData: (state) => state.userData,
        loggedIn: (state) => state.userLoggedIn,
        account: (state) => state.userAccount
    },
    actions: {
        fetchLoginData() {
            console.log('login data: ', loginData);
            this.userData = loginData;
        },
        loginUser(username, password) {
            let isValidated = false;
            let foundUser = {};

            this.loginData.forEach(user => {
                if (user.username === username && user.password === password) {
                    foundUser = user;
                    isValidated = true;
                }
            });

            if (isValidated) {
                this.userAccount = foundUser; 
                this.userLoggedIn = true;
            }

            return isValidated;
        },
        logout() {
            this.userLoggedIn = false;
            this.userAccount = null;
        }
    }
});

export const loginStore = useLoginStore(pinia);