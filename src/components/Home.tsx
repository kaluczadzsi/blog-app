import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { fetchPosts } from '../features/posts/postsSlice';
import Posts from './Posts';
import Search from './Search';

const Home = () => {
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="px-5 py-2 bg-silv">
      <Search setSearchTerm={setSearchTerm} />
      <Posts filteredPosts={filteredPosts} />
    </div>
  );
};

export default Home;
