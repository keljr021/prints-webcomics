import { defineStore } from 'pinia';

const accountStore = defineStore('account', {
    state: () => ({
        account: {
            id: 0,
            email: '',
            username: '',
            password: '',
            name: '',
            age: 0,
            genres: [],
            type: '',
            avatar: '',
            favoriteComicIds: []
        }
    }),
    getters: {
        id: (state) => state.account.id,
        email: (state) => state.account.email,
        username: (state) => state.account.username,
        password: (state) => state.account.password,
        name: (state) => state.account.name,
        age: (state) => state.account.age,
        genres: (state) => state.account.genres,
        type: (state) => state.account.type,
        avatar: (state) => state.account.avatar,
        favoriteComicIds: (state) => state.account.favoriteComicIds

    },
    actions: {
        getAccount() {
            return state.account;
        }
    }
});

const authorStore = defineStore('author', {
    state: () => ({
        author: {
            id: 0,
            genres: [],
            isFeatured: false,
            description: ''
        }
    }),
    getters: {
        id: (state) => state.id,
        genres: (state) => state.genres,
        description: (state) => state.description,
    },
    actions: {
        getAuthorComics() {
            let authorId = getters.id;
        },
    }
});

const loginStore = defineStore('login', {
    state: () => ({
        isLoggedIn: false,
        accountId: 0,
        accountType: ''
    }),
    getters: {
        isLoggedIn: (state) => state.isLoggedIn,
        accountId: (state) => state.accountId,
        accountType: (state) => state.accountType,
    },
    actions: {
        checkIfUserLoggedIn() {
            return getter.isLoggedIn;
        }
    }
});

const comicStore = defineStore('comic', {
    state: () => ({
        comic: {
            id: 0,
            authorId: 0,
            title: '',
            genres: [],
            cover: '',
            synopsis: '',
            triggerWarning: '',
            isFeatured: false,
            isRecommended: false,
            createdDate: ''
        }
    }),
    getters: {
        id: (state) => state.id,
        authorId: (state) => state.authorId,
        title: (state) => state.title,
        genres: (state) => state.genres,
        cover: (state) => state.cover,
        genres: (state) => state.genres,
        synopsis: (state) => state.synopsis,
        triggerWarning: (state) => state.triggerWarning,
        createdDate: (state) => state.createdDate,
    },
    actions: {
        getChapters() {
            let comicId = getters.id;
        },
        getAuthor() {
            let authorId = getters.authorId;
        }
    }
});

const chapterStore = defineStore('chapter', {
    state: () => ({
        chapter: {
            id: 0,
            comicId: 0,
            likes: 0,
            views: 0,
            image: '',
            files: [],
            createdDate: ''
        }
    }),
    getters: {
        id: (state) => state.id,
        comicId: (state) => state.comicId,
        likes: (state) => state.likes,
        views: (state) => state.views,
        image: (state) => state.image,
        files: (state) => state.files,
        createdDate: (state) => state.createdDate,
    },
    actions: {
        getComic() {
            let comicId = getters.id;
        },
        getAuthor() {
            let authorId = getters.authorId;
        },
        getComments() {
            let comicId = getters.id;
        }
    }
});

const commentStore = defineStore('comment', {
    state: () => ({
        chapter: {
            id: 0,
            accountId: 0,
            chapterId: 0,
            comicId: 0,
            comment: '',
            createdDate: ''
        }
    }),
    getters: {
        id: (state) => state.id,
        accountId: (state) => state.accountId,
        chapterId: (state) => state.chapterId,
        comicId: (state) => state.comicId,
        comment: (state) => state.comment,
        createdDate: (state) => state.createdDate,
    },
    actions: {

    }
});

export {
    accountStore,
    authorStore,
    loginStore,
    comicStore,
    chapterStore,
    commentStore
}

