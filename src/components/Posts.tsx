import { Link } from 'react-router-dom';
import { FilteredPostProps } from '../../types/filteredpostprops';
import { Post } from '../../types/post';

const Posts = ({ filteredPosts }: FilteredPostProps) => {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 posts">
      {filteredPosts.map((post: Post) => (
        <Link to="/home">
          <li
            key={post.id}
            className="h-full p-6 rounded-2xl cursor-pointer shadow-md bg-[#fff] flex flex-col gap-6"
          >
            <h2 className="text-2xl font-semibold text-primary">
              {post.title}
            </h2>
            <p className="text-secondary text-md font-medium">{post.body}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Posts;
