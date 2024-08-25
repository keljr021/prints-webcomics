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
            console.log('getAuthor by id: ', id);
            let targetId = id.toString();
            let foundAuthor = null;
            let foundAccountData
            this.authorsList.forEach(author => {
                let authorAccountId = (author.accountId).toString();
                if (authorAccountId === targetId)
                    foundAuthor = author;
            });
            
            foundAccountData = this.getAuthorAccountData(foundAuthor.accountId);
            foundAuthor = Object.assign(foundAuthor, foundAccountData);
            
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