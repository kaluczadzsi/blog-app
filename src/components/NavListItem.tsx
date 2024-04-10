import { NavLink } from 'react-router-dom';
import { ListItemProps } from '../../types/listitemprops';

const ListItem = ({ to, label }: ListItemProps) => {
  return (
    <li>
      <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
        {label}
      </NavLink>
    </li>
  );
};

export default ListItem;
