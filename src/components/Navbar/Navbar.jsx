import styles from './Navbar.module.scss';
import ProfileIcon from '../common/Icons/ProfileIcon/ProfileIcon';
import DialogsIcon from '../common/Icons/DialogsIcon/DialogsIcon';
import UsersIcon from '../common/Icons/UsersIcon/UsersIcon';
import NewsIcon from '../common/Icons/NewsIcon/NewsIcon';
import MusicIcon from '../common/Icons/MusicIcon/MusicIcon';
import SettingsIcon from '../common/Icons/SettingsIcon/SettingsIcon';
import NavItem from './NavItem/NavItem';

const Navbar = () => {
    const navElements = [
        {id: 1, icon: <ProfileIcon />, text: 'Profile', to: '/profile'},
        {id: 2, icon: <DialogsIcon />, text: 'Dialogs', to: '/dialogs'},
        {id: 3, icon: <UsersIcon />, text: 'Users', to: '/users'},
        {id: 4, icon: <NewsIcon />, text: 'News', to: '/news'},
        {id: 5, icon: <MusicIcon />, text: 'Music', to: '/music'},
        {id: 6, icon: <SettingsIcon />, text: 'Settings', to: '/settings'},
    ];
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__inner}>
                {navElements.map(({id, icon, text, to}) => <NavItem key={id} icon={icon} text={text} to={to} />)}
            </div>
        </nav>
    );
};

export default Navbar;
