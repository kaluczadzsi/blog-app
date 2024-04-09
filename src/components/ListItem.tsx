import { NavLink } from 'react-router-dom';

type ListItemProps = {
  to: string;
  label: string;
};

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
