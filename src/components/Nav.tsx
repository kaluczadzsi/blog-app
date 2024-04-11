import { MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Nav = () => {
  return (
    <header>
      <div>
        <nav className="flex justify-between items-center px-5 md:px-10 py-5 text-lg shadow-md font-primary">
          <NavLink to="/" className="font-medium">
            <h1 className="text-4xl font-semibold">React Blog</h1>
          </NavLink>
          <NavLinks />
          <span className="md:hidden">
            <MdMenu className="cursor-pointer text-[30px]" />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
