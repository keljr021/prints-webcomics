import pinia from './index';
import { defineStore } from 'pinia';

import comicsData from '../assets/mock-data/comics.json'

import { authorsStore } from "@/store/authors";
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
            this.comicsList = comicArray;
        },
        getComic(inputComicId) {
            let foundComic = null;
            this.allComics.forEach(comic => {
                if (comic.id.toString() === inputComicId.toString()) foundComic = comic;
            });

            return foundComic;
        },
        getComicAuthor(inputAuthorId) {
            let authorsLists = authorsStore.authorsList;
            let foundAuthor = authorsLists.find(author => author.id.toString() === inputAuthorId.toString());

            return foundAuthor;

        },
        getAllComicsByAuthor(inputAuthorId) {
            let output = [];

            output = this.allComics.filter(comic => comic.authorId.toString() === inputAuthorId.toString());

            return output;
        },
        getFeaturedComics() {
            let featuredList = [];

            this.allComics.forEach(comic => {
                if (comic.isFeatured) {
                    featuredList.push(comic); 
                }
            });

            return featuredList;
        },
        getNewReleases() {
            let newReleaseList = [];

            this.allComics.forEach(comic => {
                if (newReleaseList.length < 4) {
                    newReleaseList.push(comic); 
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