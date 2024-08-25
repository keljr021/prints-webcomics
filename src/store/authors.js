import pinia from './index';
import { defineStore } from 'pinia';

import authorsData from '../assets/mock-data/authors.json'

import { accountsStore } from "@/store/accounts";
import { comicsStore } from '@/store/comics';


const useAuthorsStore = defineStore('authors', {
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
            let list = authorsData.data.authors;

            for (let i = 0; i < list.length; i++) {
                list[i].account = this.getAuthorAccountData(list[i].accountId);
            }
            
            this.authorsList = list;
        },
        getAuthor(id) {
            let targetId = id.toString();
            let foundAuthor = null;
            this.authorsList.forEach(author => {
                let authorId = (author.id).toString();
                if (authorId === targetId)
                    foundAuthor = author;
            });
        
            foundAuthor.account = this.getAuthorAccountData(foundAuthor.accountId);
            return foundAuthor;
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

export const authorsStore = useAuthorsStore(pinia);