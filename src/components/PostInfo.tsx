import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../features/hooks';
import { fetchPosts } from '../features/posts/postsSlice';
import { useEffect } from 'react';
import Post from './Post';
import { PostProps } from '../../types/postprops';

const PostInfo = () => {
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const post = posts.find((post) => String(post.id) === id) as PostProps;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!post) {
    return (
      <div className="p-5 font-bold text-red-500 text-xl">
        No post found for this id.
      </div>
    );
  }

  return (
    <div className="flex bg-silv justify-center">
      <article className="p-5 mt-6 flex w-1/2 mmd:w-full">
        <Post {...post} isInfoPage={true} />
      </article>
    </div>
  );
};

export default PostInfo;
