import { createContext, useEffect, useState } from 'react';
import { PostProvider as PostProviderProps } from 'types/postprovider';

export const PostContext = createContext([]);

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState([]);
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
};
