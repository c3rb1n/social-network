import EmptyHeartIcon from '../../../../components/common/Icons/EmptyHeartIcon/EmptyHeartIcon';
import FilledHeartIcon from '../../../../components/common/Icons/FilledHeartIcon/FilledHeartIcon';
import styles from './Post.module.scss';

const Post = ({avatar, name, postText, likesCount, isLiked}) => {
    return (
        <article className={styles.post}>
            <div className={styles.post__inner}>
                <div className={styles.post__owner}>
                    <img className={styles.post__avatar} width={50} height={50} src={avatar || '/camera.png'} alt="avatar" />
                    <div className={styles.post__name}>{name}</div>
                </div>
                <div className={styles.post__text}>{postText}</div>
                <div className={styles.post__likesBlock}>
                    {isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}
                    <div className={styles.post__likesCount}>{likesCount}</div>
                </div>
            </div>
        </article>
    );
};

export default Post;
