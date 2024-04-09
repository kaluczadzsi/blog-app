import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import { PostProvider } from '../../providers/PostProvider';

const Root = () => {
  return (
    <PostProvider>
      <div>
        <Nav />

        <div className="min-h-screen bg-[#333]">
          <Outlet />
        </div>
      </div>
    </PostProvider>
  );
};

export default Root;
