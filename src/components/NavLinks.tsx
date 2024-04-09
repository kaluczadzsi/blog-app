import ListItem from './ListItem';

const NavLinks = () => {
  return (
    <ul className="flex gap-20">
      <ListItem to="/home" label="Home" />
      <ListItem to="/" label="Post" />
      <ListItem to="/" label="About" />
    </ul>
  );
};

export default NavLinks;
