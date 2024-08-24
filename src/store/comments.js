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
            console.log('comments data: ', commentsData);
            this.allComments = commentsData.data.comments;
        },
        getCommentsForComic(id) {
            console.log('attempting to find comments for comic id: ', id);
            let foundComments = [];

            this.allComments.forEach(comment => {
                if (comment.comicId === id) {
                    let foundCommentItem = comment;
                    foundCommentItem.account = accountsStore.getAccount(foundCommentItem.accountId);
                    foundComments.push(foundCommentItem);
                }
            });

            console.log('found comments: ', foundComments)

            return foundComments;
        }
    }
});

export const commentsStore = useCommentsStore(pinia);