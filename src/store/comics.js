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
            let comicArray = []
            comicsData.data.comics.forEach(comic => {
                let author = this.getComicAuthor(comic.authorId);
                let chapters = chaptersStore.fetchChaptersByComic(comic.id);
                let comicItem = Object.assign(comic, { author: author, chapters: chapters });
                comicArray.push(comicItem);    
            });
            console.log('fetchAllComics: ', comicArray);
            this.comicsList = comicArray;
        },
        getComic(inputComicId) {
            console.log('attempting to find id: ', inputComicId);

            let foundComic = null;
            this.allComics.forEach(comic => {
                let comicId = (comic.id).toString();
                if (comicId === inputComicId) foundComic = comic;
            });

            console.log('Found comic: ', foundComic);

            return foundComic;
        },
        getComicAuthor(inputAuthorId) {
            let authorsLists = accountsStore.accountsList;
            let foundAuthor = authorsLists.find(author => author.id.toString() === inputAuthorId.toString());

            return foundAuthor;

        },
        getAllComicsByAuthor(inputAuthorId) {
            let output = [];

            output = this.allComics.filter(comic => comic.authorId === inputAuthorId);

            return output;
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