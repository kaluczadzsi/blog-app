import NavListItem from './NavListItem';

const NavLinks = () => {
  return (
    <ul className="flex gap-20">
      <NavListItem to="/home" label="Home" />
      <NavListItem to="/" label="Post" />
      <NavListItem to="/" label="About" />
    </ul>
  );
};

export default NavLinks;
