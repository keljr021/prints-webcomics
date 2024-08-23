import pinia from './index';
import { defineStore,storeToRefs } from 'pinia';

import loginData from '../assets/mock-data/login.json'

import { accountsStore } from "@/store/accounts";


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
            this.userData = loginData.data.login;
        },
        loginUser(username, password) {
            let isValidated = false;
            let foundAccount = {};

            const { accountsList } = storeToRefs(accountsStore);

            accountsList.forEach(account => {
                if (account.username === username) {
                    if (account.password === password) {
                        foundAccount = account;
                        isValidated = true;
                    }
                }
            });

            if (isValidated) {
                this.userAccount = foundAccount; 
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