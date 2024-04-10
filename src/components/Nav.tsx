import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Nav = () => {
  return (
    <header>
      <div className="bg-[#F6BC4D]">
        <nav className="flex justify-between items-center px-5 md:px-10 py-5 text-lg  rounded-b-3xl bg-white text-[#121212]">
          <NavLink to="/" className="rounded-3xl px-[30px] py-[10px]">
            <h1 className="text-xl font-semibold">React Blog</h1>
          </NavLink>
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
