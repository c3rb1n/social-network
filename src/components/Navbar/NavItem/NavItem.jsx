import {NavLink} from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem = ({icon, text, to}) => {
    return (
        <NavLink to={to} className={styles.item}>
            {icon}
            {text}
        </NavLink>
    );
};

export default NavItem;
