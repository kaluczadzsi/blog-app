import { NavLink } from 'react-router-dom';
import { ListItemProps } from '../../types/listitemprops';

const ListItem = ({ to, label }: ListItemProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? 'active' : ''
          } px-[30px] py-[10px] rounded-3xl font-medium transition-all duration-300 hover:bg-silv`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default ListItem;
