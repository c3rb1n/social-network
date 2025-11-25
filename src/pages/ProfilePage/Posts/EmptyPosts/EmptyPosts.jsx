import styles from './EmptyPosts.module.scss';
import DocumentIcon from '../../../../components/common/Icons/DocumentIcon/DocumentIcon';

const EmptyPosts = () => {
    return (
        <div className={styles.emptyPosts}>
            <div className={styles.emptyPosts__inner}>
                <h2 className={styles.emptyPosts__heading}>
                    No posts yet
                </h2>
                <DocumentIcon />
                <div className={styles.emptyPosts__description}>There are no posts here yet</div>
            </div>
        </div>
    );
};

export default EmptyPosts;
