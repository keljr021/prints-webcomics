import pinia from './index';
import { defineStore } from 'pinia';

import chaptersData from '../assets/mock-data/chapters.json'

const useChaptersStore = defineStore('chapters', {
    state: () => ({
        chapters: []
    }),
    getters: {
        chaptersList: (state) => state.chapters
    },
    actions: {
        fetchAllChapters() {            
            console.log('chapters data: ', chaptersData);
            this.chapters = chaptersData.data.chapters;
        },
        fetchChaptersByComic(id) {
            console.log('attempting to find chapter for comic id: ', id);
            let foundChapters = [];

            this.chaptersList.forEach(chapter => {
                let comicId = (chapter.comicId).toString();
                if (comicId === id)
                    foundChapters.push(chapter);
            });

            return foundChapters;
        },
        getChapter(id) {
            let targetId = id.toString();
            let foundChapter = null;

            console.log('attempting to get chapter using id of: ', id);
            this.chaptersList.forEach(chapter => {
                let chapterId = (chapter.id).toString();
                if (chapterId === targetId) {
                    console.log(' --target found: ', chapter);
                    foundChapter = chapter;
                }
            });

            return foundChapter;
        }
    }
});

export const chaptersStore = useChaptersStore(pinia);