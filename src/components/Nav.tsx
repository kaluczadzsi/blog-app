import { MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Nav = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-5 md:px-10 py-5 text-lg shadow-md font-primary">
        <NavLink to="/" className="font-medium">
          <h1 className="text-4xl font-semibold">React Blog</h1>
        </NavLink>
        <NavLinks />
        <button className="md:hidden">
          <MdMenu className="text-[30px]" />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
