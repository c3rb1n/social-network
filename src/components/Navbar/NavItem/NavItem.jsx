import {NavLink} from 'react-router-dom';
import styles from './NavItem.module.scss';
import getIcon from '../../../utils/getIcon';

const NavItem = ({icon, text, to}) => {
    return (
        <NavLink to={to} className={styles.item}>
            {getIcon(icon)}
            {text}
        </NavLink>
    );
};

export default NavItem;
