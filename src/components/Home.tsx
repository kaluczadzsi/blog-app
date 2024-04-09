import Search from './Search';
import Posts from './Posts';
import { Post } from '../types/post';
import { useContext, useState } from 'react';
import { PostContext } from '../../providers/PostProvider';

const Home = () => {
  const posts = useContext(PostContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post: Post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="px-5 py-2 h-full">
      <Search setSearchTerm={setSearchTerm} />
      <Posts filteredPosts={filteredPosts} />
    </div>
  );
};

export default Home;
