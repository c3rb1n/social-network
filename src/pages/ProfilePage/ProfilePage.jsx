import styles from './ProfilePage.module.scss';
import AvatarBlock from './AvatarBlock/AvatarBlock';
import FriendsBlock from './FriendsBlock/FriendsBlock';
import InfoBlock from './InfoBlock/InfoBlock.JSX';
import AddPost from './AddPost/AddPost';
import Posts from './Posts/Posts';

const ProfilePage = () => {
    return (
        <main className={styles.profilePage}>
            <AvatarBlock />
            <FriendsBlock />
            <InfoBlock />
            <AddPost />
            <Posts />
        </main>
    );
};

export default ProfilePage;
