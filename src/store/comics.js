import pinia from './index';
import { defineStore } from 'pinia';

import comicsData from '../assets/mock-data/comics.json'

import { accountsStore } from "@/store/accounts";
import { chaptersStore } from "@/store/chapters";


const useComicsStore = defineStore('comics', {
    state: () => ({
        comicsList: []
    }),
    getters: {
        allComics: (state) => state.comicsList
    },
    actions: {
        fetchAllComics() {            
            console.log('comics data: ', comicsData);
            this.comicsList = comicsData.data.comics;
        },
        getComic(id) {
            console.log('attempting to find id: ', id);

            let foundComic = null;
            this.allComics.forEach(comic => {
                let comicId = (comic.id).toString();
                if (comicId === id) foundComic = comic;
            });

            foundComic.author = this.getComicAuthor(foundComic.authorId);
            foundComic.chapters = chaptersStore.fetchChaptersByComic(foundComic.id);

            console.log('Found comic: ', foundComic);

            return foundComic;
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
        }
    }
});

export const comicsStore = useComicsStore(pinia);