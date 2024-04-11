import { FilteredPostProps } from '../../types/filteredpostprops';
import { PostProps } from '../../types/postprops';
import Post from './Post';

const Posts = ({ filteredPosts }: FilteredPostProps) => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 posts">
      {filteredPosts.map((post: PostProps) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
