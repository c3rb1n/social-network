import styles from './Header.module.scss';
import RavenIcon from '../common/Icons/RavenIcon/RavenIcon';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <RavenIcon />
                <div>login</div>
            </div>
        </header>
    );
};

export default Header;
