import styles from './Posts.module.scss';
import EmptyPosts from './EmptyPosts/EmptyPosts';
import Post from './Post/Post';

const Posts = () => {
    const posts = [
        {id: 1, avatar: '', name: 'Пользователь 1', postText: 'Сообщение-1', likesCount: 15, isLiked: false},
        {id: 2, avatar: '', name: 'Пользователь 2', postText: 'Сообщение-2', likesCount: 21, isLiked: true},
        {id: 3, avatar: '', name: 'Пользователь 3', postText: 'Сообщение-3', likesCount: 27, isLiked: false}
    ];

    const postsElements = posts.map(({id, avatar, name, postText, likesCount, isLiked}) => (
        <Post
            key={id}
            id={id}
            avatar={avatar}
            name={name}
            postText={postText}
            likesCount={likesCount}
            isLiked={isLiked}
        />
    ));

    return (
        <div className={styles.posts}>
            <div className={styles.posts__inner}>
                {postsElements.length ? postsElements : <EmptyPosts />}
            </div>
        </div>
    );
};

export default Posts;
