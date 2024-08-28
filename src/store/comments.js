import pinia from './index';
import { defineStore } from 'pinia';

import commentsData from '../assets/mock-data/comments.json'

import { accountsStore } from './accounts';

const useCommentsStore = defineStore('comments', {
    state: () => ({
        allComments: []
    }),
    getters: {
        commentsList: (state) => state.allComments
    },
    actions: {
        fetchAllComments() {            
            this.allComments = commentsData.data.comments;
        },
        getCommentsForComic(id) {
            let foundComments = [];

            this.allComments.forEach(comment => {
                if (comment.comicId === id) {
                    let foundCommentItem = comment;
                    foundCommentItem.account = accountsStore.getAccount(foundCommentItem.accountId);
                    foundComments.push(foundCommentItem);
                }
            });

            return foundComments;
        }
    }
});

export const commentsStore = useCommentsStore(pinia);