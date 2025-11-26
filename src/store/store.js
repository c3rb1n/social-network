const store = {
    profilePage: {
        posts: [
            {id: 1, avatar: '', name: 'Пользователь 1', postText: 'Сообщение-1', likesCount: 15, isLiked: false},
            {id: 2, avatar: '', name: 'Пользователь 2', postText: 'Сообщение-2', likesCount: 21, isLiked: true},
            {id: 3, avatar: '', name: 'Пользователь 3', postText: 'Сообщение-3', likesCount: 27, isLiked: false}
        ]
    },
    navbar: {
        navElements: [
            {id: 1, icon: 'profile', text: 'Profile', to: '/profile'},
            {id: 2, icon: 'dialogs', text: 'Dialogs', to: '/dialogs'},
            {id: 3, icon: 'users', text: 'Users', to: '/users'},
            {id: 4, icon: 'news', text: 'News', to: '/news'},
            {id: 5, icon: 'music', text: 'Music', to: '/music'},
            {id: 6, icon: 'settings', text: 'Settings', to: '/settings'},
        ]
    }
};

export default store;
