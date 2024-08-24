import pinia from './index';
import { defineStore } from 'pinia';

import authorsData from '../assets/mock-data/authors.json'

import { accountsStore } from "@/store/accounts";
import { comicsStore } from '@/store/comics';


const useAccountsStore = defineStore('authors', {
    state: () => ({
        authorsList: [],
        selectedAuthor: {}
    }),
    getters: {
        accounts: (state) => state.authorsList,
        author: (state) => state.selectedAuthor
    },
    actions: {
        fetchAuthors() {            
            console.log('authors data: ', authorsData);
            this.authorsList = authorsData.data.authors;
        },
        getAuthor(id) {
            let foundTarget = null;
            let foundAccountData
            this.authorsList.forEach(author => {
                if (author.id === id)
                    foundTarget = foundAccountData
            });
            
            foundAccountData = this.getAuthorAccountData(foundTarget.accountId);
            foundTarget = Object.assign(foundTarget, foundAccountData);
            
            return foundTarget;
        },
        getAuthorAccountData(id) {
            let accountList = accountsStore.accountsList;
            let foundAccount = accountList.find(account => account.id === id);
            return foundAccount;
        },
        getAuthorComics(id) {
            let comicsList = comicsStore.comicsList;
            let foundComics = [];

            comicsList.forEach(comic => {
                if (comic.authorId === id) 
                    foundComics.push(comic);
            });
            
            return foundComics;
        },
        getFeaturedAuthors() {
            let output = [];
            let featuredAuthors = this.authorsList.filter(authors => authors.isFeatured);
            featuredAuthors.forEach(author => {
                let accountInfo = this.getAuthorAccountData(author.accountId);
                let comicsList = this.getAuthorComics(author.id);
                output.push({ author, comics: comicsList, ...accountInfo  });
            });
            return output;
        }
    }
});

export const authorsStore = useAccountsStore(pinia);