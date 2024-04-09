import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center px-5 md:px-10 py-5 text-lg bg-[#007F73] text-[#333]">
        <NavLink to="/">
          <h1 className="text-xl font-semibold">React Blog</h1>
        </NavLink>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Nav;
