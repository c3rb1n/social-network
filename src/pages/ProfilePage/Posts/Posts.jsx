import styles from './Posts.module.scss';
import EmptyPosts from './EmptyPosts/EmptyPosts';
import Post from './Post/Post';

const Posts = ({posts}) => {
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
