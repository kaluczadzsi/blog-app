import { FilteredPostProps } from '../../types/filteredpostprops';
import { Post } from '../../types/post';

const Posts = ({ filteredPosts }: FilteredPostProps) => {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 posts">
      {filteredPosts.map((post: Post) => (
        <li
          key={post.id}
          className="p-6 bg-[#FCECCD] rounded-2xl cursor-pointer"
        >
          <h2 className="mb-6 text-2xl text-[#BC7A04] border-b-[1px] pb-2 border-[rgba(0,0,0,0.1)]">
            {post.title}
          </h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
