import pinia from './index';
import { defineStore } from 'pinia';

import comicsData from '../assets/mock-data/comics.json'

import { accountsStore } from "@/store/accounts";

const useComicsStore = defineStore('comics', {
    state: () => ({
        comicsList: []
    }),
    getters: {
        allComics: (state) => state.comicsList
    },
    actions: {
        fetchAllComics() {            
            console.log('account data: ', comicsData);
            this.comicsList = comicsData.data.comics;
        },
        getComic(id) {
            console.log('attempting to find id: ', id);

            let foundTarget = null;
            this.allComics.forEach(comic => {
                if (comic.id === id)
                    foundTarget = comic;
            });

            console.log('Found comic: ', foundTarget)

            return foundTarget;
        },
        getComicAuthor(id) {
            let authorsLists = accountsStore.accountsList;
            let foundAuthor = authorsLists.find(author => author.id === id);

            return foundAuthor;

        },
        getFeaturedComics() {
            let featuredList = [];

            this.allComics.forEach(comic => {
                if (comic.isFeatured) {
                    let author = this.getComicAuthor(comic.authorId);
                    let comicItem = Object.assign(comic, { author: author });
                    featuredList.push(comicItem); 
                }
            });

            return featuredList;
        },
        getNewReleases() {
            let newReleaseList = [];

            this.allComics.forEach(comic => {
                if (newReleaseList.length < 4) {
                    let author = this.getComicAuthor(comic.authorId);
                    let comicItem = Object.assign(comic, { author: author });
                    newReleaseList.push(comicItem); 
                }
            });

            return newReleaseList;
        },
        getRecommendedComics() {
            let featuredList = [];

            this.allComics.forEach(comic => {
                if (comic.isRecommended) {
                    let author = this.getComicAuthor(comic.authorId);
                    let comicItem = Object.assign(comic, { author: author });
                    featuredList.push(comicItem); 
                }
            });

            return featuredList;
        },
    }
});

export const comicsStore = useComicsStore(pinia);