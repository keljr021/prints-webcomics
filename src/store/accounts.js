import pinia from './index';
import { defineStore } from 'pinia';

import accountsData from '../assets/mock-data/accounts.json'

const useAccountsStore = defineStore('accounts', {
    state: () => ({
        accountsList: []
    }),
    getters: {
        accounts: (state) => state.accounts
    },
    actions: {
        fetchAccounts() {            
            console.log('account data: ', accountsData);
            this.accountsList = accountsData.data.accounts;
        },
        getAccount(id) {
            console.log('attempting to find id: ', id);

            let foundTarget = null;
            this.accountsList.forEach(account => {
                if (account.id === id)
                    foundTarget = account;
            });

            console.log('Found account: ', foundTarget)

            return foundTarget;
        }
    }
});

export const accountsStore = useAccountsStore(pinia);