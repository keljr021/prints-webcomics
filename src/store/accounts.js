import pinia from './index';
import { defineStore } from 'pinia';

import accountsData from '../assets/mock-data/accounts.json'

const useAccountsStore = defineStore('accounts', {
    state: () => ({
        accountsList: [],
        userAccount: {},
        userLoggedIn: false
    }),
    getters: {
        accounts: (state) => state.accountsList,
        user: (state) => state.userAccount,
        isLoggedIn: (state) => state.userLoggedIn
    },
    actions: {
        fetchAccounts() {            
            this.accountsList = accountsData.data.accounts;
        },
        getAccount(id) {
            let foundTarget = null;
            this.accountsList.forEach(account => {
                if (account.id === id)
                    foundTarget = account;
            });
            return foundTarget;
        },
        login(username, password) {
            let isValidated = false;
            let foundAccount = {};

            this.accountsList.forEach(account => {
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

export const accountsStore = useAccountsStore(pinia);