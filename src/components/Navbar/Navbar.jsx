import styles from './Navbar.module.scss';
import NavItem from './NavItem/NavItem';

const Navbar = ({navElements}) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__inner}>
                {navElements.map(({id, icon, text, to}) => <NavItem key={id} icon={icon} text={text} to={to} />)}
            </div>
        </nav>
    );
};

export default Navbar;
