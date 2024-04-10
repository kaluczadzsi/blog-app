import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Root = () => {
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-[#333]">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
