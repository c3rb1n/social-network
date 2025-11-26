import styles from './EmptyPosts.module.scss';
import getIcon from '../../../../utils/getIcon';

const EmptyPosts = () => {
    return (
        <div className={styles.emptyPosts}>
            <div className={styles.emptyPosts__inner}>
                <h2 className={styles.emptyPosts__heading}>
                    No posts yet
                </h2>
                {getIcon('document')}
                <div className={styles.emptyPosts__description}>There are no posts here yet</div>
            </div>
        </div>
    );
};

export default EmptyPosts;
