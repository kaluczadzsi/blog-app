import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Root = () => {
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-[#F6BC4D]">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
