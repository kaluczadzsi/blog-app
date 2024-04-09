import { useContext } from 'react';
import { PostContext } from '../../providers/PostProvider';
import { Post } from '../types/post';

const Posts = ({ filteredPosts }: []) => {
  const posts = useContext(PostContext);
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {filteredPosts.map((post: Post) => (
        <li key={post.id} className="bg-[rgba(0,0,0,0.2)] text-yellow-100 p-2">
          <h2 className="mb-4 text-2xl text-white">{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
